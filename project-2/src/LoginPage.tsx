import axios, { AxiosInstance } from "axios";
import React, { Dispatch, SetStateAction } from "react";
import "./styles.css";


type LoginPageProps= {
    id: Dispatch<SetStateAction<number>>
    token: Dispatch<SetStateAction<string>>
}


export default function LoginPage({
    id,
    token,
  }: LoginPageProps){

  return (
    <div className="App">
      <div className="login-container">
          <form className="form">
            <p> Please enter prosject ID and access key!</p>
            <input
              type="number"
              placeholder="prosject id"
              onChange={event => id(event.target.valueAsNumber)}
            />
            <input
              type="password"
              placeholder="access key"
              onChange={event => token(event.target.value)}
            />
          </form>
      </div>
    </div>
  );
}





