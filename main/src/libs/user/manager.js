import User from "./user";
import {zeroAuth, zeroFS} from "zero";

export default new class UserManager {
	constructor() {
		this.cache = {};
	}

	async isRegisteredSelf() {
		let auth = await zeroAuth.getAuthAsync();
		if(!auth) {
			return false;
		}

		return await zeroFS.fileExists(`data/users/${auth.address}/config.json`);
	}
	async register(nickname) {
		let user = this.getSelf();
		await user.writeConfigFile({
			nickname: nickname
		});
	}


	getByAddress(address) {
		if(!this.cache[address]) {
			this.cache[address] = this.getByAddressUncached(address);
		}
		return this.cache[address];
	}

	getByAddressUncached(address) {
		return new User(address);
	}


	getSelf() {
		return this.getByAddress("self");
	}
};