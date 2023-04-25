import { utcToDate } from "../../helpers/utcToDate";
import PropTypes from 'prop-types';


export const Comment = ({ author, body, created, replies, score }) => {
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
                Object.entries(replies).length > 0 ? (
                    <div className="comment_replies-container">
                        { 
                            replies.map( ( reply, index ) => {
                                // return(
                                //     <Comment 
                                //         { ...reply }
                                //     />
                                // )
                            })
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
    score: PropTypes.number.isRequired
}