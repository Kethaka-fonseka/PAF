import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import {Link, useHistory} from 'react-router-dom';

function ViewContact() {
    const [messages, setMessages] = useState([]);


    const deleteMessage = (id) => {
        axios.delete(`http://localhost:8070/api/contactus/delete/${id}`).then((res)=>{
            alert("Delete Successfully");
 //           getAllMessages();

        }).catch((err)=>{
            alert(err.message);
        })
    }


    useEffect(()=>{

        const getAllMessages=()=>{
            axios.get("http://localhost:8070/api/contactus/").then((res)=>{
                setMessages(res.data);

            }).catch((err)=>{
                alert(err.message);
            })
        }
        getAllMessages();

    },[])


    return (
        <div className="form-container01">
            <h1>User Messages</h1>
            <table class="table table-dark">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Message</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody class="table-light">
                {
                    messages.map((message, key) => (
                        <tr key={key}>

                            <td>
                                {message.name}
                            </td>
                            <td>
                                {message.number}
                            </td>
                            <td>
                                {message.email}
                            </td>
                            <td>
                                {message.message}
                            </td>
                            <td>

                                <button className="delete-message" onClick={()=> {deleteMessage(message._id)}}>Delete</button>
                            </td>


                        </tr>
                    ))

                }

                </tbody>
            </table>
        </div>
    );
}

export default ViewContact;