
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { utcToDate } from "../../helpers/utcToDate";
import { checkIfIsImage } from "../../helpers/checkImages";
import PropTypes from 'prop-types';


export const Post = ( { id, title, author, subreddit, created, is_video, video_src, img_src, num_comments, score, commentsVisible } ) => {

    const navigate = useNavigate();
    
    const handleClick = e => {
        navigate(`/${subreddit}/${id}`);
    }

    return (
        <section className = "post">
            <div className="post__counter-container">
                <img src='https://img.icons8.com/glyph-neue/32/FFC5F0/long-arrow-up.png' alt="Vote up button"/> 
                    <h4>{ score }</h4>
                <img src='https://img.icons8.com/glyph-neue/32/FFC5F0/long-arrow-down.png' alt="Vote down button"/>
            </div>
            <div className="post__top-container">
                <a href={`https://www.reddit.com/r/${subreddit}/comments/${id}`} >
                    <h4>r/{subreddit.toLowerCase()}</h4>
                </a>
            </div>
            <div className="post__content-container">
                <p className="post__content-text">
                    { title }
                </p>
                
                {
                    is_video ? ( 
                       
                        <video controls width="350">
                            <source src={video_src} type="video/mp4" />
                            Your browser does not support the video tag
                        </video>
                    ) : null
                }    
                {
                    checkIfIsImage(img_src) ? (
                        <div className="post__content-img">  
                            <img  src="{img_src}" alt="" />
                        </div> 
                    ) : null
                }
                
            </div>

            <div className="post__info-container">
                <p>Posted by <strong>{ author }</strong></p>
                <p><strong>{utcToDate(created)}</strong> days ago</p>


                <button  type='button' className={`btn btn--comments ${commentsVisible ? "visible" : "hidden" }` } onClick={handleClick}>
                    <p>{num_comments}</p>
                </button>    
            </div> 
        </section>
    );
}

Post.propTypes = {
    id: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    author: PropTypes.string.isRequired, 
    subreddit: PropTypes.string.isRequired, 
    created: PropTypes.number.isRequired, 
    is_video: PropTypes.bool.isRequired, 
    video_src: PropTypes.string.isRequired, 
    img_src: PropTypes.string.isRequired, 
    num_comments: PropTypes.number.isRequired, 
    score: PropTypes.number.isRequired
}