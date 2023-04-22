import { utcToDate } from "../../helpers/utcToDate";
const color = 'FFC5F0';
const size = '32';
const queryParams = `${size}/${color}`;


export const TopicPost = ( post ) => {
    return (
        <section className = "post">
            <div className="post__counter-container">
                <img src={`https://img.icons8.com/glyph-neue/${queryParams}/long-arrow-up.png`}/> 
                    <h4>{ post.ups + post.downs }</h4>
                <img src={`https://img.icons8.com/glyph-neue/${queryParams}/long-arrow-down.png`}/>
            </div>
            <div className="post__top-container">
                <a href="#" >
                    { post.subreddit}
                </a>
                
                <h3>
                    { post.title }
                </h3>
            </div>
            {
                post.is_video ? ( 
                    <div className="post__content-container">  
                    
                        <video controls width="350">
                            <source src={post.video_src} type="video/mp4" />
                            Your browser does not support the video tag
                        </video>
                    </div> 
                ) : null
            }   
            <div className="post__info-container">
                <p>Posted by <strong>{ post.author }</strong></p>
                <p><strong>{utcToDate(post.created)}</strong> hours ago</p>
                <div className="post__comments-container">
                    <img src={`https://img.icons8.com/glyph-neue/${queryParams}/comments--v1.png`}/>
                    <p>{post.num_comments}</p>
                </div>
            </div>  
        
        </section>
    );
}