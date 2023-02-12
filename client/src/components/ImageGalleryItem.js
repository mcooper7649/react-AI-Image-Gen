//create an ImageGalleryItem component
const ImageGalleryItem = ({ image }) => {
  console.log(image);
  //return the following jsx
  return (
    //create a div element with a className of image-gallery-item
    <div className="image-gallery-item">
      {/* //create an img element with a src attribute of the image state variable */}
      <img src={image} alt="Generated" />
      {/* //close the div element */}
    </div>
  );
};
//export the ImageGalleryItem component
export default ImageGalleryItem;
