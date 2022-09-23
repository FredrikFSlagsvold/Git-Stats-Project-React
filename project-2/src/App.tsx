import React from 'react';
import { getMergeRequests } from './utils/fetch';
import Issue from './utils/Issue';

function App() {
  const issue = getMergeRequests()
  return (
    <div >
      <header >
Hei,
      <Issue issue = {issue} />
      </header>
    </div>
  );
}

export default App;
