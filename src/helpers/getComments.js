export const getComments = async ( subreddit, postId  ) => {
    const url = `https://www.reddit.com/${subreddit}/comments/${postId}.json`;
    const response = await fetch(url);
    let data = await response.json();
    data = data[1].data;
    const { children } = data;
    data = children.map( element => element.data );
    // The last element it's a count, that's why I removed it
    data = data.slice(0, data.length-1);
    const comments = data.map(comment => ({
        author: comment.author,
        body: comment.body,
        created: comment.created,
        replies: comment.replies,
        score: comment.score
    }));
    return comments;
}