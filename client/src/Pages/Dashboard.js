import React, { useState } from 'react';
import axios from 'axios';
import { useMutation } from '@apollo/client';
import { useNavigate } from'react-router-dom';
import { LOGOUT_USER } from '../utils/userMutations';
import logo from '../images/flix.png'
import './Dashboard.css'
function Dashboard() {
	const navigate = useNavigate();
	const [logoutUser] = useMutation(LOGOUT_USER);

	const handleLogout = async (e) => {
		e.preventDefault();

		try {
			await logoutUser();
			localStorage.removeItem('token');
			navigate('/');
			window.location.reload();
		} catch (err) {
			console.error('Error logging out', err);
		}
	}

  return (
    <div className="bg-gradient-to-tr from-black-800">
      <header className="bg-black-950 shadow">
        <div className="vw-screen mx-auto py-6 px-4 sm:px-6 lg:px-8 justify-between">
          <div className="flex items-center justify-center">
            <div className="flex-column">
              <h1 className="text-9xl font-bold text-white-50 p-6">FLIX</h1>
              <div className="logo-container border-2 border-white-50">
                <img
                  className="h-auto w-auto bg-white-50 border-white-50 border-1"
                  src={logo}
                  alt="logo"
                />
              </div>
            </div>
            <button type="submit" onClick={handleLogout}>
              LOGOUT
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="min-w-60% flex-grow mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex justify-center sm:px-0">
            <div className="grow h-screen flex flex-row md:ml-24 bg-black-950 text-white-50 text-opacity-80 overflow-y-scroll w-auto h-auto">
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
		const apiKey = process.env.REACT_APP_API_KEY; // Replace with your own API key

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
<div className="grow h-screen w-auto flex-wrap flex-col md:ml-24 m-default py-5 px-5 bg-black-950 text-white-50 text-opacity-80 justify-center">
  <form className="" onSubmit={handleSubmit}>
        <input type="text" className="rounded-md w-2/3 text-white-50 border-2 ml-20 mt-10 mb-4 bg-transparent"value={searchQuery} onChange={handleChange} />
        <button className="rounded-m bg-black-800 border-white-50 border-2 border-opacity-50" type="submit">Search</button>
      </form>
      <div className={`w-auto flex flex-col text-white-50 transition-all duration-500 ${selectedVideo ? 'hidden' : 'block'}`}>
        {videos.map((video) => (
          <div key={video.id.videoId} onClick={() => handleVideoSelect(video.id.videoId)}>
            <h2>{video.snippet.title}</h2>
            <img onClick={() => handleVideoSelect(video.id.videoId)} src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
          </div>
        ))}
      </div>
      <div className={`w-full h-full transition-all duration-500 ${selectedVideo ? 'block' : 'hidden'}`}>
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
