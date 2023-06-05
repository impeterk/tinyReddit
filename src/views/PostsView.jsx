// import {useState, useEffect} from 'react'
import db from '@/db.json'
import Post from '@/components/elements/Post.jsx'
import { getSubreddit } from "../api";
import { useParams } from 'react-router-dom';

export default function PostsView() {
    const {subreddit} = useParams()

    // getSubreddit(subreddit)
    const postsArray = db.posts

    return (
        <>
       <ul>
       {postsArray.map(post => (
        <li key={post.id}><Post post={post}/></li>
       ))} 
        </ul> 
        </>
    
    )
}