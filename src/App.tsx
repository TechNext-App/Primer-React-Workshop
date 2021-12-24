import React, {useState} from 'react';
import './App.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <textarea className="textarea" value={input} 
      onChange={(e) => setInput(e.target.value)}/>
      <ReactMarkdown className="preview-markdown" children={input}/>
    </div>
  );
}

export default App;