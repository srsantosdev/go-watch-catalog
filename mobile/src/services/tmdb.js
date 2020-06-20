import axios from "axios";

const LANGUAGE = 'language=pt-BR'

export const tmdb = async () => {
  return await axios.get(`https://api.themoviedb.org/3/`);
};

export const imageTmdb = async (suffix = "/") => {
  return await axios.get(`https://image.tmdb.org/t/p/original${suffix}`);
};
