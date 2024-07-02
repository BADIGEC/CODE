import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-coy.css'; // You can choose other themes


// Ensure you import the language you want to highlight
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-c#';


// Import other languages as needed

const CodeHighlighter = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeHighlighter;
