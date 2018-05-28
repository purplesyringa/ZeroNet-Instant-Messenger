import {zeroPage} from "zero";
import EventEmitter from "wolfy87-eventemitter";
import Singleton from "singleton-js";

@Singleton
export default class P2PMessenger extends EventEmitter {
	constructor() {
		super();

		zeroPage.on("peerReceive", ({params}) => {
			zeroPage.cmd("peerValid", [params.hash]);

			if(params.broadcast) {
				this.emit("recvBroadcast", params);
			} else {
				this.emit("recv", params);
			}
		});

		// Reemit big events into small ones
		this.on("recvBroadcast", message => {
			if(message.message.to) {
				const evt = {
					to: message.message.to,
					authId: message.signed_by,
					userName: message.cert.split("/")[1],

					content: message.message.content
				};

				this.emit("recvBroadcastMessage:" + message.message.to, evt);
				this.emit("recvBroadcastMessage", evt);
			}
		});
	}

	broadcast(message) {
		zeroPage.cmd("peerBroadcast", {
			message,
			immediate: true,
			privatekey: false
		});
	}

	async send(ip, message) {
		return await zeroPage.cmd("peerSend", {
			ip,
			message
		});
	}
}