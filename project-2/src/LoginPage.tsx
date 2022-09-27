import axios from "axios";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./styles.css";
import axiosInstance from "./utils/axios";


type LoginPageProps= {
    isLoggedIn: Dispatch<SetStateAction<boolean>>
}


export default function LoginPage({
    isLoggedIn,
  }: LoginPageProps){
    const [id, setId] = useState("");
    const [token, setToken] = useState("");

    const checkApi=async ()=>{
      localStorage.setItem("id", id)
      localStorage.setItem("token", token)

      try{
        const testAxiosInstance = axios.create(
          {
          baseURL: "https://gitlab.stud.idi.ntnu.no/api/v4/projects/" + id,
          timeout: 3000,
          headers:{
              Authorization: "Bearer " +token
          }
          });
        
        isLoggedIn(true)
        console.log(await testAxiosInstance.get("members"))
      }catch{
        console.log("feilet")
      }
    }

    useEffect(()=>{
      console.log("hei")
      console.log(axiosInstance.getUri())
    }, [id])
  
  return (
    <div className="App">
      <div className="login-container">
          <form className="form">
            <p> Please enter prosject ID and access key!</p>
            <input
              type="number"
              placeholder="prosject id"
              onChange={event => setId(event.target.value)}
            />
            <input
              type="password"
              placeholder="access key"
              onChange={event => setToken(event.target.value)}
            />
            <button type="button" onClick={checkApi}>Legg til</button>
          </form>
      </div>
    </div>
  );
}





