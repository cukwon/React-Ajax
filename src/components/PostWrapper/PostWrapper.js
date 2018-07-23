import React from 'react';
import './PostWrapper.css';
import {Navigator} from "../index";

const PostWrapper = ({children}) => {
    return (
        <div className='PostWrapper'>
            <Navigator/>
            {children}
        </div>
    );
};

export default PostWrapper