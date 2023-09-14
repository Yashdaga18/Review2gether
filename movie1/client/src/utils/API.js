import axios from "axios";

export const saveMovie = movieData => {
  return axios.post("/api/movies", movieData);
}

export const getSavedMovies = () => {
  return axios.get("/api/movies");
}



// Function to fetch movies by genre
export const getMoviesByGenre = (genre) => {
  return axios.get(`/api/movies/?genre=${genre}`);
};


export const removeMovie = movieId => {
  return axios.delete(`/api/movies/${movieId}`);
}

export const updateMovie = (movieId, movieData) => {
  return axios.put(`/api/movies/${movieId}`, movieData);
}

export const saveUser = userData => {
  return axios.post("/api/users", userData);
}

export const getSavedUsers = () => {
  return axios.get("/api/users");
}

export const checkAuthUser = userData => {
  return axios.post("/api/auth", userData);
}

export default {
  saveMovie,
  getSavedMovies,
  removeMovie,
  updateMovie,
  saveUser,
  getSavedUsers,
  getMoviesByGenre
}