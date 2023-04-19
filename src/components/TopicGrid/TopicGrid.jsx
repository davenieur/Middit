import { useFetchPosts } from "../../hooks/useFetchPosts";
import { TopicPost } from "../TopicPost/TopicPost"

export const TopicGrid =( { topic } ) => {
    const { posts, isLoading } = useFetchPosts(topic);
    
    return(
        <main> 
            
            { topic === "popular" ? "" : <h2> { topic.toUpperCase() } </h2> } 

            {
                isLoading && ( <h2>Loading...</h2> )
            }

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
           
             
        </main>
    )
}