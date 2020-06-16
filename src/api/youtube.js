import axios from "axios";

const KEY = "AIzaSyCWvtQewE7gAJz1EyKV0yrxzOeN1-37rNQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
