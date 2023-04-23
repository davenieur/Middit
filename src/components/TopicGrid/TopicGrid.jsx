import { useFetchPosts } from "../../hooks/useFetchPosts";
import { TopicPost } from "../TopicPost/TopicPost"
import { SearchBar } from "../SearchBar/SearchBar";
import { Loading } from "../Loading/Loading";

export const TopicGrid =( { topic, onChangeTopic } ) => {
    const { posts, isLoading } = useFetchPosts(topic);
    
    return(
        <main> 
            <SearchBar 
              onChangeTopic = { onChangeTopic }
            />


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