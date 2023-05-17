import { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  return <div>Dashboard</div>;
};

function YouTubeSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchVideos();
  };

  const fetchVideos = async () => {
    const apiKey = "AIzaSyBzkrecHSWUAC9ByRbuTzo1bZo1JHlVIQ0"; // Replace with your own API key
    const data = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&key=${apiKey}`)
    console.log(data);
    // fetch(
    //   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&key=${apiKey}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => setVideos(data.items))
    //   .catch((error) => console.error('Error fetching videos:', error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      {videos.map((video) => (
        <div key={video.id.videoId}>
          <h2>{video.snippet.title}</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}

// export default YouTubeSearch;
export default Dashboard;