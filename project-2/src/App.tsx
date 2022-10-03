import React, { useState } from 'react';
import StatsPage from './sections/StatsPage';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import DarkThemeComponent from './DarkThemeComponent';

export const ThemeContext = React.createContext(true);

export default function App() {

  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme(){
    setDarkTheme((previous)=> !previous)
  }

  const [authorName, setAuthorName] = useState("All");
  const [isLoggedIn, setIsLoggedIn] = useState(true) //Kan fjernes


    return (
      <>
        <ThemeContext.Provider value={darkTheme}>
          <DarkThemeComponent />
          <button onClick={toggleTheme}>DarkMode</button>
          {sessionStorage.getItem("isLoggedIn") === "true" ? <div>
          <Header setAuthorName={setAuthorName} author_name={authorName}/>
          <StatsPage authorName={authorName}/>
          </div>:
          <LoginPage isLoggedIn={setIsLoggedIn} />}
        </ThemeContext.Provider>
      </>
    );
}

