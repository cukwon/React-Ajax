import React from 'react';
import './CommentList.css';
import Comment from '../Comment/Comment';

const CommentList = ({comments}) => {
    const list = comments.map(comment => (<Comment key={comment.id} name={comment.email.split('@')[0]} body={comment.body} ></Comment>))
    return (
        <ul className="CommentList">
            {list}
        </ul>
    );
};


export default CommentList;