var Folder  = require('literate-programming-lib');
var through = require('through2');

function literify(file) {
	var folder = new Folder();
	var gcd    = folder.gcd;
	var colon  = folder.colon;

	return through.obj(function(buff, enc, next) {
		gcd.on('file ready', function(text) {
			this.push(text);
			next();
		}.bind(this));

		folder.newdoc('temp', buff.toString());
	});
};

module.exports = literify;
