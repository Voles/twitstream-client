'use strict';

app.factory('socketio', function ($rootScope)
{
	// connect with the server
	var socket = io.connect('http://localhost:8080');

	return {
		on: function (eventName, callback)
		{
			socket.on(eventName, function()
			{
				console.log('received a tweet');
				var args = arguments;
				$rootScope.$apply(function ()
				{
					callback.apply(socket, args);
				});
			});
		},

		emit: function (eventName, data, callback)
		{
			socket.emit(eventName, data, function ()
			{
				var args = arguments;
				$rootScope.$apply(function ()
				{
					if (callback)
					{
						callback.apply(socket, args);
					}
				});
			});
		}
	};
});