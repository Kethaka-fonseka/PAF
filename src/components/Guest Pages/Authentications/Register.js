import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../../../stylesheets/Login.css";
import { Card, Container } from "react-bootstrap";
import { Divider, Paper } from "@material-ui/core";
import swal from "sweetalert";
export default function Register() {
  const [Email, setEmail] = useState("");
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const history = useHistory();

  function Registers() {
    const data = {
      Email,
      UserName,
      password,
      passwordVerify,
    };

    axios
      .post("http://localhost:8070/auth", data)
      .then((response) => {
        history.push("/login");
      })
      .catch((err) => {
        console.log(err)
        swal("Try again", "Enter required fields");
      });
  }

  return (
    <Container align="center" style={{marginTop:'60px'}}>
  
      <Card style={{width:'600px'}}>
        <h1 className={"text-center sub-titles mt-2"}>Signup</h1>
        <Divider />
        <Paper elevation={"9"}>
        <Card.Body>
    <div class='body'>
      <div class='main'>
        <p class='sign' align='center'>

        </p>
        <input
          required
          class='un '
          name='Email'
          id='Email'
          type='text'
          align='center'
          placeholder='Email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

      <input
          required
          class='un '
          name='UserName'
          id='UserName'
          type='text'
          align='center'
          placeholder='UserName'
          onChange={(e) => {
            setUserName(e.target.value);
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
          placeholder='Verify Password'
          onChange={(e) => {
            setPasswordVerify(e.target.value);
          }}
        />
        <button class='submit' onClick={Registers} align='center'>
          Register
        </button>
      </div>
            </div>
          </Card.Body>
          </Paper>
        </Card>
 
    </Container>
  );
}
