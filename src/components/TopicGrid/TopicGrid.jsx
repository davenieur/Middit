import { useFetchPosts } from "../../hooks/useFetchPosts";
import { TopicPost } from "../TopicPost/TopicPost"
import { Loading } from "../Loading/Loading";
import PropTypes from 'prop-types';

export const TopicGrid =( { topic } ) => {
    const { posts, isLoading } = useFetchPosts(topic);
    
    return(
        <main> 
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

TopicGrid.propTypes = {
    topic: PropTypes.string.isRequired
}