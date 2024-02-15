import React, { useState, useEffect } from 'react'
import postservice from '../appwrite/postConfig'
import { Container, PostCard } from '../components/index'
import no_post from '../assets/images/no_posts.png'

function AllPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postservice.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        })
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap justify-center'>

                    {
                        (posts.length === 0) ?(
                            <div className='flex justify-center md:my-12'>
                                <img src={no_post} alt="no_posts" className='w-2/3'/>
                            </div>

                        ) : (
                            posts.map((post) => (
                                <div key={post.$id} className='p-2 w-1/2 md:w-full'>
                                    <PostCard {...post} />
                                </div>
                            ))
                        ) 
                    }
                </div>
            </Container>
        </div>
    )
}

export default AllPosts