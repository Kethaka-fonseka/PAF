import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {Button, Card} from "react-bootstrap";
import PaymentButton from "./PaymentButton";

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {submissions:[]}
    }



    componentDidMount() {

            axios
                .get(`http://localhost:8070/api/submissions/user/${localStorage.getItem('userid')}`)
                .then((res) => {
                    console.log(res.data);
                   this.setState({submissions:res.data})

                })
                .catch((err) => {
                    console.log(err);
                });
        }



    render() {

        if(this.state.submissions == 0){
            return (
                <div>

                    <h1 className={"sub-titles"}> NO SUBMISSIONS </h1>
                </div>
            )

        }else{
            return (

                <div>
                    {
                        this.state.submissions.map((submission,index)=>{
                            return(
                                <div key={index}>
                                    <Card  className={'m-4 p-3'} fluid>
                                        <div>
                                            <h1>{submission.status}</h1>
                                            <h1>{submission.subject}</h1>
                                            <h1>{submission.description}</h1>

                                        </div>
                                        <div >
                                             <PaymentButton submission={submission}/>

                                        </div>

                                    </Card>

                                </div>
                            )

                        })
                    }
                </div>
            )

        }
    }
}

MyComponent.propTypes = {};

export default MyComponent;
