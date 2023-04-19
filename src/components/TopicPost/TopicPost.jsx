import { utcToDate } from "../../helpers/utcToDate";
const color = 'EAEAEA';
const size = '32';
const queryParams = `${size}/${color}`;


export const TopicPost = ( post ) => {
    return (
        <section className = "post-card">
            <div className="post-counter">
                <img src={`https://img.icons8.com/glyph-neue/${queryParams}/long-arrow-up.png`}/> 
                    <h4>{ post.ups + post.downs }</h4>
                <img src={`https://img.icons8.com/glyph-neue/${queryParams}/long-arrow-down.png`}/>
            </div>
            <div className="post-top">
                <h5>{ post.subreddit}</h5>
                <h3>
                    { post.title }
                </h3>
            </div>
                {
                    post.is_video ? (
                        <div className="post-content-container">   
                            <video controls width="350">
                                <source src={post.video_src} type="video/mp4" />
                                Your browser does not support the video tag
                            </video>

                        </div>
                   
                    ) : null
                }       
                <div className="post-info-container">
                    <p>Posted by <strong>{ post.author }</strong></p>
                    <p>{utcToDate(post.created)} hours ago</p>
                    <div className="post-comments">
                        <img src={`https://img.icons8.com/glyph-neue/${queryParams}/comments--v1.png`}/>
                        <p>{post.num_comments}</p>
                    </div>
                </div>  
        
        </section>
    );
}