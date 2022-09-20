import React from 'react';
import StatsPage from './sections/StatsPage';
import { getProfile } from './utils/fetch';

function App() {
  getProfile()
  return (
    <div >
      <header >
        
      </header>
    
      <StatsPage/>
    </div>
  );
}

export default App;
