import React from 'react';

const CodeBlock = (props) => {

    return (
        <pre style={{background:'#483D8B', 
                     color:'#FFFFFF', 
                     padding:10, 
                     margin:10, 
                     borderRadius:10,
                     lineHeight:1.5
                     }}>
            <code>
                {props.value}
            </code>
        </pre>
    )
}

export default CodeBlock;