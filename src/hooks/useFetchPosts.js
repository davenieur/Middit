import { useState, useEffect } from "react";
import { getPosts } from '../helpers/getPosts';

export const useFetchPosts = topic => {
    const [ posts, setPosts ] = useState([]);
    const [ loadingPosts, setLoadingPosts ] = useState( true );

    useEffect( () => {
        setLoadingPosts(true);
        const getPostsInfo = async() => {
            const newPosts = await getPosts( topic );
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