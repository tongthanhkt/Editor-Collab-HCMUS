import "./App.css";
import MonacoEditorComponent from "./components/MonacoEditorComponent";
// import CodeMirrorEditorComponent from "./components/CodeMirrorEditorComponent";
// import AceEditorComponent from "./components/AceEditorComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Editor</h1>

        {/* Editor here... */}
        <MonacoEditorComponent />
        {/* <CodeMirrorEditorComponent /> */}
        {/* <AceEditorComponent /> */}
      </header>
    </div>
  );
}

export default App;
