import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";

const video = document.querySelector("video");
const player = new MediaPlayer({
	el: video,
	plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const play: HTMLElement = document.querySelector("#play");
const mute: HTMLElement = document.querySelector("#mute");
play.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/sw.js").catch((error) => {
		console.log(error.message);
	});
}
