import React, { useState } from 'react';
import axios from 'axios';

function Dashboard() {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="vw-screen mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white-50 bg-black-950 rounded-md p-6 overflow-y-scroll">
            FLIX
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grow h-screen flex flex-row md:ml-24  bg-black-900 text-white-50 text-opacity-80 overflow-y-scroll">
              <YouTubeSearch />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function YouTubeSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchVideos();
  };

  const fetchVideos = async () => {
    const apiKey = ""; // Replace with your own API key

    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&key=${apiKey}`);
      setVideos(response.data.items);
      setSelectedVideo(null); // Reset selected video
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleVideoSelect = (videoId) => {
    setSelectedVideo(videoId);
  };

  return (
    <div className="grow h-screen flex flex-row flex-wrap md:ml-24 m-default py-5 px-5 bg-black-900 text-gray-700 text-opacity-80 justify-between w-full">
      <form className="justify-center" onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button className="rounded-m bg-black-400" type="submit">Search</button>
      </form>
      <div className={`w-1/2 flex flex-col text-black-950 transition-all duration-500 ${selectedVideo ? 'hidden' : 'block'}`}>
        {videos.map((video) => (
          <div key={video.id.videoId} onClick={() => handleVideoSelect(video.id.videoId)}>
            <h2>{video.snippet.title}</h2>
            <img onClick={() => handleVideoSelect(video.id.videoId)} src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
          </div>
        ))}
      </div>
      <div className={`w-full transition-all duration-500 ${selectedVideo ? 'block' : 'hidden'}`}>
        {selectedVideo && (
          <div className="w-full h-full justify-self-center align-self-center">
            <iframe
              className="w-full h-full justify-center"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="Selected Video"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
