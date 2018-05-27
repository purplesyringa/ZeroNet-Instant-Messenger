import {zeroFS, zeroAuth, zeroPage} from "route.js";

export default class User {
	constructor(address) {
		this.address = address;
		this.cachedAddress = null;
		this.cachedConfig = null;
	}
	async getAddress() {
		if(this.address !== "self") {
			return this.address;
		} else if(this.cachedAddress !== null) {
			return this.cachedAddress;
		}

		return this.cachedAddress = (await zeroAuth.getAuthAsync()).address;
	}

	async readConfigFile() {
		let address = await this.getAddress();
		let json = await zeroFS.readFile(`data/users/${address}/config.json`);
		return JSON.parse(json);
	}
	async writeConfigFile(config) {
		let address = await this.getAddress();
		let json = JSON.stringify(config);
		await zeroFS.writeFile(`data/users/${address}/config.json`, json);
		await zeroPage.publish(`data/users/${address}/content.json`);
	}


	async getConfigOption(key) {
		if(this.cachedConfig === null) {
			this.cachedConfig = await this.readConfigFile();
		}
		return this.cachedConfig[key];
	}
	async setConfigOption(key, value) {
		if(this.cachedConfig === null) {
			this.cachedConfig = await this.readConfigFile();
		}
		this.cachedConfig[key] = value;
		await this.writeConfigFile(this.cachedConfig);
	}


	async getNickname() {
		return await this.getConfigOption("nickname");
	}
	async setNickname(nickname) {
		return await this.setConfigOption("nickname", nickname);
	}
}