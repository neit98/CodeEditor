import MonacoEditor from '@monaco-editor/react';

export default function CodeEditor() {
  return (
    <div>
      <MonacoEditor language='javascript' height='500px' />
    </div>
  );
}
