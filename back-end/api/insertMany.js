import { artistArray } from "../../front-end/assets/database/artists";
import { songsArray } from "../../front-end/assets/database/songs";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id
  
  return newSongObj;
});

const resSongs = await db.collection("songs").insertMany(newSongsArray);
const resArtists = await db.collection("artists").insertMany(newArtistArray);

console.log(newArtistArray);
console.log(newSongsArray);
