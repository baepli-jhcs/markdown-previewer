import { useState } from 'react'
import './App.css';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function App() {
  const [markdown, setMarkdown] = useState(placeholder);
  return (
    <div id="container">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} />
    </div>
  );
}

function Editor(props) {
  return (
    <div id='editor-container'>
      <textarea id="editor" value={props.markdown} onChange={event => props.setMarkdown(event.target.value)} />
    </div>
  )
}

function Preview(props) {
  return (
    <div id='preview-container'>
      <div id='preview'>
        <ReactMarkdown id="preview-text" children={props.markdown} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading

Code: \`<div></div>\`.

\`\`\`
let example = (exampleText) => {
  console.log(exampleText);
}
\`\`\`
"**Lorem** ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim _id est laborum_."

"~~Lorem~~ ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim ~~id est laborum~~."


[links](https://www.freecodecamp.org)
> Block Quotes!


Column 1 | Column 2
------------ | -------------
Row 1 | continued.

- Bulleted List
  - Second indentation level


![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default App;
