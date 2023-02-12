//create a image gallery component that will display the images generated by the openai api

//import react, useState, useEffect, axios and ImageGalleryItem modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGalleryItem from './ImageGalleryItem';
//
//create a ImageGallery component
const ImageGallery = ({ prompt, size }) => {
  //create a state variable called images and set it to an empty array
  const [images, setImages] = useState([]);
  //create a state variable called prompt and set it to an empty

  //create a state variable called size and set it to an empty string

  //create a state variable called loading and set it to false
  const [loading, setLoading] = useState(false);
  //create a state variable called error and set it to an empty string
  const [error, setError] = useState('');

  //create a useEffect hook that will run when the component mounts
  useEffect(() => {
    //create a async function called generateImage
    const generateImage = async () => {
      //set loading to true
      setLoading(true);
      //set error to an empty string
      setError('');
      //try to
      try {
        console.log('attempting ');
        //create a response variable and set it to the result of an axios post request to the /openai/generateimage route
        const response = await axios.post(
          'http://127.0.0.1:5000/openai/generateimage',
          {
            //set the prompt property to the prompt state variable
            prompt,
            //set the size property to the size state variable
            size,
          }
        );
        //set the images state variable to the data property of the response variable
        setImages(response.data.data);
        //set loading to false
        setLoading(false);
        //catch any errors
      } catch (error) {
        //set loading to false
        setLoading(false);
        //set error to the error message
        setError(error.message);
      }
    };
    //if the prompt state variable is not an empty string
    if (prompt !== '') {
      //run the generateImage function
      generateImage();
    }
  }, [prompt, size]);

  //return the following jsx
  return (
    //create a div element with a className of image-gallery
    <div className="image-gallery">
      {/* //if the loading state variable is true */}
      {loading && (
        //return the following jsx
        <>
          {/* //create a div element with a className of loading */}
          <div className="loading">
            {/* //create a p element with the text Loading... */}
            <p>Loading...</p>
            {/* //close the div element */}
          </div>
        </>
      )}
      {/* //if the error state variable is not an empty string */}
      {error && (
        //return the following jsx
        <>
          {/* //create a div element with a className of error */}
          <div className="error">
            {/* //create a p element with the text Error:  */}
            {error}
            <p>Error: {error}</p>
            {/* //close the div element */}
          </div>
        </>
      )}
      {/* //if the images state variable is not an empty array */}
      {images.length > 0 && (
        //return the following jsx
        <>
          {/* //create a div element with a className of image-gallery-items */}
          <div
            className="image-gallery-items"
            //add inline styles to make the image responsive and flex horizontally
            style={{
              width: '100%',
              height: 'auto',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 10px',
              flexWrap: 'wrap',
            }}
          >
            {/* //map over the images state variable */}

            {images.map((image) => (
              //return the following jsx

              <ImageGalleryItem key={image.url} image={image.url} />
            ))}
            {/* //close the div element */}
          </div>
        </>
      )}
      {/* //close the div element */}
    </div>
  );
};

//export the ImageGallery component
export default ImageGallery;