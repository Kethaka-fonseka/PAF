import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from "@material-ui/core";


class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state ={
          submission: this.props.submission
        }
    }

    render() {


      function PayNow(e) {
          localStorage.setItem("payid",e._id)
         window.location = `/payment/${e.role}`;
      }

      if(this.state.submission.role =="researcher" && this.state.submission.status == "unpaid" ){
       return(
           <div >
             <Button variant={"contained"} color={"primary"} fullWidth onClick={PayNow.bind(this,this.state.submission)}> Pay Now!</Button>
           </div>
       )
     }
      else {
        return (
            <div>

            </div>
        )
      }
    }
}

MyComponent.propTypes = {};

export default MyComponent;
