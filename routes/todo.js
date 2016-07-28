var todos = [
	{title: 'title1'},
	{title: 'title2'}
];

exports.index = function(req, res){
	res.render('index', {todos: todos});
}
exports.add = function(req, res){
	var todo = {
		title: req.body.title
	};
	todos.push(todo);
	res.redirect('/');
}

exports.delete = function(req, res){
	todos.splice(req.params.id, 1);
	res.redirect('/');
}
