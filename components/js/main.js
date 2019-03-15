// https://medium.com/@thatisuday/understanding-this-in-es5-vs-es6-579caa749bce

var object = {
	provider: 'gmail.com',
	usernames: [ 'mike', 'john', 'nina' ],

	getEmails1: function() {
		// fat arrow
		return this.usernames.map( username => {
			return username + '_1@' + this.provider;
		});
	},

	getEmails2: function() {
		// self
		let self = this;
		return this.usernames.map( function(username) {
			return username + '_2@' + self.provider;
		});
	},

	getEmails3: function() {
		// bind
		return this.usernames.map( function(username) {
			return username + '_3@' + this.provider;
		}.bind(this));
	}
};

console.log( object.getEmails1() );
console.log( object.getEmails2() );
console.log( object.getEmails3() );
