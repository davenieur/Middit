import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchPosts } from "../../hooks/useFetchPosts";
import { Post } from "../Post/Post"
import { Loading } from "../Loading/Loading";
import { NotFound } from '../NotFound/NotFound';

export const TopicPage =() => {
    const { topic } = useParams();
    const { posts,  loadingPosts } = useFetchPosts(topic);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [topic]);

    return(
        <>
            {
                !loadingPosts ? (
                    posts.length === 0 ? (  
                        <NotFound />
                    )       
                    : (
                        <main> 
                            <h2>{ topic.toUpperCase() }</h2>
                            {
                            posts.map( post => {
                                return(
                                    // Return topic's posts and the post object
                                    <Post 
                                        key = { post.id } 
                                        { ...post}
                                        commentsVisible = {true}
                                    />
                                )
                            })
                        }
                        </main>
                    )
                ) : (<Loading />)
            }
        </>
        
    )
}