import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../images/flix.png";

function Landing() {
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    fetchRandomVideo();
  }, []);

  const fetchRandomVideo = async () => {
    try {
      const apiKey = "AIzaSyDrCbCZLcthWmVVy_2rRuIyThmYlhJtEZQ";
      const searchQuery = "rick roll";
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&key=${apiKey}`
      );

      if (response.status === 200) {
        const data = response.data;

        // Extract the video ID from the response and set it in the state
        const randomVideoId = data.items[0].id.videoId;
        setVideoId(randomVideoId);
      } else {
        console.log("Failed to fetch a random video.");
      }
    } catch (error) {
      console.log("Error fetching a random video:", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-black-800 to-white-50 text-white-50">
      <nav className="bg-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <img className="h-8 w-8 bg-white-50" src={logo} alt="logo" />
                  <a
                    href="/"
                    className="text-white-50 hover:bg-white-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    HOME
                  </a>
                  <a
                    href="/login"
                    className="text-white-50 hover:bg-white-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    LOGIN
                  </a>
                  <a
                    href="/register"
                    className="text-white-50 hover:bg-white-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    REGISTER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow">
        <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold bg-black-950 rounded-md p-6">
            FLIX
          </h1>
          <p className="py-8 px-10">
            Welcome to FLIX. Your premier YouTube streaming application minus the advertisements.
          </p>
          {videoId && (
            <div className="aspect-w-16 aspect-h-9 flex justify-center items-center">
              <div className="aspect-video-container">
                <iframe
                  title="Random YouTube Video"
                  className="aspect-video"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Landing;
