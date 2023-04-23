import { utcToDate } from "../../helpers/utcToDate";
import { CommentsGrid } from "../CommentsGrid/CommentsGrid";

export const checkIfIsImage = (imgSrc) => {
    return (imgSrc.match(/\.(jpeg|jpg|gif|png)$/) != null)
}

export const TopicPost = ( post ) => {
    return (
        <section className = "post">
            <div className="post__counter-container">
                <img src='https://img.icons8.com/glyph-neue/32/FFC5F0/long-arrow-up.png' alt="Vote up button"/> 
                    <h4>{ post.score }</h4>
                <img src='https://img.icons8.com/glyph-neue/32/FFC5F0/long-arrow-down.png' alt="Vote down button"/>
            </div>
            <div className="post__top-container">
                <a href="#" >
                    { post.subreddit}
                </a>
            </div>
            <div className="post__content-container">
                <div className="post__content-text-container">
                    <p className="post__content-text">
                        { post.title }
                    </p>
                </div>

                {
                    post.is_video ? ( 
                        <div className="post__content-video">  
                            <video controls width="350">
                                <source src={post.video_src} type="video/mp4" />
                                Your browser does not support the video tag
                            </video>
                        </div> 
                    ) : null
                }    
                {
                    checkIfIsImage(post.img_src) ? (
                        <div className="post__content-img">  
                            <img  src={post.img_src} alt="" />
                        </div> 
                    ) : null
                }
                
            </div>

            <div className="post__info-container">
                <p>Posted by <strong>{ post.author }</strong></p>
                <p><strong>{utcToDate(post.created)}</strong> hours ago</p>
             
                <button  type='button' className="btn btn--comments">
                    <p>{post.num_comments}</p>
                </button>
                    
        
                {/* <CommentsGrid 
                    subreddit={post.subreddit}
                    postId={post.id}btn--comments
                /> */}
            </div>  
        
        </section>
    );
}