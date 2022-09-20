import React, { useState } from 'react';
import LoginPage from './LoginPage';
import StatsPage from './sections/StatsPage';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [id, setId] = useState(0);
  const [token, setToken] = useState("");

    console.log("id",id)
    console.log("token",token)
      
  
  return (
    <div >
      {isLoggedIn && 
      <StatsPage/>}
      {!isLoggedIn && <LoginPage id={setId} token={setToken} />}
    </div>
  );
}

export default App;
