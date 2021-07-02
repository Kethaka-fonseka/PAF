import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../../../stylesheets/AddTemp.css';

function AddTemplate() {


  const [category,setCategory] = useState("");
  const [file, setFile] = useState([]);
  const [progress, setProgress] = useState(0);
  const [categoryError, setCategoryError] = useState({});
  const [fileError, setFileError] = useState({});

  function onFileChange(e) {
    setFile(e.target.files[0]);
  }

  function onSubmit(e) {
    e.preventDefault();

    const isValid = formValidation();

    const data = new FormData();
    data.append("category",category)
    data.append("file",file)

    setProgress(0)
    const options = {
      onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent
        let percent = Math.floor((loaded * 100)/total)
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        setProgress(percent)
      }
    }

    if(isValid){
      axios.post("http://localhost:8070/api/template/add",data,options).then(res=>{
        alert("upload success")
      }).catch(err => {
        console.log(err);
      })
    }
  }

  const formValidation = () => {
    const categoryError = {};
    const fileError = {};
    let isValid = true;

    if(!category){
      categoryError.fillcategory = "Category is required!";
      isValid = false;
    }

    if(!file){
      categoryError.chooseFile = "file select is required!";
      isValid = false;
    }

    setCategoryError(categoryError);
    setFileError(fileError);
    return isValid;
  }

  return (

      <form  onSubmit={onSubmit}>

        <div className="form-container">
          <h1>Upload Templates</h1>
          <div className="form-group">
            <input type="file"  class="form-control" id="inputGroupFile02"
                   onChange={onFileChange}
                   required
            />
            {Object.keys(fileError).map((key)=>{
              return <div style={{color: "red"}}>{fileError[key]}</div>
            })}
            <label class="input-group-text" for="inputGroupFile02">Upload</label>
          </div>
          <br/>
          <div className="form-group">
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                    value={category}
                    onChange={(e) => {
                      const selectCategory = e.target.value;
                      setCategory(selectCategory);
                    }} >
              <option selected>Select the category</option>
              <option value="Research">Research</option>
              <option value="Workshop">Workshop</option>
            </select>
            {Object.keys(categoryError).map((key)=>{
              return <div style={{color: "red"}}>{categoryError[key]}</div>
            })}
          </div>
          <div className="progress">
            <div className="progress-bar" role='progressbar' style={{width: `${progress}%`}} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
              {progress}
            </div>
          </div>
          <br></br>
          <div className="text-right">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </div>
      </form>


  );
}

export default AddTemplate;
