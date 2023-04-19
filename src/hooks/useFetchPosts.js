import { useState, useEffect } from "react";
import { getPosts } from '../helpers/getPosts';

export const useFetchPosts = topic => {
    const [ posts, setPosts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true )

    const getPostInfo = async() => {
        const newPosts = await getPosts( topic );
        setPosts(newPosts);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getPostInfo();
    });


    return {
        posts: posts,
        isLoading: isLoading
    }
}