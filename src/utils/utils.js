import videosList from "../data/videos.json";
import videosDetails from "../data/video-details.json";

export const getVideos = (videoId) => {
  return videosList.filter((video) => video.id !== videoId);
};

const getVideoDetails = (videoId) => {
  return videosDetails.find((video) => video.id === videoId);
};

export default getVideoDetails;
