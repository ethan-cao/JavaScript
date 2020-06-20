import React, { useEffect, useContext } from "react";
import NewSongForm from "./NewSongForm";
import { SongContext } from "../context/SongContext";

const SongList = () => {
	const {songs, addSong} = useContext(SongContext)

    useEffect(() => {
        console.log(" songs: ", songs);
    }, [songs]);
    
	return (
		<div className="song-list">
			<ul>
				{songs.map((song) => (
					<li key={song.id}>{song.title}</li>
				))}
			</ul>
            <NewSongForm addSong={addSong} />
		</div>
	);
};

export default SongList;
