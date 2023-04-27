

// Fech the info of a specific post using it's id
export const getPost = async ( subreddit, id  ) => {
    const url = `https://www.reddit.com/r/${subreddit}/comments/${id}/.json`;
    try{
        const response = await fetch(url);
        let data = await response.json();
        let postData = data[0].data;
        let children = postData.children;
        postData = children.map( element => element.data );
        postData = postData[0];
        const post = {
            id: postData.id,
            title: postData.title,
            author: postData.author,
            subreddit: postData.subreddit,
            created: postData.created,
            is_video: postData.is_video,
            video_src: postData.is_video ? postData.media.reddit_video.fallback_url : "none",
            img_src: postData.url,
            num_comments: postData.num_comments,
            score: postData.score
        };
        
        return post;
    }catch(e){
        throw new Error('No response');
    }
}