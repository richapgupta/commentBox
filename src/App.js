import React from 'react';
import './App.css';

import CommentBox  from '../src/components/commentBox';
import CommentList from '../src/components/commentList';

function App() {
  return (
    <div>
      <CommentBox/>
      <CommentList/>
    </div>
  )
}

export default App;
