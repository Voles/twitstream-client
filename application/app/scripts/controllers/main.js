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


app.controller('MainCtrl', ['$scope', 'socketio', 'Data', function ($scope, socketio, Data)
{
	$scope.data = {
		keyword: Data.keyword,
		tweets: Data.tweets,
		query: ''
	};

	socketio.on('tweet', function (tweet)
	{
		Data.tweets.push(tweet);
	});

	$scope.setKeyword = function (data)
	{
		Data.setKeyword(data);
	};
}]);

app.directive('enter', ['socketio', function (socketio)
{
	return function(scope, element, attrs)
	{
		element.bind('keypress', function(event)
		{
			if (event.keyCode == 13)
			{
				scope.$apply(attrs.enter)
			}
		});
	};
}]);