import React, { Component } from "react";
import axios from "axios";



class ViewSubmission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submissions: [],
    };
    this.Approve = this.Approve.bind(this);
    this.Decliend = this.Decliend.bind(this);
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8070/api/submissions/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ submissions: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  Approve() {
    axios
      .patch(
        `http://localhost:8070/api/submissions/approve/${this.props.match.params.id}`
      )
      .then((res) => {
        alert("Submission aprroved for the event");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  Decliend() {
    axios
      .patch(
        `http://localhost:8070/api/submissions/decline/${this.props.match.params.id}`
      )
      .then((res) => {
        alert("Submission Declined for the event");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container mt-3 bg-secondary text-white rounded">
        <h1>Submission Details:</h1>

        <h5>Subject : {this.state.submissions.subject}</h5>
        <h5>Description:{this.state.submissions.description}</h5>
        <h5>Submitted Date and Time : {this.state.submissions.date}</h5>
        <div className="mt-3 mb-1">
          <a
            class="btn btn-primary mx-2 rounded"
            href={`http://localhost:8070/api/submissions/download/${this.props.match.params.id}`}
            download
          >
            Download
          </a>
          <button
            type="button"
            class="btn btn-success mx-2 rounded"
            onClick={this.Approve}
          >
            Approve
          </button>
          <button
            type="button"
            class="btn btn-danger mx-2 rounded"
            onClick={this.Decliend}
          >
            Decline
          </button>
        </div>
      </div>
    );
  }
}

export default ViewSubmission;
