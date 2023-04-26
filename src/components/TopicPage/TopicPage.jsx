import { useParams } from 'react-router-dom';
import { useFetchPosts } from "../../hooks/useFetchPosts";
import { TopicPost } from "../TopicPost/TopicPost"
import { Loading } from "../Loading/Loading";

export const TopicPage =() => {
    const { topic } = useParams();
    const { posts, isLoading } = useFetchPosts(topic);
    return(
        <main className='topics-page'> 
            <div className="main__name-container">
                <h2>{ topic.toUpperCase() }</h2>
            </div>
           
           {    isLoading ?  (<Loading />)  : (
                    <div className="topic-grid-container">
                        {
                            posts.map( post => {
                                return(
                                    // Return topic's posts and the post object
                                    <TopicPost 
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