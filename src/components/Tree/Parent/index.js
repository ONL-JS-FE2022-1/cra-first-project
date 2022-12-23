import React from 'react';
import Subparent from './Subparent';

const Parent = (props) => {
    return (
        <div>
            <div style={{border: '3px solid black', padding: '25px'}}>
            Parent
            <Subparent />
        </div>
        </div>
    );
}

export default Parent;
