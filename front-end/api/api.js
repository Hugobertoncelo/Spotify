import axios from "axios";
// import "dotenv/config"

// const { NODE_ENV } = process.env;
// const URL =  import.meta.env.DEV ? "http://localhost:3000/api" : "/api";
const URL = "https://spotify-df33.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(resArtists.data);
