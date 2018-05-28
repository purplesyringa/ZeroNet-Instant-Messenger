import {zeroPage} from "route.js";
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
				this.emit("recvBroadcastMessage:" + message.message.to, {
					to: message.message.to,
					authId: message.signed_by,
					userName: message.cert.split("/")[1],

					content: message.message.content
				});
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