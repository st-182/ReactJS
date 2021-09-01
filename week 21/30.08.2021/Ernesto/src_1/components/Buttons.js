import React, { useContext } from 'react';
import { DislpayContext } from '../App';

const Buttons = () => {
  // Hooks
  // - Context
  const { displayData } = useContext(DislpayContext);

  return (
    <div>
      <button onClick={() => displayData('posts')}>POSTS</button>
      <button onClick={() => displayData('comments')}>COMMENTS</button>
      <button onClick={() => displayData('todos')}>TODOS</button>
    </div>
  );
};

export default Buttons;
