/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', {
		title: 'Očistimo Slovensko morje',
		slogan: 'Kdo bo, če ne bomo sami?'
	});
};
