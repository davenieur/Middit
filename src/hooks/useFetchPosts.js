import { useState, useEffect } from "react";
import { fetchPosts } from '../helpers/fetchPosts';

export const useFetchPosts = topic => {
    const [ posts, setPosts ] = useState([]);
    const [ loadingPosts, setLoadingPosts ] = useState( true );

    useEffect( () => {
        setLoadingPosts(true);
        const getPostsInfo = async() => {
            const newPosts = await fetchPosts( topic );
            setPosts(newPosts);
            setLoadingPosts(false);  
        }

        getPostsInfo();
    }, [ topic ]);


    return {
        posts: posts,
        loadingPosts: loadingPosts
    }
}