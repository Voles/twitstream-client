'use strict';

app.factory('Data', function(){
	return {
		tweets: [],
		keyword: 'AngularJS'
	}
})


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
}]);
