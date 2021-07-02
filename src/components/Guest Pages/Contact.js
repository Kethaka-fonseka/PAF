import React, {useState} from 'react';
import axios from "axios";
import '../../stylesheets/Contact.css';


function Contact() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setmessage] = useState("");

    const [nameError, setNameError] = useState({});
    const [numberError, setNumberError] = useState({});
    const [emailError, setEmailError] = useState({});
    const [messageError, setMessageError] = useState({});


    const sendData = (e) =>{

        e.preventDefault();
        const data = {name, number, email, message};

        const isValid = formValidation();

        const newContact = {
            name,
            number,
            email,
            message
        }
        if(isValid){
            axios.post("http://localhost:8070/api/contactus/add",newContact).then(()=>{
                alert("Message uploaded");
            }).catch((err)=>{
                alert(err);
            })
        }
    }

    const formValidation = () => {
        const nameError = {};
        const numberError = {};
        const emailError = {};
        const messageError = {};
        let isValid = true;

        if(!name){
            nameError.fillname = "Name is required!";
            isValid = false;
        }

        if(!number){
            numberError.fillnumber = "Phone number is required!";
            isValid = false;
        }

        if(!email){
            emailError.fillemail = "Email is required!";
            isValid = false;
        }
        else if(!email.includes("@")){
            emailError.fillemail = "'@' is required";
            isValid = false;
        }
        else if(!email.includes(".com")){
            emailError.fillemail = "'.com' is required";
            isValid = false;
        }

        if(!message){
            messageError.fillmessage = "message is required!";
            isValid = false;
        }

        setNameError(nameError);
        setNumberError(numberError);
        setEmailError(emailError);
        setMessageError(messageError);
        return isValid;
    }



    return (
        <div className="form-container">
            <h1>Contact Us</h1>
            <form onSubmit={sendData}>
                <div class="mb-3">

                    <label for="name" >Full Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Full Name"

                           onChange={(e)=>{setName(e.target.value);}}
                    />

                </div>
                {Object.keys(nameError).map((key)=>{
                    return <div style={{color: "red"}}>{nameError[key]}</div>
                })}
                <div className="mb-3">

                    <label for="number" >Phone Number</label>
                    <input type="number" class="form-control" id="number" placeholder="Enter Phone Number"

                           onChange={(e)=>{setNumber(e.target.value);}}
                    />

                </div>
                {Object.keys(numberError).map((key)=>{
                    return <div style={{color: "red"}}>{numberError[key]}</div>
                })}
                <div className="mb-3">

                    <label for="email" >Email</label>
                    <input type="text" class="form-control" id="email" placeholder="Enter Email Address"

                           onChange={(e)=>{setEmail(e.target.value);}}
                    />

                </div>
                {Object.keys(emailError).map((key)=>{
                    return <div style={{color: "red"}}>{emailError[key]}</div>
                })}
                <div className="mb-3">

                    <label for="message" >Message</label>
                    <input type="text" class="form-control" id="message" placeholder="Enter Your Message"

                           onChange={(e)=>{setmessage(e.target.value);}}
                    />

                </div>
                {Object.keys(messageError).map((key)=>{
                    return <div style={{color: "red"}}>{messageError[key]}</div>
                })}
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contact;