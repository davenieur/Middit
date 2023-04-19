export const getPosts = async (topic) => {
    const url = `https://www.reddit.com/search.json?q=${topic}`
    const response = await fetch( url );
    let { data } = await response.json();
    const { children } = data;
    data = children.map( element => element.data );
    const posts = data.map(data => ({
        id: data.id,
        title: data.title,
        author: data.author,
        subreddit: data.subreddit_name_prefixed,
        created: data.created,
        is_video: data.is_video,
        video_src: data.is_video ? data.media['reddit_video'].fallback_url : false, 
        img_src: data.url,
        num_comments: data.num_comments,
        commentsLink: data.permalink,
        ups: data.ups,
        downs: data.downs
    }));
    console.log(posts);
    return posts;
}
