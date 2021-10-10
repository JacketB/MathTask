import axios from "axios";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function AddImage() {
  var images = [];
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((element) => {
      images.push(element.path);
    });
  }, []);

  const AddImages = () => {
    console.log(images);
    /*axios
      .post(
        "http://localhost:3001/images",
        {
          pathToImage: todb,
          TaskId: localStorage.getItem("userId"),
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        console.log("added");
      });*/
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="p-6">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <button onClick={AddImages()}>Add images</button>
    </div>
  );
}
