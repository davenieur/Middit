import { useFetchComments } from "../../hooks/useFetchComments";
import { Comment } from "../Comment/Comment";
import { Loading } from "../Loading/Loading";

export const CommentsGrid =( { subreddit, postId } ) => {
    const { comments, isLoading } = useFetchComments(subreddit, postId);
    
    return(
       
        <div className="comments__grid-container">
            {
                comments.map( (comment, index) => {
                    return(
                        <Comment 
                            key = {index}
                        
                            {... comment}
                        
                        />
                    )
                })
            }            
         
        </div>
    )
}