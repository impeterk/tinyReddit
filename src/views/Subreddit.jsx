// import {useState, useEffect} from 'react'
import db from '../db.json'
import Post from '../components/elements/Post.jsx'

export default function Subreddit() {

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