import axios from "axios";
const KEY = "AIzaSyBzkrecHSWUAC9ByRbuTzo1bZo1JHlVIQ0";
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResult: 5,
        key: KEY
    }
});