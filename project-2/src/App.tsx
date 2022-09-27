import { useState } from 'react';
import StatsPage from './sections/StatsPage';
import Header from './components/Header';

function App() {

const [authorName, setAuthorName] = useState("All"); 



  return (
    <div >
      <Header title={""} setAuthorName={setAuthorName} author_name={""}/> 
      <StatsPage authorName={authorName}/> 
    </div>
  );
}

export default App;
