import React from 'react';
import Settings from './Settings';
import { isMobile } from 'utils';
import AceEditorComponent from './AceEditorComponent';
import MonacoEditorComponent from './MonacoEditorComponent';
import CodeMirrorEditorComponent from './CodeMirrorEditorComponent';


const Editor = _ => {
  

  return <div >
    {
      !isMobile && (
        
        <CodeMirrorEditorComponent/>
      )
    }
    <Settings />
  </div>;
}

export default Editor;
