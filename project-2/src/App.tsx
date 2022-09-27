import React from 'react';
import { getMergeRequests } from './utils/fetch';
import Page from './utils/Page';
import Bar from './utils/BarChart';

function App() {
  return (
    <div >
      <header >
        
      <Page />
      </header>
      <Bar />
    </div>
  );
}

export default App;
