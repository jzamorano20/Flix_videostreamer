import React from 'react';
import { searchQuery, setVideos } from '../Pages/Dashboard'
import axios from 'axios';
import '../.env'

const fetchVideos = async () => {
	const apiKey =
	　　process.env.YOUTUBE_KEY;
	try {
		const response = await axios.get(`https://googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&key=${apiKey}`);
		setVideos(response.data.items);
	} catch (error) {
		console.error('Error fetching videos', error);
	};
	};


export default fetchVideos;
