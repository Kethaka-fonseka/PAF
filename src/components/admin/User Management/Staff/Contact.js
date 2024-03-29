import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../../stylesheets/UserManagement.css";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import Management from "./Management";
import { Card, Container } from "react-bootstrap";
import { Paper } from "@material-ui/core";

export default class ViewMoreData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
    };
    this.sendEmail = this.sendEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:8070/api/viewmore/${id}`)
      .then((response) => {
        console.log(response.data.UserManagement.FirstName);
        this.setState({
          Email: response.data.UserManagement.Email,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmail",
        "template_9x6vq5v",
        e.target,
        "user_h6YVAt2zsrr63XZUNdgs7"
      )
      .then(
        (result) => {
  
          swal({
            title: "Success",
            text: "Succesfully sent the email",
            icon: "success",
            SuccessMode: true,
          }).then((success) => {
            window.location.href="/admin/staff-management"
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  render() {
    return (

      <Container>
      <Paper elevation={"9"}>
        <Card className='text-center'>
          <Card.Header>
            {" "}
            <h1 className={"text-center sub-titles mt-2"}>Contact</h1>
          </Card.Header>
                  <Card.Body>
      <div>
        <div class='body' align='center' style={{ marginTop: "10px" }}>
          <div
            class='card'
            style={{
              backgroundColor: "white",
              width: "1050px",
              height: "690px",
            }}
          >
            <form
              align='center'
              style={{ marginLeft: "50px" }}
              onSubmit={this.sendEmail.bind(this)}
              className='sendEmails'
            >
              <center>
                <br />
                <br />
                <input
                  name='sendTo'
                  id='sendTo'
                  value={this.state.Email}
                  onChange={this.handleChange.bind(this)}
                  class='un '
                  type='text'
                  align='center'
                />

                <input
                  name='Header'
                  id='Header'
                  required
                  class='un '
                  type='text'
                  align='center'
                  placeholder='Message Header'
                  onChange={this.handleChange.bind(this)}
                />

                <textarea
                  align='center'
                  class='un '
                  type='text'
                  align='center'
                  style={{ marginLeft: "40px" }}
                  name='message'
                  rows='10'
                  cols='120'
                  placeholder='Message'
                  onChange={this.handleChange.bind(this)}
                ></textarea>

                <button
                  align='center'
                  class='un '
                  type='submit'
                  style={{ backgroundColor: "#1a53ff", color: "white" }}
                >
                  Send
                </button>
              </center>
            </form>
          </div>
        </div>
              </div>
              </Card.Body>
          </Card>
        </Paper>
      </Container>
    );
    
  }
}
