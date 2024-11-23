import { useState, useEffect } from "react";

const useNasaPhoto = () => {
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        const data = await response.json();
        console.log("NASA API response:", data); // Log the response data
        if (data.url) {
          setPhoto(data.url);
        } else {
          console.error("No URL found in NASA API response");
        }
      } catch (error) {
        console.error("Error fetching NASA photo:", error);
      }
    };

    fetchPhoto();
  }, []);

  return photo;
};

export default useNasaPhoto;
