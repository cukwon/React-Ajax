import React from 'react';
import './CommentList.css';
import Comment from '../Comment/Comment';

const CommentList = () => {
    return (
        <ul className="CommentList">
            <Comment/>
            <Comment/>
            <Comment/>
        </ul>
    );
};


export default CommentList;