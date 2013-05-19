'use strict';

app.factory('Data', ['socketio', function(socketio)
{
	return {
		// data
		tweets: [
		{
			'text': 'this is a tweet',
			'user': {
				'name': 'Niels'
			}
		}
		],
		keyword: 'AngularJS',

		// methods
		setKeyword: function(keyword)
		{
			socketio.emit('set:keyword', keyword);
		}
	}
}]);