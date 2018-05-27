import Channel from "./channel";

export default class Lobby extends Channel {
	constructor() {
		super();

		this.messenger.on("recvBroadcast", message => {
			if(message.message.to === "channel:lobby") {
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
			to: "channel:lobby",
			content: message
		});
	}
}