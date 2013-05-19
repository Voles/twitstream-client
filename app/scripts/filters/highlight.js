'use strict';

app.filter('highlight', [function ()
{
	return function(text, keyword)
	{
		var rgxp = new RegExp(keyword, 'gi');
		var repl = '<span class="label label-warning">' + keyword + '</span>';
		return text.replace(rgxp, repl);
	};
}]);