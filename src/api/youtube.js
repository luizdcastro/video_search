import axios from "axios";

const KEY = "AIzaSyDEpCuuIaKepnMn2CM6X0kwDPeBaADVJK8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
