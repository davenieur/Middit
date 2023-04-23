import { useState, useEffect } from "react";
import { getComments } from "../helpers/getComments";

export const useFetchComments = ( subreddit, postId ) => {
    const [ comments, setComments ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );

    useEffect( () => {
        setIsLoading(true);
        const getCommentsInfo = async() => {
            const newComments = await getComments( subreddit, postId );
            setComments(newComments);
            setIsLoading(false);
        }

        getCommentsInfo();
    }, [ subreddit, postId]);


    return {
        comments: comments,
        isLoading: isLoading
    }
}