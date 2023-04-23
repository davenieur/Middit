import { utcToDate } from "../../helpers/utcToDate";
import { CommentsGrid } from "../CommentsGrid/CommentsGrid";
import { checkIfIsImage } from "../../helpers/checkImages";

export const TopicPost = props => {
    const { id, title, author, subreddit, created, is_video, video_src, img_src, num_comments, score } = props;

    return (
        <section className = "post">
            <div className="post__counter-container">
                <img src='https://img.icons8.com/glyph-neue/32/FFC5F0/long-arrow-up.png' alt="Vote up button"/> 
                    <h4>{ score }</h4>
                <img src='https://img.icons8.com/glyph-neue/32/FFC5F0/long-arrow-down.png' alt="Vote down button"/>
            </div>
            <div className="post__top-container">
                <a href="#" >
                    { subreddit}
                </a>
            </div>
            <div className="post__content-container">
                <p className="post__content-text">
                    { title }
                </p>
             

                {
                    is_video ? ( 
                        <div className="post__content-video">  
                            <video controls width="350">
                                <source src={video_src} type="video/mp4" />
                                Your browser does not support the video tag
                            </video>
                        </div> 
                    ) : null
                }    
                {
                    checkIfIsImage(img_src) ? (
                        <div className="post__content-img">  
                            <img  src={img_src} alt="" />
                        </div> 
                    ) : null
                }
                
            </div>

            <div className="post__info-container">
                <p>Posted by <strong>{ author }</strong></p>
                <p><strong>{utcToDate(created)}</strong> days ago</p>
             
                <button  type='button' className="btn btn--comments">
                    <p>{num_comments}</p>
                </button>    
            </div>  

            
            { <CommentsGrid 
                    subreddit={subreddit}
                    postId={id}
                    
                /> 
            }
        </section>
    );
}