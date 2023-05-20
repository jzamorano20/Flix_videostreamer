import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../images/flix.png";

function Favorites() {
	const [videosId, setVideoIds] = useState([]);

	useEffect(() => {
		fetchRandomVideos();
	}, []);

	const fetchRandomVideos = async () => {
		try {
			const apiKey = process.env.REACT_APP_API_KEY;
			const searchQuery = "rick roll";
			const response = await axios.get(
				`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&key=${apiKey}`
			)
			response.status === 200 ? setVideoIds(response.data.items.slice(0, 4).map((videos) => videos.id.videoId))
				: console.log('Could not fetch random videos');
		} catch (err) {
			console.log('Error fetching random videos', err);
		}
	};
	return (
		<div className="min-h-screen w-full bg-gradient-to-tr from-black-800 to-white-50 text-white-50">
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
						{/* <button type="submit">
              LOGOUT
            </button> */}
					</div>
				</div>
			</header>

			<header className="bg-white shadow">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold text-white-50 bg-black-950 rounded-md p-6">
						FLIX
					</h1>
				</div>
			</header>
			<main>
				<div className="container max-w-7xl mx-auto py-6 sm:px-6 lg:px-6">
					<div className="grid grid-cols-2 gap-4">
						{videosId.map((videosId) => (
							<div
								className="border-4 border-gray-200 rounded-lg h-96"
								key={videosId}
							>
								<iframe
									width="100%"
									height="100%"
									src={`https://www/youtube.com/embed/${videosId}`}
									title="Youtube Video"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in
								allowFullScreen"
								>

								</iframe>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

export default Favorites;

