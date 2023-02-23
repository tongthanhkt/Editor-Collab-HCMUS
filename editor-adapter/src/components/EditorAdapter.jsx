import React from "react";
import MonacoEditorComponent from "./MonacoEditorComponent";
import CodeMirrorEditorComponent from "./CodeMirrorEditorComponent";
import AceEditorComponent from "./AceEditorComponent";

const dbData = `console.log('Load from db')`;

const EditorAdapter = () => {
  // Value get from editor
  const [value, setValue] = React.useState(undefined);

  // Editor props
  const [height, setHeight] = React.useState("50vh");
  const [width, setWith] = React.useState("80vw");
  const [language, setLanguage] = React.useState("javascript");
  const [defaultValue, setDefaultValue] = React.useState(dbData);

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
    <div>
      {/* Editor goes here... */}
      <MonacoEditorComponent
        defaultValue={defaultValue}
        defaultLanguage={language}
        height={height}
        width={width}
        handleSaveValue={(data) => handleSaveValue(data)}
      />

      {/* <AceEditorComponent
        defaultValue={defaultValue}
        defaultLanguage={language}
        height={height}
        width={width}
        handleSaveValue={(data) => handleSaveValue(data)}
      /> */}

      {/* <CodeMirrorEditorComponent
        height={height}
        width={width}
        language={language}
        defaultValue={defaultValue}
        defaultLanguage={language}
        handleSaveValue={(data) => handleSaveValue(data)}
      /> */}
    </div>
  );
};

export default EditorAdapter;
