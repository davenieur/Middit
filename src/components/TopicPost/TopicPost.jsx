
export const TopicPost = ( { topic } ) => {
    return (
        <section className = "post-card">
            <div className="post-counter">
                <img src="https://img.icons8.com/ios-filled/35/FFC5F0/up--v1.png"/> 
                    <h4>Counter</h4>
                <img src="https://img.icons8.com/ios-filled/35/FFC5F0/down--v1.png"/>
            </div>
            <h3>Title</h3>
            <div className="post-image-container">   
                <img src="https://i.pinimg.com/originals/23/08/0a/23080a24d9b26d5345b99ac8efe92f98.jpg" />
            </div>    
            <div className="info-container">
                <p>Posted by <strong>name</strong></p>
                <p>7 hours ago</p>
                <img src="https://img.icons8.com/ios-filled/50/FFC5F0/comments.png"/>
                <p>232</p>
            </div>
        </section>
    );
}