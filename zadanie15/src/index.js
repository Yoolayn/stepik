class AsyncTaskManager {
	queue = [];
	types = [];

	constructor() {
		this.queue = [];
		this.types = [];
	}

	registerTaskType(name, handler) {
		this.types.push({
			name,
			handler
		});
	}

	enqueueTask(type, data) {
		this.queue.push({
			type,
			data
		});
	}

	processTasks() {
		const promises = this.queue.map((task) => {
			const type = this.types.filter((type) => {
				return type.name === task.type
			});
			return type[0].handler(task.data);
		});
		return Promise.all(promises)
	}
}
