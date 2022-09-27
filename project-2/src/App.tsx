import React, { useState } from 'react';
import LoginPage from './LoginPage';
import StatsPage from './sections/StatsPage';
// import axiosInstance from './utils/axios';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  console.log(isLoggedIn)
  return (
    <div >
      {sessionStorage.getItem("isLoggedIn") === "true" ? 
      <StatsPage/> :
      <LoginPage isLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;
