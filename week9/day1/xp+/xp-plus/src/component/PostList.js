import PostData from '../json/posts.json'
import React from 'react'

function PostList() {
    
    
    return (
        <div>
            {PostData.map((postDetails,index)=>{
                return <div>
                <h1>{postDetails.title}</h1>
                <p>{postDetails.content}</p>
                </div>
            })}
        </div>
    )
}

export default PostList
