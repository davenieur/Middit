import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { getPosts } from '../helpers/getPosts';

export const useFetchPosts = topic => {
    const navigate = useNavigate();
    const [ posts, setPosts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );

    useEffect( () => {
        setIsLoading(true);
        const getPostInfo = async() => {
            const newPosts = await getPosts( topic );
            setPosts(newPosts);
            setIsLoading(false);
            navigate(`/${topic.toLowerCase()}`)
        }

        getPostInfo();
    }, [ topic ]);


    return {
        posts: posts,
        isLoading: isLoading
    }
}