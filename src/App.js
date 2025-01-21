import React from "react";
import "./App.css";
import useNasaPhoto from "./hooks/useNasaPhoto";
import Header from "./components/Header/Header";

function App() {
  const backgroundImage = useNasaPhoto();

  // Debugging: Log the backgroundImage URL
  console.log("NASA Photo of the Day URL:", backgroundImage);

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
    </div>
  );
}

export default App;
