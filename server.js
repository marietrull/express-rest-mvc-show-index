const express = require('express');
const app = express();

const fruits = ['apple', 'banana', 'pear'];

// ****index*** route - this will list all the fruits
app.get('/fruits', (req, res) => {
	res.send(fruits);
})

// ** show ** route -- show all info about one particular fruit
app.get('/fruits/:id', (req, res) => {
	const index = req.params.id
	res.send(fruits[index])
})

app.listen(3000, () => {
	console.log("Server listening on port 3000");
})


