import React from 'react';

const BlockQuoteBlock = (props) => {

    return (
        <div style={{border:'1px dashed #aaa', 
             borderRadius:10, 
             paddingLeft:10, 
             margin:5
             }}>
            {props.children}
        </div>
    )
}

export default BlockQuoteBlock;