import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, RTE, Input, Select } from '../index'
import postservice from '../../appwrite/postConfig'
import fileservice from '../../appwrite/fileConfig'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || 'active',
        }
    });
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const [text,setText] = useState("");

    const submit = async (data) => {
        if(text === "Update")
        {
            setText("Updating");
        }
        else{
            setText("Submitting");
        }
        if (post) {
            const file = data.image[0] ? await fileservice.uploadFile(data.image[0]) : null;
            if (file) {
                fileservice.deleteFile(post.featuredImage);
            }
            const dbPost = await postservice.updatePost(post.$id, { ...data, featuredImage: file ? file.$id : undefined })
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        }
        else {
            const file = data.image[0] ? await fileservice.uploadFile(data.image[0]) : null;
            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                // console.log("user id",userData.$id);
                const dbPost = await postservice.createPost({
                    ...data,
                    userId: userData.$id
                })
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-")
        }
        return "";
    }, []);

    React.useEffect(() => {
        post ? setText("Update") : setText("Submit");
      }, [setText, post]);

    React.useEffect(() => {
        const subsciption = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subsciption.unsubscribe();
        
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap" style={{backgroundColor:"#BFD8AF"}}>
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    disabled
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4 sm:text-sm"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {/* {console.log("featured image: ",post.featuredImage)} */}
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={fileservice.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {text}
                </Button>
            </div>
        </form>
    );
}

export default PostForm