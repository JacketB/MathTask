import ImageViewer from "react-simple-image-viewer";
import { useState, useCallback } from "react";
export default function Images(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [props.img1, props.img2, props.img3];
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const Images = () => {
    return (
      <div>
        {images.map((src, index) => {
          if (src != null) {
            return (
              <img
                src={src}
                onClick={() => openImageViewer(index)}
                width="150"
                key={index}
                style={{ margin: "2px" }}
                alt=""
              />
            );
          }
        })}
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
    );
  };
  return <div>{Images()}</div>;
}
