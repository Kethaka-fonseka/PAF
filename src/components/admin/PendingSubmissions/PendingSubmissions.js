import React, { Component } from "react";
import axios from "axios";

class PendingSubmissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submissions: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8070/api/submissions")
      .then((res) => {
        this.setState({ submissions: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onClick(submissionID) {
    window.location = `/submissions/view/${submissionID}`;
    //
  }
  render() {
    return (
      <div className="container mt-3">
        {this.state.submissions.map((sub, index) => {
          return (
            <div
              key={index}
              className="card mb-3 p-3"
              onClick={this.onClick.bind(this, sub._id)}
            >
              <h5>Subject : {sub.subject}</h5>
              <h5>Status:{sub.status}</h5>
              <h5>Submitted Date and Time : {sub.date}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PendingSubmissions;
