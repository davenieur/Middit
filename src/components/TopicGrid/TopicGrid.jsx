import { TopicPost } from "../TopicPost/TopicPost"

export const TopicGrid =( { topic } ) => {

    
    return(
        <main> 
            {/*SOLO PARA PROBAR*/}
            <h2> { topic }  </h2> 
            {/* Esto va dentro de un map */}
            <TopicPost />
             
        </main>
    )
}