const express = require('express'); // note syntax for module (no . or /)
const app = express();

// our data
// note the syntax for requiring file -- must start w/ "./"
const fruits = require('./models/fruits.js')

// ****index*** route - this will list all the fruits
app.get('/fruits', (req, res) => {

	// res.send(fruits);
	res.render('index.ejs', {
		theFruits: fruits, // <--data
		pageTitle: "FRUITS INDEX"
	})

})

// ** show ** route -- show all info about one particular fruit
app.get('/fruits/:id', (req, res) => {
	// const index = req.params.id
	// res.send(fruits[index])

	// you "Render" templates where you previously just "send"ed data
	// the data you want to display in your template is the second parameter
	// your data will ***ALWAYS*** be an object. 
	// advice: use singular for show page
	res.render('show.ejs', {
		fruit: fruits[req.params.id],
		message: "HI I AM A MESSAGE",
		secretMessageObject: {
			secret: "this is a secret"
		}
	})

})

app.listen(3000, () => {
	console.log("Server listening on port 3000");
})


