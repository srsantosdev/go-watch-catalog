import axios from "axios";

export const tmdb = async () => {
  return await axios.get(`https://api.themoviedb.org/3/`);
};

export const imageTmdb = async (suffix = "/") => {
  return await axios.get(`https://image.tmdb.org/t/p/original${suffix}`);
};
