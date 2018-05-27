import P2PMessenger from "./p2p-messenger";
import EventEmitter from "wolfy87-eventemitter";

export default class Channel extends EventEmitter {
	constructor(name) {
		super();

		this.name = name;

		this.messenger = new P2PMessenger();
		this.messenger.on("recvBroadcast", message => {
			if(message.message.to === `channel:${this.name}`) {
				this.emit("message", {
					authId: message.signed_by,
					userName: message.cert.split("/")[1],

					content: message.message.content
				});
			}
		});
	}

	send(message) {
		this.messenger.broadcast({
			to: `channel:${this.name}`,
			content: message
		});
	}
}