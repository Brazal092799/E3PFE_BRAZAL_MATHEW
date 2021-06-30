import React, { useState } from "react";
import LoginForm from "./components/LoginForm";//the javascript of loginform is imported,this sort out the validation if the email and password is correct
//it will continue to the mainform ifnot, it will show the tryagain message or simply error message
import logo from './ast.gif';

function App() {
  const adminUser = {//the constant adminUser is use to compare the email and password base on the given sets
    email:"mathewbrazal1@gmail.com",
    password: "brazal123"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password){//if else statment on the adminUser
      //if the email and password is coreect it will proceed
      console.log("Logged In");
      setUser({
        email: details.email
      });
    } else {//this will pop up if the user input invalid account
      console.log("try again!");
      setError("try again!");
    }
  }

  const Logout = () => {
    setUser({email: ""});
  }

  return (//this will be the information of the user, it will pop up if the user succesfully enter his account
    <div className="App">
      {(user.email !== "") ? (
        <div className="logged-in">
          <img src={logo} className="logo" alt="Logo" />;
          
          <h2>Name: <span>Mathew Clint M. Brazal</span></h2>
          <h2>Course & Section: <span>BSIT32-E2</span></h2>
          <h2>Hobbies: <span>Play COD, Mobile Legends, Reading Manga,</span>
          <span> Love to adventure Watching movies,</span>
          <span> Jogging, Biking.</span></h2>
          <button onClick={Logout}>Logout</button>
          </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
