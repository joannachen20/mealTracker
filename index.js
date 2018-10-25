var fs = require('fs');

var data = fs.readFileSync('meals.json');
//console.log(data);

var meals = JSON.parse(data);
console.log(meals);

console.log("server is starting");

var express = require('express');

var app = express();

var server = app.listen(8000, listening);

function listening(){
    console.log("loading. . .")
}

//add food eaten during each meal
app.get('/add/:meal/:food', track);

//saves JSON data via the variables in the routes
function track(req, res) {
	var data = req.params;
    var meal = data.meal;
    var food = data.food;
    meals[meal] = food;
    var data = JSON.stringify(meals);
    fs.writeFile('meals.json', data, finished);
        function finished(err) {
            console.log('Noted.')
            console.log(meals);
        }
    var reply = {
        msg: "Your meal has been tracked."
    }
	res.send(reply)
}

//exposes all the saved data in the JSON file
app.get('/all', sendAll);

function sendAll(req, res){
    res.send(meals);
}
