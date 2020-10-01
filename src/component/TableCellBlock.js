import React from 'react';

const TableCellBlock = (props) => {

    let style={
        textAlign: props.align ? props.align : 'center',
        padding : 5
    };

    if (props.isHeader) {
        style.background = '#ff0';
        style.border = '1px solid #ccc';
        style.borderLeft = 0;
        style.borderRight = 0;
    } else {
        style.borderBottom = '1px solid #eee';
    }

    return (
        <td style={style}>
            {props.children}
        </td>
    )
}

export default TableCellBlock;