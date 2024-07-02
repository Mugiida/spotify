// main.js

function playSong(songName) {
	var audio = document.getElementById("myAudio");
	var source = document.getElementById("audioSource");

	// Set the source of the audio element based on the song name
	switch (songName) {
		case "hynm":
			source.src = "songs/hynmfortheweekend.mp3";
			break;
		case "duvet":
			source.src = "songs/duvvet.mp3";
			break;
		case "new":
			source.src = "songs/new.mp3";
			break;
		case "streams":
			source.src = "songs/streams.mp3";
			break;
		default:
			source.src = "";
	}

	// Load and play the audio
	audio.load();
	audio.play();
}
