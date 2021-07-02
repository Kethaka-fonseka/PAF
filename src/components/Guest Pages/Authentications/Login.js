import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../../../stylesheets/Login.css";
import swal from "sweetalert";
import { Card, Container } from "react-bootstrap";
import { Divider, Paper } from "@material-ui/core";

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
      .post("http://localhost:8070/auth/login", data)
      .then((response) => {

        if (response.data.users.userType === "Admin") {
          localStorage.setItem("user", "Admin");

          window.location.href="/"

        } else if (response.data.users.userType === "User") {
          localStorage.setItem("user", "user");
          localStorage.setItem("userid", response.data.users.UserName);
          window.location.href="/"
        }
        else if (response.data.users.userType === "Reviewer") {
            localStorage.setItem("user", "Reviewer");
            window.location.href="/"
        }
        else if (response.data.users.userType === "Editor") {
            localStorage.setItem("user", "Editor");
            window.location.href="/"
        }else {
          window.location.href="/login"
        }

       })
      .catch((err) => {
        swal("Try again", "Incorrect email or password");

        console.log(err);
      });
  }

  return (
    <Container align="center" style={{marginTop:'60px'}}>

      <Card style={{ width: '600px' }}>
      <h1 className={"text-center sub-titles mt-2"}>Signin</h1>
        <Divider />
        <Paper elevation={"9"}>
        <Card.Body>
     
    <div class='body'>
      <div class='main' style={{marginTop:'60px'}}>

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
      </div>
            </div>
           
          </Card.Body>
          </Paper>
        </Card>
     
    </Container>
  );
}
