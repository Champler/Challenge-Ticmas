import React, { useState } from "react";
import axios from "axios";

export const FileForm = () => {
  const url = `http://localhost:3001/movie`;
  
  const [file, setFile] = useState();

  const handleFile: any = (e) => {
    let file = e.target.files[0];
    
    setFile(file);
  };

  /* const checkFile = () =>{ 
    if (file.name.split(".")[1] !== "csv") {
        return<p>Ingrese otro archivo</p>
      notValidated = "Ingrese otro archivo";
      console.log("hola");
    }
  } */

  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append("csv", file);
    fetch(url, { method: "POST" });
    await axios({
      url,
      method: "POST",
      data: formData,
    });
  };

  return (
    <div>
      <h3>Inserte su archivo</h3>
      <form action="POST">
        <div>
          <label>Select file</label>
          <input
            type="file"
            name="csv"
            key="csv"
            onChange={(e) => handleFile(e)}
          />
        </div>
        <br />
        <button type="submit" onClick={(e) =>  handleUpload(e)}>
          Upload
        </button>
      </form>
    </div>
  );
};
