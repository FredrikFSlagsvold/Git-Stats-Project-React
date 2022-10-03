import React, { Component } from "react";
import { ThemeContext } from "./App";

export default class DarkThemeComponent extends Component {
    themeStyles(darkTheme: boolean){
        return {
            backgroundColor: darkTheme ? "#333" : "#CCC",
            color: darkTheme ? "#CCC" : "#333",
            padding: "2rem",
        }
    }

    render(){
        return(
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}>Class Theme
                    </div>
                }}
            </ThemeContext.Consumer>
        )
    }

}