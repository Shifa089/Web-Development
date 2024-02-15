import React, { useEffect, useState } from 'react'
import { Container, PostCard, Logo } from '../components/index'
import postservice from '../appwrite/postConfig'
import { useSelector } from 'react-redux';
import home_page from '../assets/images/home_page.png'

function Home() {
    const [posts, setPosts] = useState([]);
    const authStatus = useSelector((state) => state.auth.status);
    useEffect(() => {
        postservice.getPosts([]).then((posts) => {
            if (posts) {
                // console.log("posts",posts);
                setPosts(posts.documents);
            }
        })
    }, [])
    if (!authStatus) {
        return (
            <div className="w-full py-8 mt-4 text-center sm:h-2/3">
                <Container>
                    <div className="flex flex-col flex-wrap my-40">
                        <div className='flex justify-center my-5'>
                            <Logo width='200px' />
                        </div>
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div
                className="m-7 bg-cover h-screen flex items-center justify-center md:h-2/3 md:m-16"
                style={{ backgroundImage: `url(${home_page})` }}
            >
                <div className="text-white text-center">
                    <h1 className="text-4xl font-bold mb-4">Add Posts</h1>
                    <p className="text-lg">Get Creative</p>
                </div>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap justify-center md:items-center'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4 md:w-1/2 sm:w-full'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home