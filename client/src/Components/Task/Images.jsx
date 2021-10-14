export default function Images(props) {
  const Images = () => {
    let images = [props.img1, props.img2, props.img3];
    console.log(images);
    return images.map((img) => {
      if (img != null) {
        return <img src={img} className="w-40" />;
      }
    });
  };
  return <div>{Images()}</div>;
}
