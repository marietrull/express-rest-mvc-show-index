const express = require('express');
const app = express();

const fruits = ['apple', 'banana', 'pear'];


app.listen(3000, () => {
	console.log("Server listening on port 3000");
})