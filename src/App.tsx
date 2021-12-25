import React, {useState} from 'react';
import './App.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <textarea className="textarea" value={input} 
      onChange={(e) => setInput(e.target.value)}/>
      <ReactMarkdown className="preview-markdown" 
      children={input}
      remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={docco}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}
       />
    </div>
  );
}

export default App;