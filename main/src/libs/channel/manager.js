import Lobby from "./lobby";

export default new class ChannelManager {
	constructor() {
		this.cache = {};
	}

	getChannel(name) {
		if(!this.cache[`#${name}`]) {
			this.cache[`#${name}`] = this.getChannelUncached(name);
		}
		return this.cache[`#${name}`];
	}

	getChannelUncached(name) {
		if(name === "lobby") {
			return new Lobby();
		}
	}
};