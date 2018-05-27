import {zeroFS, zeroAuth, zeroPage} from "route.js";

export default class ScheduledStorage {
	constructor(path, contentJson) {
		this.path = path;
		this.content = contentJson;
		this.cached = {};
	}

	async read(name) {
		if(!this.cached.hasOwnProperty(name)) {
			let json = await zeroFS.readFile(`${this.path}/${name}.json`);
			this.cached[name] = JSON.parse(json);
		}

		return this.cached[name];
	}
	async write(name, value) {
		this.cached[name] = value;

		let json = JSON.stringify(value);
		await zeroFS.writeFile(`${this.path}/${name}.json`, json);
		await zeroPage.publish(this.contentJson);
	}
}