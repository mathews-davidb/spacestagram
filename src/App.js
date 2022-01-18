import { useEffect, useState } from "react";

import ImagesDisplay from "./components/ImagesDisplay";
import Loading from "./components/Loading";
import TitleBar from "./components/TitleBar";
import "./components/Components.css";

const URL = `https://api.nasa.gov/planetary/apod?api_key=42mVUbFgrab5nyBJHgjUho9gzItG41NLJyq5EY6P&count=10`;

function App() {
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // --------------------------------------------

  const getImages = async () => {
    try {
      setIsLoading(true);
      console.log(URL);
      const response = await fetch(URL);
      const data = await response.json();
      setImageData(data);
      setIsLoading(false);
    } catch (error) {
      throw error;
    }
  };

  // --------------------------------------------

  const getMoreImages = async () => {
    try {
      setIsLoading(true);
      console.log(URL);
      const response = await fetch(URL);
      const data = await response.json();
      const existing = imageData;
      const newImages = data;
      const newArray = [...existing, ...newImages];
      setImageData(newArray);
      setIsLoading(false);
    } catch (error) {
      throw error;
    }
  };

  // --------------------------------------------

  useEffect(() => {
    getImages();
  }, []);

  console.log(imageData);

  // --------------------------------------------

  return (
    <>
      {isLoading ? <Loading /> : null}
      <div className="App">
        <TitleBar
          setIsLoading={setIsLoading}
          setImageData={setImageData}
          imageData={imageData}
        />

        <ImagesDisplay imageData={imageData} />

        {isLoading ? null : (
          <button
            className="show-more-button"
            onClick={() => {
              getMoreImages();
            }}
          >
            Show More...
          </button>
        )}
      </div>
    </>
  );
}

export default App;
