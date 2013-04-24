/**
* DOM ready
*/
$(document).ready(function ()
{
	// socket connection
	var socket = io.connect('http://localhost:8080/');
	socket.on('connect', function ()
	{
		// receive tweet
		socket.on('tweet', function (msg)
		{
			$('#tweets').prepend('<h3>' + msg.user.name + '</h3><p>' + msg.text + '</p><br />');
		});
	});
});