import React, { Component } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";
import { Divider, Paper } from "@material-ui/core";
import '../../stylesheets/Payment.css'
class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      Total: "",
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
    if(this.props.match.params.role){
      this.setState({Total:localStorage.getItem('researcher_fee')})
    }else{
      this.setState({Total:localStorage.getItem('participant_fee')})
    }
  }


  sendData = (e) => {
        e.preventDefault();
        const { UserName, Total} = this.state;

        const data = {
            UserName: UserName,
            Total: Total,
        };
        console.log(data);

    axios
      .post("http://localhost:8070/api/bill/pay", data)
      .then((response) => {

        axios
            .patch(`http://localhost:8070/api/submissions/paid/${localStorage.getItem("payid")}`)
            .then((response) => {
              localStorage.removeItem("payid");
              alert(" Successful");
              window.location= "/";

            })
            .catch(function (err) {
              console.log(err);
            });
    })
    .catch(function (err) {
      console.log(err);
    });
    }


  render() {
    return (
      <Container className={"pt-5"} style={{ width: "600px" }}>
        <Paper elevation={"9"}>
          <Card>
            <h1 className={"text-center sub-titles mt-2"}>Payment</h1>
            <Divider />

                <div className='text-center mr-4'>
                  <span className='head'> <b>Total amount:</b></span>
                  <span><b >LKR.{this.state.Total}</b>
                    </span>
                </div>

            <Card.Body>
              <div class='tab-content'>
                <div id='credit-card' class='tab-pane fade show active pt-3'>
                  <form role='form' onSubmit={this.sendData}>
                    <div class='form-group'>
                      {" "}
                      <label for='username'>
                        <h6>Card Owner</h6>
                      </label>{" "}
                      <input
                        type='text'
                        name='UserName'
                        placeholder='Card Owner Name'
                        required
                        class='form-control '
                        onChange={this.handleInputChange}
                      />{" "}
                    </div>
                    <div class='form-group'>
                      {" "}
                      <label for='cardNumber'>
                        <h6>Card number</h6>
                      </label>
                      <div class='input-group'>
                        {" "}
                        <input
                          type='number'
                          name='cardNumber'
                          placeholder='Valid card number'
                          class='form-control '
                          required
                        />
                        <div class='input-group-append'>
                          {" "}
                          <span class='input-group-text text-muted'>
                            {" "}
                            <i class='fab fa-cc-visa mx-1'></i>{" "}
                            <i class='fab fa-cc-mastercard mx-1'></i>{" "}
                            <i class='fab fa-cc-amex mx-1'></i>{" "}
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-sm-8'>
                        <div class='form-group'>
                          {" "}
                          <label>
                            <span class='hidden-xs'>
                              <h6>Expiration Date</h6>
                            </span>
                          </label>
                          <div class='input-group'>
                            {" "}
                            <input
                              type='number'
                              placeholder='MM'
                              name=''
                              class='form-control'
                              required
                            />{" "}
                            <input
                              type='number'
                              placeholder='YY'
                              name=''
                              class='form-control'
                              required
                            />{" "}
                          </div>
                        </div>
                      </div>
                      <div class='col-sm-4'>
                        <div class='form-group mb-4'>
                          {" "}
                          <label
                            data-toggle='tooltip'
                            title='Three digit CV code on the back of your card'
                          >
                            <h6>
                              CVV <i class='fa fa-question-circle d-inline'></i>
                            </h6>
                          </label>{" "}
                          <input type='text' required class='form-control' />{" "}
                        </div>
                      </div>
                    </div>
                    <div class='card-footer'>
                      {" "}
                      <button
                        type='submit'
                        class='subscribe btn btn-primary btn-block shadow-sm'
                      >
                        {" "}
                        Confirm Payment{" "}
                      </button>{" "}
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
}

export default Payment;
