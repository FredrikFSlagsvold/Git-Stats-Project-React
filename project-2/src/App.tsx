import React, { useState } from 'react';
import StatsPage from './sections/StatsPage';
import Header from './components/Header';

function App() {


const [personID, setPersonID] = useState(0);


  return (
    <div >
      <Header setPersonID={setPersonID} id={0}/>
  
      <StatsPage person={personID}/>
    </div>
  );
}

export default App;
