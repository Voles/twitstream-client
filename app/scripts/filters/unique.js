'use strict';

app.filter('unique', function ()
{
	return function (items)
	{
		return items.reverse().filter(function (e, i, arr)
		{
		    return arr.indexOf(e, i + 1) === -1;
		}).reverse();
	};
});