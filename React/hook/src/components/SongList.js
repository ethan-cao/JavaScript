import React, { useState, useEffect } from "react";
import NewSongForm from "./NewSongForm";

const SongList = () => {
	const [songs, setSongs] = useState([
		{ title: "almost", id: 1 },
		{ title: "memory gospel", id: 2 },
		{ title: "this wild darkness", id: 3 },
    ]);

    useEffect(() => {
        console.log(" songs: ", songs);
    }, [songs]);
    
    const addSong = (title) => {
        setSongs([...songs, {title, id: songs.length + 1}]);
    };

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
