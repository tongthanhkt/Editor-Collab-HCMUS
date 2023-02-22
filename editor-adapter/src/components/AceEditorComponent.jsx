import React from "react";
/*--------------------------------------- Ace Editor ------------------------------------>*/
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/theme-clouds";
import "ace-builds/src-noconflict/theme-clouds_midnight";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
/*----------------------------------------------------------------------------->*/
function AceEditorComponent({height,width, defaultValue, defaultLanguage}) {
    return (
        <div>
             <AceEditor
        placeholder="Placeholder Text"
        mode={defaultLanguage}
        theme="dracula"
        name="blah2"
        height={height}
        width={width}
        fontSize={20}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={`console.log("I'm loaded")`}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 4,
        }}
        ref={editorRef}
      />
    </div>
  );
}
export default AceEditorComponent;
