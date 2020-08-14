import MediaPlayer from "../../MediaPlayer";
import Ads, { Ad } from "./Ads";
import "./ads.css";

class AdsPlugin {
	private ads: Ads;
	private player: MediaPlayer;
	private media: HTMLMediaElement;
	private currentAdd: Ad;
	private adsContainer: HTMLElement;

	constructor() {
		this.ads = Ads.getInstance();
		this.adsContainer = document.createElement("div");
		this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
	}

	run(player: MediaPlayer) {
		this.player = player;
		this.player.container.appendChild(this.adsContainer);
		this.media = player.media;
		this.media.addEventListener("timeupdate", this.handleTimeUpdate);
	}

	private handleTimeUpdate() {
		const currentTime = Math.floor(this.media.currentTime);
		if (currentTime % 10 === 0) {
			this.renderAd();
		}
	}

	private renderAd() {
		if (this.currentAdd) {
			return;
		}
		const ad = this.ads.getAd();
		this.currentAdd = ad;
		this.adsContainer.innerHTML = `
			<div class="ads">
				<a class="ads__link" href="${this.currentAdd.url}" target="_blank">
					<img class="ads__img" src="${this.currentAdd.imageUrl}"/>
					<div class="ads__info">
						<h3 class="ads__title">${this.currentAdd.title}</h3>
						<p class="ads__body">${this.currentAdd.body}</p>
					</div>
				</a>
			</div>
		`;

		setTimeout(() => {
			this.currentAdd = null;
			this.adsContainer.innerText = "";
		}, 10000);
	}
}

export default AdsPlugin;
