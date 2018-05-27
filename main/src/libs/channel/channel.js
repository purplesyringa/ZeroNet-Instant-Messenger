import P2PMessenger from "./p2p-messenger";
import EventEmitter from "wolfy87-eventemitter";

export default class Channel extends EventEmitter {
	constructor() {
		super();

		this.messenger = new P2PMessenger();
	}

	send() {
		throw new Error("Not implemented");
	}
}