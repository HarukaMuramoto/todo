var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

var todo = require('./routes/todo');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', todo.index);
app.post('/add', todo.add);
app.get('/delete/:id', todo.delete);

app.listen(process.env.PORT, process.env.IP);
