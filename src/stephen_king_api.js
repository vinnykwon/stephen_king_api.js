class StephenKingApi {
	constructor() {
		this.api = "https://stephen-king-api.onrender.com/api"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getBooks() {
		const response = await fetch(
			`${this.api}/books`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getBookById(bookId) {
		const response = await fetch(
			`${this.api}/books/${bookId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getShorts() {
		const response = await fetch(
			`${this.api}/shorts`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getShortById(shortId) {
		const response = await fetch(
			`${this.api}/shorts/${shortId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getVillains() {
		const response = await fetch(
			`${this.api}/villains`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getVillainById(villainId) {
		const response = await fetch(
			`${this.api}/villains/${villainId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {StephenKingApi}
