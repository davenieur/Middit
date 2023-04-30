import { useParams } from 'react-router-dom';
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import { Post } from "../../Post/Post"
import { Loading } from "../../Loading/Loading";

export const TopicPage =() => {
    const { topic } = useParams();
    const { posts,  loadingPosts } = useFetchPosts(topic);

    return(
        <main className='topics-page'> 
            
            <h2>{ topic.toUpperCase() }</h2>
           
           
           {     loadingPosts ?  (<Loading />)  : (
                    <div className="topic-grid-container">
                        {
                            posts.map( post => {
                                return(
                                    // Return topic's posts and the post object
                                    <Post 
                                        key = { post.id } 
                                        { ...post}
                                    />
                                )
                            })
                        }  
                    </div>
                )  
            }
        </main>
    )
}