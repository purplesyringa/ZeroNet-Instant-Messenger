import {zeroPage} from "route.js";
import EventEmitter from "es-event-emitter";

export default class P2PMessenger extends EventEmitter {
	constructor() {
		zeroPage.on("peerReceive", ({params}) => {
			if(params.broadcast) {
				this.emit("recvBroadcast", params);
			} else {
				this.emit("recv", params);
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
};