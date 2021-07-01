import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';
import {useHistory} from "react-router-dom";




class DeleteUsers extends Component {
    constructor(props){
        super(props);
        this.state = {
            Emails: "",
            Email: "",
            ID:""
        }
    }

handleInputChange = (e) =>{
  const {name,value} = e.target;

  this.setState({
    ...this.state, [name]:value
  })
}

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8070/api/deletemanageusers/${id}`)
            .then(response => {
                this.setState({
                    ID: response.data.UserManagement._id,
                    Emails: response.data.UserManagement.Email
                
                });
            })
            .catch(function (err) {
                console.log(err);
            })
    }



    sendData = (e) => {
        e.preventDefault();

  

        if (this.state.Email == this.state.Emails) {
            const id = this.state.ID;
    
            axios.delete(`http://localhost:8070/api/deletemanageusers/delete/${id}`)
                .then(response => {
                    
                    swal({
                        title: "Delete",
                        text: "Succesfully delete the recorde",
                        icon: "success",
                        SuccessMode: true,
                      }).then((success) => {
                        window.location.href="/admin/staff-management"
                      });
                      
                })
                .catch(function (err) {
                    console.log(err);
                })
      
        } else {
            swal("Incorrect User");
        }
    }
    
    render() {
        return (
            <div  align='center' class="body"  style={{marginTop:'100px'}}>
                <div style={{backgroundColor:'white', width:'800px', height:'400px'}}><br/><br/>
                    <p align="center">  Please confirm the user <b>{this.state.Emails} </b>  and re-enter the email</p>
                    <form class="form1" onSubmit={this.sendData}>
                    <input
                            name='Email'
                            id='Email'
                            required
                            class='un '
                            type='text'
                            align='center'
                            placeholder='Re-enter the email'
                            onChange ={this.handleInputChange}
                        />
                     <br/><br/><br/>
                        <button class="submit" style={{ marginLeft: 'auto', marginRight:'auto'}}>Delete</button>
                    </form>
                    
                </div>
            </div>
        );
    }
}
  export default DeleteUsers;
