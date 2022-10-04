import React, { useState } from 'react';
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
          <div className={darkTheme ? 'headerBackgroundLight' :'headerBackgroundDark'}>
         <button className='dark-mode' onClick={toggleTheme}>DarkMode</button>
         <button className='dark-mode' onClick={logOut}>Log out</button>
         </div>
        <DarkThemeComponent/>
        </ThemeContext.Provider>
      </>
    );
}

