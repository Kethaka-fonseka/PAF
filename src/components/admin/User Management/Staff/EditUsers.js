import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
class EditUsers extends Component {
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

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

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

  sendData = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { FirstName, LastName, Email, Role, Contact } = this.state;

    const data = {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Role: Role,
      Contact: Contact,
    };

    axios
      .put(`http://localhost:8070/api/usermanagement/updates/${id}`, data)
      .then((response) => {
        swal({
          title: "Success",
          text: "Succesfully update the details",
          icon: "success",
          SuccessMode: true,
        }).then((success) => {
          window.location.href="/admin/staff-management"
        });
    
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  render() {
    return (
        <div class='body' align='center' style={{ marginTop: "10px" }}>
        <div style={{ backgroundColor: "white", width: "1050px", height:'690px' }}>
                <form class='form1' onSubmit={this.sendData}>
                    
                    <div style={{marginBottom:'80px'}}>
            <img 
              alt='Avatar'
              align='center'
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
              src={`http://localhost:3000/user/${this.state.Identity}`}
            />
</div>
            <div class='input-group mb-3' style={{ width: "800px" }}>
              <div
                className='titlenames'
                style={{ width: "300px", marginRight: "150;" }}
              >
                <span>
                  {" "}
                  <p style={{ float: "left", marginLeft: "40px" }}>
                    First Name <span style={{ color: "red" }}>&#42;</span>
                  </p>
                </span>
              </div>

              <input
                required
                value={this.state.FirstName}
                name='FirstName'
                id='FirstName'
                type='text'
                placeholder='First Name'
                class='form-control'
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-default'
                onChange={this.handleInputChange}
              />
            </div>

            <div class='input-group mb-3' style={{ width: "800px" }}>
              <div
                className='titlenames'
                style={{ width: "300px", marginRight: "150;" }}
              >
                <span>
                  {" "}
                  <p style={{ float: "left", marginLeft: "40px" }}>
                    Last Name <span style={{ color: "red" }}>&#42;</span>
                  </p>
                </span>
              </div>

              <input
                required
                value={this.state.LastName}
                name='LastName'
                id='LastName'
                type='text'
                placeholder='Last Name'
                class='form-control'
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-default'
                onChange={this.handleInputChange}
              />
            </div>

            <div class='input-group mb-3' style={{ width: "800px" }}>
              <div
                className='titlenames'
                style={{ width: "300px", marginRight: "150;" }}
              >
                <span>
                  {" "}
                  <p style={{ float: "left", marginLeft: "40px" }}>
                    Email <span style={{ color: "red" }}>&#42;</span>
                  </p>
                </span>
              </div>

              <input
                required
                value={this.state.Email}
                name='Email'
                id='Email'
                type='Email'
                placeholder='Email'
                class='form-control'
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-default'
                onChange={this.handleInputChange}
              />
            </div>

            <div class='input-group mb-3' style={{ width: "800px" }}>
              <div
                className='titlenames'
                style={{ width: "300px", marginRight: "150;" }}
              >
                <span>
                  {" "}
                  <p style={{ float: "left", marginLeft: "40px" }}>
                    Contact <span style={{ color: "red" }}>&#42;</span>
                  </p>
                </span>
              </div>

              <input
                required
                value={this.state.Contact}
                name='Contact'
                id='Contact'
                type='text'
                placeholder='Contact'
                class='form-control'
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-default'
                onChange={this.handleInputChange}
              />
            </div>

            <div class='input-group mb-3' style={{ width: "800px" }}>
              <div
                className='titlenames'
                style={{ width: "300px", marginRight: "150;" }}
              >
                <span>
                  {" "}
                  <p style={{ float: "left", marginLeft: "40px" }}>
                    Last Name <span style={{ color: "red" }}>&#42;</span>
                  </p>
                </span>
              </div>

              <select
                required
                value={this.state.Role}
                name='Role'
                id='Role'
                type='text'
                placeholder='Role'
                class='form-control'
                aria-label='Sizing example input'
                aria-describedby='inputGroup-sizing-default'
                onChange={this.handleInputChange}>
                <option value='Default'>-</option>
                <option value='Admin'>Admin</option>
                <option value='Reviewer'>Reviewer</option>
                <option value='Editor'>Editor</option>
              </select>
            </div>
            <br/><br/><br/>
            <div style={{ width: "100 %" }}>
              <Link to='/' class='btn btn-danger' style={{ width: "150px" }}>
                {" "}
                <i class='fa fa-close'></i>
              </Link>
              <button class='btn btn-success' style={{ width: "400px" }}>
                Create user
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default EditUsers;
