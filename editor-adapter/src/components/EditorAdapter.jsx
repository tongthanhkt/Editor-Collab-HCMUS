import React from "react";
import MonacoEditorComponent from "./MonacoEditorComponent";
import AceEditorComponent from "./AceEditorComponent";
import CodeMirrorEditorComponent from "./CodeMirrorEditorComponent";

const EditorAdapter = () => {
  const [value, setValue] = React.useState(undefined);

  function handleSaveValue(data) {
    // Data get from 3rd party component
    setValue(data);
    console.log("Saved");
  }

  // Logout new editor value when state changes
  React.useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      {/* Monaco */}
      <MonacoEditorComponent
        handleSaveValue={(data) => handleSaveValue(data)}
      />

      {/* Ace */}
      {/* <AceEditorComponent handleSaveValue={(data) => handleSaveValue(data)} /> */}

      {/* Code mirror */}
      {/* <CodeMirrorEditorComponent
        handleSaveValue={(data) => handleSaveValue(data)}
      /> */}
    </>
  );
};

export default EditorAdapter;
