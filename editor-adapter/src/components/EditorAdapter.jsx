import React from "react";
import MonacoEditorComponent from "./MonacoEditorComponent";
import CodeMirrorEditorComponent from "./CodeMirrorEditorComponent"
import AceEditorComponent from "./AceEditorComponent";
const EditorAdapter = () => {
  const [value, setValue] = React.useState(undefined);
  const [height, setHeight] = React.useState("50vh");
  const [width, setWith] = React.useState("80vw");
  const [language, setLanguage] = React.useState("javascript");
  const [theme, setTheme] = React.useState("dracula");
  const [defaultValue, setDefaultValue] = React.useState("// Default code editor");
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
      {/* <MonacoEditorComponent
        defaultLanguage={language}
        height = {height}
        width = {width}
        handleSaveValue={(data) => handleSaveValue(data)}

      /> */}
      {/* <AceEditorComponent 
        defaultLanguage={language} 
        height={height}
        width={width}

      /> */}
      <CodeMirrorEditorComponent 
        height = {height}
        width = {width}
        language = {language}
        defaultValue = {defaultValue}
        handleSaveValue={(data) => handleSaveValue(data)}
        theme={theme}
        />
    </div>
  );
};

export default EditorAdapter;
