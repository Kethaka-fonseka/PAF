import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddTemplates() {
  const [category, setCategory] = useState("");
  const [file, setFile] = useState([]);

  function onFileChange(e) {
    setFile(e.target.files[0]);
  }

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("category", category);
    data.append("file", file);

    axios
      .post("http://localhost:8000/api/category", data)
      .then((res) => {
        alert("upload success");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-3">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            onChange={onFileChange}
          />
          <select
            className="custom-select"
            value={category}
            onChange={(e) => {
              const selectCategory = e.target.value;
              setCategory(selectCategory);
            }}
          >
            <option value="recent">Recent</option>
            <option value="past">Past</option>
          </select>
          <label className="custom-file-lable" htmlFor="inputGroupFile04">
            Choose File
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTemplates;
