import { utcToDate } from "../../helpers/utcToDate";
import PropTypes from 'prop-types';


export const Comment = ({ author, body, created, replies }) => {
    
    return(
        <div className="comment">
            <div className="comment__info-container">
                <strong>
                    {author}
                </strong>
                <p><strong>{utcToDate(created)}</strong> days ago</p>
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