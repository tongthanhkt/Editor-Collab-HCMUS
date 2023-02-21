import "./App.css";
import EditorAdapter from "./components/EditorAdapter";
// import CodeMirrorEditorComponent from "./components/CodeMirrorEditorComponent";
// import AceEditorComponent from "./components/AceEditorComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Editor</h1>

        {/* Editor here... */}
        <EditorAdapter />

        {/* <CodeMirrorEditorComponent /> */}
        {/* <AceEditorComponent /> */}
      </header>
    </div>
  );
}

export default App;
