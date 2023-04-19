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
        subredit: data.subreddit_name_prefixed,
        text: data.body_html,
        num_comments: data.num_comments,
        url: data.url,
        ups: data.ups,
        downs: data.downs
    }));
    
    return posts;
}
