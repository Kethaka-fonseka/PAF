import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../../../stylesheets/Login.css";

export default function Register() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const history = useHistory();

  function Registers() {
    const data = {
      Email,
      password,
      passwordVerify,
    };

    axios
      .post("http://localhost:8070/api/auth", data)
      .then((response) => {
        history.push("/");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div class='body'>
      <div class='main'>
        <p class='sign' align='center'>
          Register
        </p>
        <input
          required
          class='un '
          name='Email'
          id='Email'
          type='text'
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

        <input
          required
          class='pass'
          type='password'
          align='center'
          placeholder='Password'
          onChange={(e) => {
            setPasswordVerify(e.target.value);
          }}
        />
        <button class='submit' onClick={Registers} align='center'>
          Register
        </button>
      </div>
    </div>
  );
}
