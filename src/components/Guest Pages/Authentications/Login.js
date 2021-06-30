import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../../../stylesheets/Login.css";


export default function Login() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function Logins() {
    const data = {
      Email,
      password,
    };

    axios
      .post("http://localhost:8070/api/auth/login", data)
      .then((response) => {
        if (response.data.users.userType == "Admin") {
          history.push("/admin/conferencemanagement");

        } else if (response.data.users.userType == "User") {
          history.push("/");
        } else {
          history.push("/login");
        }
        

        
        
       })
      .catch((err) => {
        // swal("Try again", "Incorrect email or password");

        console.log(err);
      });
  }

  return (
    <div class='body'>
      <div class='main'>
        <p class='sign' align='center'>
          Sign in
        </p>

        <input
          required
          class='un '
          type='text'
          name='Email'
          id='Email'
          align='center'
          placeholder='Username'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          required
          class='pass'
          type='password'
          align='center'
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button Login class='submit' onClick={Logins} align='center'>
          Sign in
        </button>
        <p class='forgot' align='center'>
          <a class='forget' href='/Register'>
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
