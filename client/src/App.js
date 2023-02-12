/* eslint-disable jsx-a11y/img-redundant-alt */
import './App.css';
import ImageGallery from './components/ImageGallery';
import { useState } from 'react';

function App() {
  //create state for prompt and size inputs and set default values to empty string and small
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState('small');
  const [tempPrompt, setTempPrompt] = useState('');
  const [tempSize, setTempSize] = useState('small');

  //create a function to handle the prompt input
  const handlePromptChange = (e) => {
    //set the prompt state variable to the value of the input
    setTempPrompt(e.target.value);
  };

  //create a function to handle the size input
  const handleSizeChange = (e) => {
    //set the size state variable to the value of the input
    setTempSize(e.target.value);
  };

  //create a handle submit function
  const handleSubmit = (e) => {
    //prevent the default behavior of the form
    e.preventDefault();
    console.log('submitting');
    setPrompt(tempPrompt);
    setSize(tempSize);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Image Generorator v2</h1>
      </header>
      <main className="App-main">
        <h2>Image Gallery</h2>
        <ImageGallery prompt={prompt} size={size} />
      </main>
      {/* //section for prompt and size inputs */}

      <section className="App-section">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="prompt">Prompt</label>
            <input
              //add an onChange event listener that calls the handlePromptChange function
              onChange={handlePromptChange}
              type="text"
              id="prompt"
              name="prompt"
              placeholder="Enter a prompt"
            />
          </div>
          <div>
            <label htmlFor="size">Size</label>
            <select
              id="size"
              name="size"
              //add an onChange event listener that calls the handleSizeChange function
              onChange={handleSizeChange}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <button
          //add an onClick event listener that calls the handleSubmit function
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
