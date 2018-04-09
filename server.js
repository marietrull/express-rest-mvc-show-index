const express = require('express');
const app = express();

const fruits = ['apple', 'banana', 'pear'];

// ****index*** route - this will list all the fruits
app.get('/fruits', (req, res) => {
	res.send(fruits);
})

app.listen(3000, () => {
	console.log("Server listening on port 3000");
})


