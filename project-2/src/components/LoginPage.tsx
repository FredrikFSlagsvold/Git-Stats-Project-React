import axios from "axios";
import React from "react";

 
export default function LoginPage(){
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
        throw "Innlogging feilet, om dette vedvarer ring kundeservice, 95834337";
      }
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
            <button className="authorButtons" type="button" onClick={checkApi}>Log in</button>
          </form>
      </div>
    </div>
  );
}





