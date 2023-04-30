// Fech the comments of a specific post using it's id and post info
export const getComments = async ( subreddit, id  ) => {
    const url = `https://www.reddit.com/r/${subreddit}/comments/${id}/.json`;
    try{
        const response = await fetch(url);
        let data = await response.json();

        /*GET COMMENTS*/
        let commentsData = data[1].data;
        let { children } = commentsData;
        commentsData = children.map( element => element.data ); 
        // The last element it's a count, that's why I removed it
        commentsData = commentsData.slice(0, commentsData.length-1);
        const comments = commentsData.map(comment => ({
            author: comment.author,
            body: comment.body,
            created: comment.created,
            replies: typeof comment.replies === "string" ? [] : comment.replies.data.children.filter(element => element.kind === 't1'),
            score: comment.score
        }));
        
        /*GET POST INFO*/
        let postData = data[0].data;
        children = postData.children;
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
        
        return [ post, comments ];
 
    }catch(e){
        throw new Error('No response');
    }
}