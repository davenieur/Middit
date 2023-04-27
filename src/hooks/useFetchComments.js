import { useState, useEffect } from "react";
import { getComments } from "../helpers/getComments";

export const useFetchComments = ( subreddit, postId ) => {
    const [ comments, setComments ] = useState([]);
    const [ post, setPost ] = useState({});
    const [ loadingContent, setLoadingContent ] = useState( true );

    useEffect( () => {
        setLoadingContent(true);
        const getCommentsInfo = async() => {
            const  [newPost, newComments]  = await getComments( subreddit, postId );
            setComments(newComments);
            setPost(newPost);
            setLoadingContent(false);
        }
        getCommentsInfo();
    }, [ subreddit, postId]);


    return {
        post: post,
        comments: comments,
        loadingContent: loadingContent
    }
}