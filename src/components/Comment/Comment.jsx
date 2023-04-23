import { utcToDate } from "../../helpers/utcToDate";

export const Comment = props => {
    const { author, body, created, replies, score} = props;
    console.log(replies);
    // const { comments, isLoading } = useFetchComments(subreddit, postId);


    return(
        <div className="comment">
            <div className="comment__top-container">
                <a className="comment__autor">
                    {author}
                </a>
                <p><strong>{utcToDate(created)}</strong> days ago</p>
            </div>
            <div className="comment_content-container">
                <p>{body}</p>
            </div>
            {
                replies ? (
                    <div className="comment_replies-container">
                       

                    </div>
                ) : null
            }
            

        </div>

    )
} 