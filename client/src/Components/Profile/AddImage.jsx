import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AddNewImage, GetImages } from "../DatabaseQueries/Querie";
const AddImage = () => {
  const { t } = useTranslation();
  const [drag, setDrag] = useState(false);
  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e) {
    e.preventDefault();
    let addedfiles = [...e.dataTransfer.files];
    console.log(addedfiles);
    const body = new FormData();
    addedfiles.forEach((file) => {
      body.append("image", file);
      axios
        .post(
          "https://api.imgbb.com/1/upload?key=ef809e6ad9bad4950ea87fe71e5f92a1",
          body
        )
        .then((response) => {
          AddNewImage(response.data.data.url);
          console.log(GetImages());
        });
    });

    setDrag(false);
  }
  return (
    <div>
      <p className="text-xl pb-2">{t("addimage")}</p>
      <div className="p-2 mb-3 mt-1 text-xl text-white w-80 bg-gray-500 rounded">
        {drag ? (
          <div
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            onDrop={(e) => onDropHandler(e)}
          >
            {t("drop")}
          </div>
        ) : (
          <div
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
          >
            {t("drop1")}
          </div>
        )}
      </div>
    </div>
  );
};
export default AddImage;
