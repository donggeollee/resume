import React  from 'react';
import ReactMarkDown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';
import BlockQuoteBlock from './BlockQuoteBlock';
import CodeBlock from './CodeBlock';
import podoSource from './company_history/podo';
import travelaiSource from './company_history/travelai';
import InlineCodeBlock from './InlineCodeBlock';
import TableCellBlock from './TableCellBlock';

export const highlight = (string) => {
    return `<em><strong>${string}</strong></em>`
}

const source = `
# REACT MARKDOWN RENDERING SUCCESS

## asdfasfd
### asdfsad
1. asdfasdf
    * asdfasdf
    * asdfasf   

2. asdfasdfasdf
    * asfdasfd
    * asfdasfd
\`\`\`
package data_structure;

import java.util.Arrays;

class Solution {
    public String solution(String[] participant, String[] completion) {
        
        Arrays.sort(participant);
        Arrays.sort(completion);
        
        for (String part : participant) System.out.print(part + " ");
        System.out.println("");
        for (String comp : completion)	System.out.print(comp + " ");
        
        for(int i = 0; i < completion.length; i++) {
            if(!participant[i].equals(completion[i])) {
                return participant[i];
            }
        }
        return participant[participant.length-1];
    }
}
\`\`\`

> 인용문
글자 \`강조\` 하기;

asdfasfdasf <span style='color:red;'>${highlight('asdfasdfasfd')}</span> asdfasfasdf

`



const parseHtml = htmlParser({
    processingInstructions : [{
        shouldProcessNode : (node) => node && node.name !=='script',
        processNode : (node) => {
            let style = {}; 
            if ( node.name === 'span' && node.attribs && node.attribs.style ){
                style.color = findStyleColor(node.attribs.style, 'color');
            }
            return <node.name style={style} />;
        } 
    }]
})

const findStyleColor = (styleStr, target) => {
    const color = new RegExp(`${target}\\s*:\\s*[#a-zA-Z0-9]+`).exec(styleStr);
    // html style의 : 이후 target 태그의 컬러 값을 검색한다.

    if(color && color.length > 0){
        const colorArr = color[0].split(':');
        if(colorArr.length > 1){
            return colorArr[1];
        }
    }

    return null;

}
const Main = () => {

    return (
        <div style={{margin:10}}>
            <div>
                <h1>이동걸</h1>
                <p><em><strong>자바 개발자</strong></em></p>
                <table>
                    <tr>
                        <td> 
                            <span>트래블라이</span>
                            <p>2020.10 ~ 재직중</p>
                        </td>
                        <td><ReactMarkDown source={travelaiSource}  skipHtml={false} escapeHtml={false} astPlugins={[parseHtml]} renderers={{ code : CodeBlock, tableCell : TableCellBlock, inlineCode : InlineCodeBlock, blockquote : BlockQuoteBlock }}/></td>
                    </tr>
                    <tr style={{verticalAlign:"top"}}>
                        <td> 
                            <span>포도소프트웨어</span>
                            <p>2019.10 ~ 2020.06(9개월)</p>
                        </td>
                        <td><ReactMarkDown source={podoSource}  skipHtml={false} escapeHtml={false} astPlugins={[parseHtml]} renderers={{ code : CodeBlock, tableCell : TableCellBlock, inlineCode : InlineCodeBlock, blockquote : BlockQuoteBlock }}/></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Main;