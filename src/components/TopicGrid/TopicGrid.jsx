import { useFetchPosts } from "../../hooks/useFetchPosts";
import { TopicPost } from "../TopicPost/TopicPost"

export const TopicGrid =( { topic } ) => {
    const { posts, isLoading } = useFetchPosts(topic);
    
    return(
        <main> 
            
            { topic === "home" ? "" : <h2> { topic } </h2> } 

            {
                isLoading && ( <h2>Cargando...</h2> )
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