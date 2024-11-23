import React from "react";
import "./App.css";
import useNasaPhoto from "./hooks/useNasaPhoto";
import downloadImage from "./utils/downloadImage";
import Header from "./components/Header/Header";

function App() {
  const backgroundImage = useNasaPhoto();

  // Debugging: Log the backgroundImage URL
  console.log("NASA Photo of the Day URL:", backgroundImage);

  const handleDownload = () => {
    downloadImage(backgroundImage, "nasa_photo_of_the_day.jpg");
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundColor: backgroundImage ? "transparent" : "#ffffff", // Fallback color
        height: "100vh",
        width: "100vw",
      }}
    >
      <Header />
      <button
        onClick={handleDownload}
        style={{ position: "absolute", top: 20, right: 20 }}
      >
        Download Image
      </button>
    </div>
  );
}

export default App;
