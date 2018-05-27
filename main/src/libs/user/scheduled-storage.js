import {zeroFS, zeroPage} from "route.js";

export default class ScheduledStorage {
	constructor(path, contentJson) {
		this.path = path;
		this.content = contentJson;
		this.cached = {};

		this.lastPublish = 0;
		this.runningTimeout = null;
		this.delay = 30000;
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

		if(Date.now() - this.lastPublish > this.delay) {
			this.lastPublish = Date.now();
			zeroPage.publish(this.contentJson);
		} else {
			if(this.runningTimeout === null) {
				// Already scheduled
				return;
			}

			this.schedule();
		}
	}

	schedule() {
		this.runningTimeout = setTimeout(() => {
			this.lastPublish = Date.now();
			zeroPage.publish(this.contentJson);
		}, this.delay);
	}
}