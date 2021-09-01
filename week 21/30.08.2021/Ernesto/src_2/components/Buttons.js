import React, { useContext } from 'react';
import { DislpayContext } from '../App';

const Buttons = () => {
  // Hooks
  // - context
  const { changeDisplayState } = useContext(DislpayContext);
  return (
    <div>
      <button onClick={() => changeDisplayState('posts')}>POSTS</button>
      <button onClick={() => changeDisplayState('comments')}>COMMENTS</button>
      <button onClick={() => changeDisplayState('todos')}>TODOS</button>
    </div>
  );
};

export default Buttons;
