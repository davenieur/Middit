import { useFetchComments } from "../../hooks/useFetchComments";
import { Loading } from "../Loading/Loading";

export const CommentsGrid =( { subreddit, postId } ) => {
    const { comments, isLoading } = useFetchComments(subreddit, postId);
    
    return(
        <div> 
            <div className="main__name-container">
                <h2>{ subreddit }</h2>
            </div>
           
          
        </div>
    )
}