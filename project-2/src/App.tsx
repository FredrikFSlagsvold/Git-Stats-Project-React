import React, { useState } from 'react';
import StatsPage from './sections/StatsPage';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import DarkThemeComponent from './components/DarkThemeComponent';

export const ThemeContext = React.createContext(true);

export default function App() {

  const [darkTheme, setDarkTheme] = useState(false)

  function toggleTheme(){
    setDarkTheme((previous)=> !previous)
  }
  function logOut(){
    sessionStorage.setItem("isLoggedIn", "false")
    localStorage.clear();
    window.location.reload();
  }

    return (
      <>
        <ThemeContext.Provider value={darkTheme}>
          <div className='flex justify-center'>
         <button className='dark-mode' onClick={toggleTheme}>DarkMode</button>
         <button className='dark-mode' onClick={logOut}>Log out</button>
         </div>
        <DarkThemeComponent />
        </ThemeContext.Provider>
      </>
    );
}

