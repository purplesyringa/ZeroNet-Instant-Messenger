import Channel from "./channel";

export default new class ChannelManager {
	constructor() {
		this.cache = {};
	}

	getChannel(name) {
		if(!this.cache[`#${name}`]) {
			this.cache[`#${name}`] = new Channel(name);
		}
		return this.cache[`#${name}`];
	}
};