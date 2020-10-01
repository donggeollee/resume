import React from 'react';

const InlineCodeBlock = (props) => {

    return (
        <span style={{background : '#ff0'}}>
            {props.value}
        </span>
    )
}



export default InlineCodeBlock;