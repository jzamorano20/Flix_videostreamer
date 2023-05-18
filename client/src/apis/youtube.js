import axios from "axios";
import KEY from "../.env"

export default axios.create({
	baseURL: 'https://api.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
})
