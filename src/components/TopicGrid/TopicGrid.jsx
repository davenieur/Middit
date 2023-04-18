import { useFetchPosts } from "../../hooks/useFetchPosts";
import { TopicPost } from "../TopicPost/TopicPost"

export const TopicGrid =( { topic } ) => {
    const [ posts, isLoading ] = useFetchPosts(topic);

    return(
        <main> 
            {/*SOLO PARA PROBAR*/}
            <h2> { topic }  </h2> 
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            {
                posts.map( post => {
                    return(
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