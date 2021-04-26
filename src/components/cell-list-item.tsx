import React, { useEffect } from 'react';
import { Cell } from '../state';
import CodeCell from './code-cell';
import TextEditor from './text-editor';

interface CellLisItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellLisItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === 'code') {
    child = <CodeCell />;
  } else {
    child = <TextEditor />;
  }

  return <div>{child}</div>;
};

export default CellListItem;
