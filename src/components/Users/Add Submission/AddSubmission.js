import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";
import {Card, Container} from "react-bootstrap";
import {Button} from "@material-ui/core";

class AddSubmission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      description: "",
      file: [],
      options: [
        { value: "conductor", label: "conductor" },
        { value: "researcher", label: "researcher" },
      ],
      role: "",
      conference: localStorage.getItem('con_id'),
      user: localStorage.getItem('userid')
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFileChnage = this.onFileChnage.bind(this);
    this.onSelectRole = this.onSelectRole.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("subject", this.state.subject);
    data.append("description", this.state.description);
    data.append("role", this.state.role);
    data.append("file", this.state.file);
    data.append("conference", this.state.conference);
    data.append("user", this.state.user);

    axios
      .post("http://localhost:8070/api/submissions/create", data)
      .then((res) => {
        alert("data successfully inserted!!!");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onFileChnage(e) {
    this.setState({ file: e.target.files[0] });
  }

  onSelectRole(e) {
    this.setState({ role: e.value });
  }

  render() {
    return (
        <Container className={"pt-5"}>
       <Card className={"p-4"}>
        <h1 className={"sub-titles text-center"}>Add Submission</h1>
         <hr/>
        <form onSubmit={this.onSubmit}>
          <div class="mb-3">
            <label htmlFor="subject" class="form-label">
              Subject:
            </label>
            <input
              type="text"
              class="form-control"
              id="subject"
              name="subject"
              onChange={this.onChange}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="descripton" class="form-label">
              Description:
            </label>
            <textarea
              class="form-control"
              id="description"
              name="description"
              rows="3"
              onChange={this.onChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="file" class="form-label">
              select your role:
            </label>
            <Select options={this.state.options} onChange={this.onSelectRole} />
          </div>

          <div class="mb-3">
            <label htmlFor="file" class="form-label">
              select your document here:
            </label>
            <input
              class="form-control"
              type="file"
              name="file"
              id="file"
              multiple
              accept=".pdf,.csv"
              onChange={this.onFileChnage}
            />
          </div>

          <Button type={"submit"} size={"large"} variant={"contained"} style={{backgroundColor: "darkred",color: "white" }} fullWidth> Submit</Button>
        </form>
</Card>
        </Container>
    );
  }
}

export default AddSubmission;
