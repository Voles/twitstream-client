'use strict';

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