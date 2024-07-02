import React, { useState } from 'react';
import './App.css';
import CodeHighlighter from './CodeHighlighter';

function App() {
  const [code, setCode] = useState(`const hello = 'Hello, World!';\nconsole.log(hello);`);
  const [language, setLanguage] = useState ('javascript');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Code Highlighter</h1>
      </header>
      <main>
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
        <CodeHighlighter code={code} language={language} />
      </main>
    </div>
  );
}

export default App;
