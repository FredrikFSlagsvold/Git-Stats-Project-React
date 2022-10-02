import Page from './utils/Page';
import { useState } from 'react';
import StatsPage from './sections/StatsPage';
import Header from './components/Header';
import LoginPage from './LoginPage';

function App() {

const [authorName, setAuthorName] = useState("All");
const [isLoggedIn, setIsLoggedIn] = useState(true) 


  return (
    <div >
        
      {sessionStorage.getItem("isLoggedIn") === "true" ? <div>
      <Header title={""} setAuthorName={setAuthorName} author_name={""}/> 
      <StatsPage authorName={authorName}/>
      <Page />
     </div>:
      <LoginPage isLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;
