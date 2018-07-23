import React from 'react';
import { Button } from 'semantic-ui-react';
import './Navigator.css';


const Navigator = () => (
    <div className='Navigate'>
        <Button
            color='teal'
            icon='left arrow'
            labelPosition="left" >
            Previous
        </Button>
        <div className="Navigate-page-num">
            1
        </div>
        <Button
            color='teal'
            icon='right arrow'
            labelPosition="right"
            className="Navigate-right-button" >
            Next
        </Button>
    </div>
);

export default Navigator