import { useParams } from 'react-router-dom';
import { useFetchPosts } from "../../hooks/useFetchPosts";
import { Post } from "../Post/Post"
import { Loading } from "../Loading/Loading";

export const TopicPage =() => {
    const { topic } = useParams();
    const { posts,  loadingPosts } = useFetchPosts(topic);

    return(
        <>
            {
                posts.length === 0 ? (  
                    <main>
                            <h2>Not found</h2> 
                    </main>

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
            }
        </>
        
    )
}