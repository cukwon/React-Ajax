import React from 'react';
import {Button} from 'semantic-ui-react';
import './Navigator.css'

const Navigator = ({postId, onChange}) => (
    <div className="Navigate">
        <Button
            color="teal"
            content="Previous"
            icon="left arrow"
            labelPosition="left"
            onClick={() => onChange(-1)}
        />
        <div className="Navigate-page-num">
            {postId}
        </div>
        <Button
            color="teal"
            content="Next"
            icon="right arrow"
            labelPosition="right"
            className="Navigate-right-button"
            onClick={() => onChange(+1)}
        />
    </div>
);

export default Navigator;