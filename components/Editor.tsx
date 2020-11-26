import AceEditor from 'react-ace';
import { render } from 'react-dom';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

const Editor = () => (
  <AceEditor
    mode="java"
    theme="github"
    onChange={console.log}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
  />
);

export default Editor;
