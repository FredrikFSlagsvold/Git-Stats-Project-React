import axios from "axios";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";


//finn en måte å refetche siden på, så funker alt som det skal

type LoginPageProps= {
    isLoggedIn?: Dispatch<SetStateAction<boolean>>
}


export default function LoginPage({
    isLoggedIn,
  }: LoginPageProps){
    // const [id, setId] = useState("");
    // const [token, setToken] = useState("");

    const checkApi=async ()=>{
      
      try{
        const testAxiosInstance = axios.create(
          {
          baseURL: "https://gitlab.stud.idi.ntnu.no/api/v4/projects/" + localStorage.getItem("id"),
          timeout: 3000,
          headers:{
              Authorization: "Bearer " + localStorage.getItem("token")
          }
          });
          const responseCode = await testAxiosInstance.get("")
          responseCode.status === 200 && 
          console.log("rsponskode", responseCode.status)
          sessionStorage.setItem("isLoggedIn", "true")  
          window.location.reload();
      }catch{
        sessionStorage.setItem("isLoggedIn", "false")
        console.log("feilet")
      }
      // useEffect()=>({

      // })
    }


  return (
    <div className="App">
      <div className="login-container">
          <form className="form">
            <p>Please enter project ID and access key!</p>
            <input
              type="number"
              placeholder="Project ID"
      
      onChange={event => localStorage.setItem("id", event.target.value)}
            />
            <input
              type="password"
              placeholder="Access key"
              onChange={event => localStorage.setItem("token", event.target.value)}
            />
            <button type="button" onClick={checkApi}>Log in</button>
          </form>
      </div>
    </div>
  );
}





