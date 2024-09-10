# stephen_king_api.js
Web-API for [stephen-king-api.onrender.com](https://stephen-king-api.onrender.com/) an open-source API that provides Novela, Short Story, character(currently limited to villains), and setting information for the written works of Stephen King

## Example
```JavaScript
async function main() {
	const { StephenKingApi } = require("./stephen_king_api.js");
	const stephenKingApi = new StephenKingApi()
	const books = await stephenKingApi.getBooks()
	console.log(books)
}

main()
```
