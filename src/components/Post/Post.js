import React from 'react';
import './Post.css';
import {CommentList} from '../index'

const Post = ({ post, comments}) => (
    <div className="Post">
        <h1>{post.title}</h1>
        <p>
            {post.body}
        </p>
        <CommentList comments={comments}/>
    </div>
);

export default Post;