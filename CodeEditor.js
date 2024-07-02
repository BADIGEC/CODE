import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';



const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '200px',
          fontFamily: 'monospace',
          fontSize: '16px',
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '4px',
        }}
      />
      <SyntaxHighlighter language="javascript" style={coy}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeEditor;
