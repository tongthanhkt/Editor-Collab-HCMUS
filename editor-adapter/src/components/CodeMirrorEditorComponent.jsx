import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
// import { langs } from '@uiw/codemirror-extensions-langs';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
 import { dracula } from "@uiw/codemirror-themes-all";
// import { githubDark } from "@uiw/codemirror-themes-all";
 import { createTheme } from '@uiw/codemirror-themes';
 import { tags as t } from '@lezer/highlight';
// import { lineNumbersRelative } from '@uiw/codemirror-extensions-line-numbers-relative';
import { mentions } from '@uiw/codemirror-extensions-mentions';

const users = [
  { label: '@Walter White' },
  { label: '@皮皮鲁' },
  { label: '@鲁西西' },
  { label: '@中本聪' },
  { label: '@サトシ・ナカモト' },
  { label: '@野比のび太' },
  { label: '@성덕선' },
];
const myTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#ffffff',
    foreground: '#75baff',
    caret: '#5d00ff',
    selection: '#036dd626',
    selectionMatch: '#036dd626',
    lineHighlight: '#8a91991a',
    gutterBackground: '#fff',
    gutterForeground: '#8a919966',
  },
  styles: [
    { tag: t.comment, color: '#787b8099' },
    { tag: t.variableName, color: '#0080ff' },
    { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
    { tag: t.number, color: '#5c6166' },
    { tag: t.bool, color: '#5c6166' },
    { tag: t.null, color: '#5c6166' },
    { tag: t.keyword, color: '#5c6166' },
    { tag: t.operator, color: '#5c6166' },
    { tag: t.className, color: '#5c6166' },
    { tag: t.definition(t.typeName), color: '#5c6166' },
    { tag: t.typeName, color: '#5c6166' },
    { tag: t.angleBracket, color: '#5c6166' },
    { tag: t.tagName, color: '#5c6166' },
    { tag: t.attributeName, color: '#5c6166' },
  ],
});

export default function CodeMirrorEditorComponent() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
    <div>
      <CodeMirror
        value="const bills = [{
            date: '2020-01-20',
            amount: '70',
            category: 'phone'
          },
          {
            date: '2020-01-20',
            amount: '20',
            category: 'gas'
          },
          {
            date: '2020-02-20',
            amount: '75',
            category: 'phone'
          }
        ]"
        height="200px"
        width="1000px"
        theme={okaidia}
        editable = {true}
        extensions={[cpp(),mentions(users)]}
        onChange={onChange}
        basicSetup={{
          foldGutter: false,
          dropCursor: false,
          allowMultipleSelections: true,
          bracketMatching: false,
          indentOnInput: false,
          lineNumbers: true,
          tabSize: 8,
          lintKeymap: true,
          rectangularSelection: true,
          highlightActiveLine: true,
          highlightActiveLineGutter: false,
          closeBrackets: false
          
          
        }}
        
        //theme={androidstudio}
      />
      <CodeMirror
        value="console.log('hello world!');"
        height="200px"
        extensions={[javascript({ jsx: true }),mentions(users)]}
        onChange={(value, viewUpdate) => {
          console.log("value:", value);
        }}
      />
    </div>
  );
}
