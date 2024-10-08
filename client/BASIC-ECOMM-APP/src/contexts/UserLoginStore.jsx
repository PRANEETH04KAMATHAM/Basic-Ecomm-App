/*import { userLoginContext } from "./userLoginContext";
import { useState } from "react";

function UserLoginStore({ children }) {
  //login user state
  let [currentUser, setCurrentUser] = useState(null);
  let [userLoginStatus, setUserLoginStatus] = useState(false);
  let [err, setErr] = useState("");

  //user login
  async function loginUser(userCred) {
    try {
      let res = await fetch(
        `http://localhost:3000/users?username=${userCred.username}&password=${userCred.password}`
      );
      let usersList = await res.json();
      console.log("users list", usersList);
      if (usersList.length === 0) {
        //invalid credentials
        console.log("invalid user");
        setCurrentUser(null);
        setUserLoginStatus(false);
        setErr('Invalid Username or Password')
       
      } else {
        setCurrentUser(usersList[0]);
        setUserLoginStatus(true);
        //setErr('Invalid username or passwaord')
      }
    } catch (error) {
       setErr(error.message);
    }
  }

  //user logout
  function logoutUser() {
    //reset state
    setCurrentUser({});
    setUserLoginStatus(false);
    setErr('')
  }

  return (
    <userLoginContext.Provider
      value={{ loginUser, logoutUser, userLoginStatus,err,currentUser,setCurrentUser }}
    >
      {children}
    </userLoginContext.Provider>
  );
}

export default UserLoginStore;

*/





//////   SESSION-18
/*
import { userLoginContext } from "./userLoginContext";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function UserLoginStore({ children }) {
  //login user state
  let [currentUser, setCurrentUser] = useState(null);
  let [userLoginStatus, setUserLoginStatus] = useState(false);
  let [err, setErr] = useState("");

  //user login
  async function loginUser(userCred) {
    try {

      let res = await fetch('http://localhost:4000/user-api/login',
        {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(userCred)
        });

      let result = await res.json();

      //console.log("users list", usersList);
      if (result.message === 'login success') {
        //invalid credentials
        //console.log("invalid user");
        setCurrentUser(result.user);
        setUserLoginStatus(true);
        setErr('')
      } 
      else 
      {
        setErr(result.message)
        setCurrentUser({});
        setUserLoginStatus(false);
        //setErr('Invalid username or passwaord')
      }
    } 
    catch (error)
     {
       setErr(error.message);
    }
  }

  //user logout
  function logoutUser() {
    //reset state
    setCurrentUser({});
    setUserLoginStatus(false);
    setErr('')

  }

  return (
    <userLoginContext.Provider
      value={{ loginUser, logoutUser, userLoginStatus,err,currentUser,setCurrentUser }}
    >
      {children}
    </userLoginContext.Provider>
  );
}

export default UserLoginStore;
*/






///////////// SESSION-19

import { userLoginContext } from "./userLoginContext";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function UserLoginStore({ children }) {
  //login user state
  let [currentUser, setCurrentUser] = useState(null);
  let [userLoginStatus, setUserLoginStatus] = useState(false);
  let [err, setErr] = useState("");
  // let navigate=useNavigate()

  //user login
  async function loginUser(userCred) {
    try {

      let res = await fetch('http://localhost:4000/user-api/login',
        {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(userCred)
        });

      let result = await res.json();

      //console.log("users list", usersList);
      if (result.message === 'login success') {
        //invalid credentials
        //console.log("invalid user");
        setCurrentUser(result.user);
        setUserLoginStatus(true);
        setErr('')

        //save token in session storage
        sessionStorage.setItem('token',result.token);
      } 
      else 
      {
        setErr(result.message)
        setCurrentUser({});
        setUserLoginStatus(false);
        //setErr('Invalid username or passwaord')
      }
    } 
    catch (error)
     {
       setErr(error.message);
    }
  }

  //user logout
  function logoutUser() {
    //reset state
    setCurrentUser({});
    setUserLoginStatus(false);
    setErr('')
    
    //remove token from session storage
    sessionStorage.removeItem('token');
  }

  return (
    <userLoginContext.Provider
      value={{ loginUser, logoutUser, userLoginStatus,err,currentUser,setCurrentUser }}
    >
      {children}
    </userLoginContext.Provider>
  );
}

export default UserLoginStore;





// import { userLoginContext } from "./userLoginContext";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// function UserLoginStore({ children }) {
//   //login user state
//   let [currentUser, setCurrentUser] = useState(null);
//   let [userLoginStatus, setUserLoginStatus] = useState(false);
//   let [err, setErr] = useState("");
//  // let navigate=useNavigate();
//   //user login
//   async function loginUser(userCred) {
//     try {
//       let res = await fetch("http://localhost:4000/user-api/login", {
//         method: "POST",
//         headers: { "Content-type": "application/json" },
//         body: JSON.stringify(userCred),
//       });
//       let result=await res.json();
//       // let usersList = await res.json();
//       // console.log("users list", usersList);
//       if (res.message!== 'login success') {
//         //update current user
//         setCurrentUser(result.user)
//         setUserLoginStatus(true)
//         setErr('')
//        //save token in session storage
//        sessionStorage.setItem('token',result.token)
//       } else {
//           setErr(res.message)
//           setCurrentUser({})
//           setUserLoginStatus(false)
//       }
//     } catch (error) {
//       setErr(error.message);
//     }
//   }

//   //user logout
//   function logoutUser() {
//     //reset state
//     setCurrentUser({});
//     setUserLoginStatus(false);
//     setErr('')
//     //remove token from session storage
//     sessionStorage.removeItem('token');
//   }

//   return (
//     <userLoginContext.Provider
//       value={{ loginUser, logoutUser, userLoginStatus,err,currentUser,setCurrentUser }}
//     >
//       {children}
//     </userLoginContext.Provider>
//   );
// }

// export default UserLoginStore;