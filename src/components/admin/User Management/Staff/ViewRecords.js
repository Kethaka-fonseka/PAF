import axios from "axios";
import React, { Component } from "react";
import swal from "sweetalert";
import { Card, Container } from "react-bootstrap";
import { Paper } from "@material-ui/core";

import { Link } from "react-router-dom";
class ViewRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Management: [],
      FirstName: "",
      LastName: "",
      Email: "",
      Role: "",
      Contact: "",
      Identity: "",
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:8070/api/usermanagement/display/${id}`)
      .then((response) => {
        console.log(response.data.UserManagement.Identity);
        this.setState({
          FirstName: response.data.UserManagement.FirstName,
          LastName: response.data.UserManagement.LastName,
          Email: response.data.UserManagement.Email,
          Role: response.data.UserManagement.Role,
          Contact: response.data.UserManagement.Contact,
          Identity: response.data.UserManagement.Identity,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <Paper elevation={"9"}>
          <Card className='text-center'>
            <Card.Header>
              {" "}
              <h1 className={"text-center sub-titles mt-2"}>User Management</h1>
            </Card.Header>
                    <Card.Body>
                        
                    <img
                        alt='Avatar'
                        style={{
                          borderRadius: "50%",
                          width: "100px",
                          height: "100px",
                        }}
                        src={`http://localhost:3000/user/${this.state.Identity}`}
                      />
              <Card.Text>
                <div align='center' style={{ marginTop: "10px" }}>
                  <div>
                    <form class='form1'>
         
                    <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              First Name
                              <span style={{ color: "red" }}>&#42; :</span>
                            </p>
                          </span>
                        </div>
                        <p>{this.state.FirstName}</p>
                      </div>


                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Last Name
                              <span style={{ color: "red" }}>&#42;:</span>
                            </p>
                          </span>
                        </div>
                        <p>{this.state.LastName}</p>
                      </div>

                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Email<span style={{ color: "red" }}>&#42;:</span>
                            </p>
                          </span>
                        </div>
                        <p>{this.state.Email}</p>
                      </div>
            
                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px", marginRight: "100;" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Role<span style={{ color: "red" }}>&#42;:</span>
                            </p>
                          </span>
                        </div>
                        <p>{this.state.Role}</p>
                      </div>

   
                      <div class='input-group mb-3' style={{ width: "600px" }}>
                        <div style={{ width: "300px" }}>
                          <span>
                            <p style={{ float: "left", marginLeft: "80px" }}>
                              Contact
                              <span style={{ color: "red" }}>&#42;:</span>
                            </p>
                          </span>
                        </div>
                        <p>{this.state.Contact}</p>
                      </div>
                    </form>
                  </div>
                </div>
              </Card.Text>
              <Link variant='primary' to="/admin/staff-management" style={{marginTop:'40px'}}>Back to Home</Link>
            </Card.Body>
          </Card>
        </Paper>
      </Container>
    );
  }
}

export default ViewRecords;
