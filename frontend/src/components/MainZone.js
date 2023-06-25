import React from 'react';
import CodeBlock from './CodeBlock';
function MainZone() {


  return (
    <div className="main">
        <div>
        <CodeBlock>
            {'const hello = "Hello, world!";\nconsole.log(hello);\n<div className="banner">\n<h1>Welcome to the Coding Blog!</h1></div>'}
        </CodeBlock>
        Jakis tekst tutaj dal `${<CodeBlock> {'const whatever = "cos"'}</CodeBlock>}`

        
        <br></br>
        
    <p>Hehe</p>      </div>  
  
  </div>
  );
}

export default MainZone;
