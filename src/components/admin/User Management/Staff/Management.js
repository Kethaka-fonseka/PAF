import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../../stylesheets/UserManagement.css";

export default class Management extends Component {
  constructor(props) {
    super(props);
    this.state = { management: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8070/api/usermanagement/display")
      .then((response) => {
        console.log(response.data);
        this.setState({ management: response.data });
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  render() {
    return (
      <main >
            <div class='body' align='center' style={{ marginTop: "80px" }} >
          <div class='card' style={{ backgroundColor: "white", width: "1250px", height: 'auto' }}>
          <form class='form1'>
            <Link
              to='/admin/staffmanagement/addmembers'
              id='add__new__list'
              type='button'
              class='btn btn-success position-absolute'
              data-toggle='modal'
              data-target='.bd-example-modal-lg'
            >
              <i class='fa fa-folder'></i> Add a new role
            </Link>
            <table class='table'>
              <thead class='thead-dark'>
                <tr class='table-success'>
                  <th scope='col'>User</th>
                  <th scope='col'>User Name</th>
                  <th scope='col'>Role</th>
                  <th scope='col'>Edit List </th>
                  <th scope='col'>Contact</th>
                </tr>
              </thead>
              <tbody>
                {this.state.management.map((item, index) => (
                  <tr>
                    <td>
                      <img
                        alt='Avatar'
                        style={{
                          borderRadius: "50%",
                          width: "100px",
                          height: "100px",
                        }}
                        src={`http://localhost:3000/${item.Identity}`}
                      />
                    </td>
                    <td style={{ paddingTop: "40px" }}>
                      {item.FirstName + "  " + item.LastName}
                    </td>
                    <td style={{ paddingTop: "40px" }}>{item.Role}</td>
                    <td>
                      <Link
                        style={{ marginTop: "30px", marginRight: "10px" }}
                        class='btn btn-success'
                        to={`/admin/staffmanagement/editmembers/${item._id}`}
                      >
                        <i class='fa fa-edit'></i>edit
                      </Link>
                      <Link
                        style={{ marginTop: "30px" }}
                        class='btn btn-danger'
                        to={`/admin/staffmanagement/deletemembers/${item._id}`}
                      >
                        <i class='fa fa-trash'></i> delete
                      </Link>
                    </td>
                    <td>
                      <Link
                        style={{ marginTop: "30px" }}
                        class='btn btn'
                        to={`/admin/staffmanagement/contactstaff/${item._id}`}
                      >
                      <i class="fa fa-envelope" style={{fontSize:'28px',color:'red'}}></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
              </form>
          </div>
        </div>
      </main>
    );
  }
}
