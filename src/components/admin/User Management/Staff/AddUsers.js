import React, { useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import {Card, Container} from "react-bootstrap";
import {Divider, Paper} from "@material-ui/core";


export default function AddUsers() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Password, setPassword] = useState("");
  const [Role, setRole] = useState("");
  const [Identity, setIdentity] = useState("");

  const history = useHistory();

  function onChangeFile(e) {
    setIdentity(e.target.files[0]);
  }

  function sendData(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("FirstName", FirstName);
    formData.append("LastName", LastName);
    formData.append("Email", Email);
    formData.append("Contact", Contact);
    formData.append("Password", Password);
    formData.append("Role", Role);
    formData.append("Identity", Identity);

    console.log(formData);

    axios
      .post("http://localhost:8070/api/usermanagement", formData)
      .then((response) => {
        swal({
          title: "Success",
          text: "Succesfully add a new member to the system",
          icon: "success",
          SuccessMode: true,
        }).then((willDelete) => {
          history.push("/");
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
      <Container >
        <Paper elevation={"9"}>
      <Card >
        <h1 className={"text-center sub-titles mt-2"}>ADD USER</h1>
        <Divider/>
        <Card.Body>
    <div  align='center' style={{ marginTop: "10px" }}>
      <div style={{ backgroundColor: "white", width: "1050px", height:'690px' }}>
        <form class='form1' onSubmit={sendData}>
            <br/><br/><br/>


          <div class='input-group mb-3' style={{ width: "800px" }}>
            <div
              className='titlenames'
              style={{ width: "300px", marginRight: "150;" }}
            >
              <span>
                {" "}
                <p style={{float:'left',marginLeft:'40px'}}>
                  First Name <span style={{ color: "red" }}>&#42;</span>
                </p>
              </span>
            </div>

            <input
              required
              name='FirstName'
              id='FirstName'
              type='text'
              placeholder='First Name'
              class='form-control'
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>

          
          <div class='input-group mb-3' style={{ width: "800px" }}>
            <div
              className='titlenames'
              style={{ width: "300px", marginRight: "150;" }}
            >
              <span>
                {" "}
                <p style={{float:'left',marginLeft:'40px'}}>
                  Last Name <span style={{ color: "red" }}>&#42;</span>
                </p>
              </span>
            </div>

            <input
              required
              name='LastName'
              id='LastName'
              type='text'
              placeholder='Last Name'
              class='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-default'
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>


          


          <div class='input-group mb-3' style={{ width: "800px" }}>
            <div
              className='titlenames'
              style={{ width: "300px", marginRight: "150;" }}
            >
              <span>
                {" "}
                <p style={{float:'left',marginLeft:'40px'}}>
                  Email <span style={{ color: "red" }}>&#42;</span>
                </p>
              </span>
            </div>

            <input
              required
              name='Email'
              id='Email'
              type='Email'

              placeholder='Email'
              class='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-default'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>



          <div class='input-group mb-3' style={{ width: "800px" }}>
            <div
              className='titlenames'
              style={{ width: "300px", marginRight: "150;" }}
            >
              <span>
                {" "}
                <p style={{float:'left',marginLeft:'40px'}}>
                  Password <span style={{ color: "red" }}>&#42;</span>
                </p>
              </span>
            </div>

            <input
              required
              name='Password'
              id='Password'
              type='Password'

              placeholder='Password'
              class='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-default'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>


          <div class='input-group mb-3' style={{ width: "800px" }}>
            <div
              className='titlenames'
              style={{ width: "300px", marginRight: "150;" }}
            >
              <span>
                {" "}
                <p style={{float:'left',marginLeft:'40px'}}>
                  Contact<span style={{ color: "red" }}>&#42;</span>
                </p>
              </span>
            </div>

            <input
              required
              name='Contact'
              id='Contact'
              type='Number'
              placeholder='Contact'
              class='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-default'

              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
          </div>


          

          <div class='input-group mb-3' style={{ width: "800px" }}>
            <div
              className='titlenames'
              style={{ width: "300px", marginRight: "150;" }}
            >
              <span>
                {" "}
                <p style={{float:'left',marginLeft:'40px'}}>
                  Role <span style={{ color: "red" }}>&#42;</span>
                </p>
              </span>
            </div>

          <select
            name='Role'
            type='text'
            id='Role'
            required
              class='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-default'
            placeholder='Role'
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            <option value='Default'>-</option>
            <option value='Admin'>Admin</option>
            <option value='Reviewer'>Reviewer</option>
          </select>
          </div>


          <div class='input-group mb-3' style={{ width: "800px" }}>
            <div
              className='titlenames'
              style={{ width: "300px", marginRight: "150;" }}
            >
              <span>
                {" "}
                <p style={{float:'left',marginLeft:'40px'}}>
                  Identity <span style={{ color: "red" }}>&#42;</span>
                </p>
              </span>
            </div>

            <input
              required
              id='Identity'
              name='Identity'
              type='file'
              accept=''
              class='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-default'
              onChange={onChangeFile}
            />
          </div>
          <br/><br/><br/>
          <div style={{ width: "100 %" }}>
            <Link to='/' class='btn btn-danger' style={{ width: "150px" }}>
              Cancel
            </Link>
            <button class='btn btn-success' style={{ width: "400px" }}>
              Create user
            </button>
          </div>
        </form>
      </div>
    </div>
        </Card.Body>
      </Card>
        </Paper>
    </Container>
  );
}
