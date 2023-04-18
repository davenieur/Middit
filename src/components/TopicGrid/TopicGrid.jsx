import { Topic } from "../Topic/Topic"

export const TopicGrid =( { topic } ) => {

    
    return(
        <section id="main"> 
             <h2> { topic }  </h2> 
            <Topic />
             
        </section>
    )
}