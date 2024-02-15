import React,{useEffect,useState} from 'react'
import postservice from '../appwrite/postConfig';
import {useNavigate, useParams} from 'react-router-dom';
import {Container, PostForm} from '../components/index';


function EditPost() {
    const [post,setPost] = useState(null);
    const navigate = useNavigate();
    const {slug} =useParams();
    useEffect(()=>{
        if(slug){
            postservice.getPost(slug).then((post)=>{
                setPost(post);
            })
        } else{
            navigate('/')
        }
    },[slug,navigate])
    // console.log("slug",slug);
  return (
    post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    )
     :null
  )
}

export default EditPost