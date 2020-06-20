import React, { useState, useContext } from "react";
import { SongContext } from "../context/SongContext";

const NewSongForm = () => {
	const [title, setTitle] = useState("");

	const { dispatch } = useContext(SongContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch({ type: "ADD", title });
		setTitle("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>Song name:</label>
			<input
				type="text"
				required
				value={title}
				onChange={(event) => {
					setTitle(event.target.value);
				}}
			/>
			<input type="submit" value="add song" />
		</form>
	);
};

export default NewSongForm;
