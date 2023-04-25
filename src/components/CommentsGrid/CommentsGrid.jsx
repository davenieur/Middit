import { useState } from "react";
import { useFetchComments } from "../../hooks/useFetchComments";
import { Comment } from "../Comment/Comment";
import { Loading } from "../Loading/Loading";
import PropTypes from 'prop-types';


export const CommentsGrid =( { subreddit, id } ) => {
    const { isLoading, comments } = useFetchComments( subreddit, id );
    

    return(
       
        <div className= "comments-container">
            <h4>Comments</h4>
           { 
                comments.map(comment => {
                    return(
                        <Comment 
                            {...comment}
                        />
                    )
                    
                })
            }

        </div>
    )
}

CommentsGrid.propTypes = {
    subreddit: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired
}