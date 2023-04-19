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
            <h3 className="post-name">
                { post.title }
            </h3>
            <div className="´post-content-container">
                <div className="post-image-container">   
                    
                </div>  
                <div className="post-info-container">
                    <p>Posted by <strong>{ post.author }</strong></p>
                    <p>7 hours ago</p>
                    {/* COMMENTS COMPONENT */}
                    <img src={`https://img.icons8.com/glyph-neue/${queryParams}/comments--v1.png`}/>
                    <p>{ post.num_comments }</p>
                </div>  
            </div>
        </section>
    );
}