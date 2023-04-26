import { useParams } from "react-router-dom";
import { useFetchComments } from "../../hooks/useFetchComments";
import { Comment } from "../Comment/Comment";

export const CommentsPage =( { post }) => {
    const { subreddit, id } = useParams();
    const { isLoading, comments } = useFetchComments( subreddit, id );
    

    return(
        <main className="comments-page"> 
            <div className= "comments-container">
                <h4>Comments</h4>
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