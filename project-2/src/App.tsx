import React, { useState } from 'react';
import LoginPage from './LoginPage';
import StatsPage from './sections/StatsPage';
// import axiosInstance from './utils/axios';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [id, setId] = useState(0);
  const [token, setToken] = useState("");

  const onSubmit = ()=>{
      console.log("id",id)
      console.log("token",token)
  }

  

  return (
    <div >
      {isLoggedIn && 
      <StatsPage/>}
      {!isLoggedIn && <LoginPage id={setId} token={setToken} onSubmit={onSubmit()}/>}
    </div>
  );
}

export default App;
