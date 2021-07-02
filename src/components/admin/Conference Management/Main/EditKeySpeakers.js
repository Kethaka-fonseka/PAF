import React, {useEffect, useState} from "react";
import { Card, Container, Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import axios from "axios";
import swal from "sweetalert";
import {useHistory} from "react-router-dom";

function EditKeySpeakers(props) {
  const [image, setImage] = useState([]);
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);

  function onChangeImage(e) {
    setImage(e.target.files[0]);
  }

  const history = useHistory();

  function AddSpeaker(e) {

      e.preventDefault();
      const data = new FormData();
      data.append("image", image);
      data.append("name", name );
      data.append("description",description );
      data.append("conference", props.match.params.id );
      console.log(data);
      axios
          .post("http://localhost:8070/api/speakers/add",data)
          .then((res) => {
              swal({
                  title: "Success",
                  text: "Do you want to add more",
                  icon: "success",
                  SuccessMode: true,
              }).then((willDelete) => {
                  history.push("/admin/add-images");
              });
          })
          .catch((err) => {
            console.log(err);
          });
    }


  return (
      <div>
        <Container className={"mt-4"} >

            <Card className={'p-4'}>
                <h1 className={"sub-titles text-center"}> ADD SPEAKERS FOR CURRENT MAIN EVENT</h1>
                <hr/>
          <Form>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Name:
              </label>
              <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Description:
              </label>
              <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="description"
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
              />
            </div>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">
              Select Image:
            </label>
            <input
                className="form-control"
                type="file"
                name="image"
                id="file"
                accept=''
                onChange={onChangeImage}
            />
          </div>

            <Button fullWidth variant={"contained"} color={"primary"} onClick={AddSpeaker}>Submit</Button>
          </Form>
            </Card>
        </Container>
      </div>
  );

}
export default EditKeySpeakers;
