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
      .get("http://localhost:8070/api/usermanage")
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
              <div class='card' style={{ backgroundColor: "white", width: "1250px", height:'auto' }}>
 
            <table class='table'>
              <thead class='thead-dark'>
                <tr class='table-success'>
                  <th scope='col'>ID</th>
                  <th></th>
                  <th scope='col'>Email</th>
                  <th scope='col'>User Name</th>
                  <th scope='col'>Remove</th>
                  <th scope='col'>Contact</th>
                </tr>
              </thead>
              <tbody>
                {this.state.management.map((item, index) => (
                  <tr>
                    <td>
                    {index}
                    </td>
                    <td></td>
                    <td style={{ paddingTop: "30px" }}>
                    {item.Email}
                    </td>
                    <td style={{ paddingTop: "30px" }}>
                    {item.UserName}
                    </td>
                    <td >
                    <Link
                    
                        class='btn btn-danger'
                        to={`/admin/usermanagement/deletemembers/${item._id}`}
                      >
                        <i class='fa fa-trash'></i> delete
                      </Link>
                    </td>
                    <td>
                    <Link
              
                        class='btn btn'
                        to={`/admin/usermanagement/editmembers/${item._id}`}
                      >
                      <i class="fa fa-envelope" style={{fontSize:'28px',color:'red'}}></i>
                      </Link>
                    </td>
  
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}
