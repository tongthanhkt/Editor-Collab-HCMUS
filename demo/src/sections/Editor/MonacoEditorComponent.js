import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import { useStore } from 'store';
import useStyles from './useStyles';
import examples from 'config/examples';
import config from 'config';
function MonacoEditorComponent (){
    const classes = useStyles();
  const { state: { editor: { selectedLanguageId, options }, monacoTheme } } = useStore();

  const language = config.supportedLanguages.find(({ id }) => id === selectedLanguageId).name;

  function handleEditorWillMount(monaco) {
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.Latest,
      module: monaco.languages.typescript.ModuleKind.ES2015,
      allowNonTsExtensions: true,
      lib: ['es2018'],
    });
  }
    return (
        <MonacoEditor className={classes.root}
          theme={monacoTheme}
          height="50vh"
          path={language}
          defaultValue={examples[selectedLanguageId] || ''}
          defaultLanguage={language}
          options={options}
          beforeMount={handleEditorWillMount}
        />
    )
}
export default MonacoEditorComponent;