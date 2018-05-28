import P2PMessenger from "./p2p-messenger";
import EventEmitter from "wolfy87-eventemitter";

export default class Channel extends EventEmitter {
	constructor(name) {
		super();

		this.name = name;

		this.messenger = new P2PMessenger();
		this.messenger.on(
			`recvBroadcastMessage:channel:${this.name}`,
			message => this.emit("message", message)
		);
	}

	send(message) {
		this.messenger.broadcast({
			to: `channel:${this.name}`,
			content: message
		});
	}
}