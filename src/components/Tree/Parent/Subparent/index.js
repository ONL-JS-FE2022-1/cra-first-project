import React from 'react';
import Child from './Child';

const Subparent = (props) => {
    return (
        <div>
            <div style={{border: '3px solid black', padding: '25px'}}>
            Subparent
            <Child />
        </div>
        </div>
    );
}

export default Subparent;
