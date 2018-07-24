import React from 'react';
import './Comment.css';

const Comment = ({name, body}) => {
    return (
        <li className="Comment">
            <p>
                <b>{name}</b><br/>{body}
            </p>
        </li>
    );
};

export default Comment;