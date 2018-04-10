const express = require('express'); // note syntax for module (no . or /)
const app = express();
const bodyParser = require('body-parser')

// our data
// note the syntax for requiring a file -- must start w/ "./"
const fruits = require('./models/fruits.js')

//***MIDDLEWARE***
//you app.use middelware
//next will continue on to the route
//put this above the routes you're trying to intercept
app.use((req, res, next) => {
	console.log('I am Middleware and will be run for all routes. Thanks for stopping by.')	
	next(); //callback to make it keep going
})

//We are using the body-parser middleware
//it is a module (npm.org) that will let us see the form data in our POST requests
app.use(bodyParser.urlencoded({extended: false}))





// ****index*** route - this will list all the fruits
app.get('/fruits', (req, res) => {

	// res.send(fruits);
	res.render('index.ejs', {
		theFruits: fruits, // <--data
		pageTitle: "FRUITS INDEX"
	})

})

//*** NEW ROUTE***
//this route will show a template for the user to add fruits
//put it her to avoid /fruits/:id
app.get('/fruits/new', (req,res) => {
	res.render('new.ejs') //we are rendering a template
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

app.post('/fruits', (req, res) => {
	//now that we have body-parser the data is available to us in req.body
	console.log(req.body);

	//add a new object to our fruits array

	const newFruit = {
		name: req.body.name,
		color: req.body.color,

	}

	//needs to be after newFruit is declared
	if(req.body.readyToEat == 'on'){
		newFruit.readyToEat = true;
	} else newFruit.readyToEat = false;


	//push new fruit into our array
	fruits.push(newFruit);

	//you can redirect the user in lieu of render or send

	res.send("/fruits");
	//res.send(req.body);
})

app.listen(3000, () => {
	console.log("Server listening on port 3000");
})


