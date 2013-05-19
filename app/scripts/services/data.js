'use strict';

app.factory('Data', ['socketio', function(socketio)
{
	return {
		// data
		tweets: [],
		keyword: 'AngularJS',

		// methods
		setKeyword: function(keyword)
		{
			socketio.emit('set:keyword', keyword);
		}
	}
}]);