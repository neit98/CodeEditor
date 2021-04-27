import { Cell } from '../state';
import CodeCell from './code-cell';
import TextEditor from './text-editor';
import ActionBar from './action-bar';
import './cell-list-item.css';

interface CellLisItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellLisItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === 'code') {
    child = <CodeCell cell={cell} />;
  } else {
    child = <TextEditor cell={cell} />;
  }

  return (
    <div className='cell-list-item'>
      {child}
      <ActionBar id={cell.id} />
    </div>
  );
};

export default CellListItem;
