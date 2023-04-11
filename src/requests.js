
import dotenv from  'dotenv';
dotenv.config();


const API_KEY = process.env.REACT_APP_API_KEY;

console.log(API_KEY);

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&sort_by=vote_averages.asc`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=count.asc`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&with_watch_monetization_types=free`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&include_adult=false&sort_by=vote_averages.asc`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&include_adult=false&sort_by=vote_averages.des`,
};

export default requests;
