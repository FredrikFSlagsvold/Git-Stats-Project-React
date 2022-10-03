import React, { Component } from "react";
import { ThemeContext } from "../App";
import HomePage from "../HomePage";

export default class DarkThemeComponent extends Component {
    themeStyles(darkTheme: boolean){
        return {
            backgroundColor: darkTheme ? "#333" : "#0000",
            color: darkTheme ? "#CCC" : "#333",
            padding: "2rem",
        }
    }


    render(){
        return(
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}>
                       <HomePage />
                    </div>
                }}
            </ThemeContext.Consumer>
        )
    }
}