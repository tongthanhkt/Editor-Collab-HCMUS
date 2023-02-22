import React from "react";
import Editor from "@monaco-editor/react";

const MonacoEditorComponent = ({ handleSaveValue, height,width, defaultValue, defaultLanguage }) => {
  const editorRef = React.useRef(null);

  function handleEditorChange(value, event) {
    // here is the current value
  }

  function handleEditorDidMount(editor, monaco) {
    console.log("onMount: the editor instance:", editor);
    console.log("onMount: the monaco instance:", monaco);
    editorRef.current = editor;
  }

  function handleEditorWillMount(monaco) {
    console.log("beforeMount: the monaco instance:", monaco);
  }

  function handleEditorValidation(markers) {
    // model markers
    // markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  return (
    <>
      <button onClick={() => handleSaveValue(editorRef.current.getValue())}>
        Save
      </button>
      <Editor
        theme="dark"
        height={height}
        width={width}
        defaultLanguage={defaultLanguage}
        defaultValue={defaultValue}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        beforeMount={handleEditorWillMount}
        onValidate={handleEditorValidation}
      />
    </>
  );
};

export default MonacoEditorComponent;
