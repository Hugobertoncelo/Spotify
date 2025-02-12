import ItemList from "./itemList";
import { artistArray } from "../../assets/database/artists";
import { songsArray } from "../../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      {/* Item List de artistas */}
      <ItemList
        title="Artistas"
        items={10}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />

      {/* Item List de musicas */}
      <ItemList
        title="Músicas"
        items={20}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  );
};

export default Main;
