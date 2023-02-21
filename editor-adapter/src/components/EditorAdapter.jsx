import React from "react";
import MonacoEditorComponent from "./MonacoEditorComponent";

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
    <div>
      <MonacoEditorComponent
        handleSaveValue={(data) => handleSaveValue(data)}
      />
    </div>
  );
};

export default EditorAdapter;
