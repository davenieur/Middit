import { useParams } from "react-router-dom";
import { useFetchComments } from "../../../hooks/useFetchComments";
import { Comment } from "../../Comment/Comment";
import { Post } from "../../Post/Post";
import { Loading } from "../../Loading/Loading";


export const CommentsPage =() => {
    const { subreddit, id } = useParams();
    const { post, comments, loadingContent } = useFetchComments(subreddit, id);
   
    return(
        <>
           {     loadingContent ?  (<Loading />)  : (
                    <main> 
                        <Post {...post}/>
                        <h2>Comments</h2>
                        <div className= "comments-container">
                            
                            { 
                                comments.map((comment, index) => {
                                    return(
                                        <Comment 
                                            key = {index}
                                            {...comment}
                                        />
                                    )
                                    
                                })
                            }
                
                        </div>
                          
                    </main>
                )  
            }
        </>
           
       
    )
}