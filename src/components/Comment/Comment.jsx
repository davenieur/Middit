import { utcToDate } from "../../helpers/utcToDate";
import PropTypes from 'prop-types';


export const Comment = ({ author, body, created, replies, isReply }) => {
    return(
        <div className={`${isReply ? "reply" : "comment"}`}>
            <div className="comment__info-container">
                <h4>
                    {author}
                </h4>
                <strong>{utcToDate(created)} days ago</strong>
            </div>
            <div className="comment_content-container">
                <p>{body}</p>
            </div>
            {
                Object.entries(replies).length > 0 ? (
                    <div className="comment_replies-container">
                        {   
                            replies.length > 0 ? 
                            replies.map( ( reply, index ) => {
                                return(
                                    <Comment 
                                        { ...reply.data }
                                        key = {index}
                                        isReply = {true}
                                    />
                                )
                            })
                            : null
                        } 
                    </div>
                ) : null
            }
        </div>
    )
} 

Comment.propTypes = {
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    replies: PropTypes.array.isRequired,
}