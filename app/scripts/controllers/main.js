'use strict';

app.controller('MainCtrl', ['$scope', 'socketio', 'Data', function ($scope, socketio, Data)
{
	// data
	$scope.data = {
		keyword: Data.keyword,
		tweets: Data.tweets,
		query: { 'text': '' },
		history: []
	};
	
	socketio.on('tweet', function (tweet)
	{
		$scope.data.tweets.push(tweet);
	});

	socketio.on('get:keyword', function (keyword)
	{
		$scope.data.keyword = keyword;
	});

	/**
	* Set Twitter stream keyword
	*/
	$scope.setKeyword = function (data)
	{
		Data.setKeyword(data);
		$scope.data.keyword = data;
		$scope.data.history.push(data);
	};
}]);