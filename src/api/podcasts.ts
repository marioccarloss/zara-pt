import axios from 'axios';

const API = process.env.REACT_APP_API;

export const getPodcastsById = async (podcastId: string) => {
  const { data } = await axios.get(`${API}/lookup?id=${podcastId}`);
  return data;
};

export const getPodcasts = async () => {
  const { data } = await axios.get(`${API}/us/rss/toppodcasts/limit=100/genre=1310/json`);
  return data;
};
