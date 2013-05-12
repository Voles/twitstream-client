Twitstream client
=================

The Twitstream client application is built using [Yeoman](http://yeoman.io/ 'Yeoman').

### Installation notes
1. Cd into the project directory
2. Install [Yeoman](http://yeoman.io/), [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/) via npm
3. Run `$ npm install`
4. Change the Twitstream server url in `scripts/servicer/socketio.js`.
5. Make sure the [Twitstream server](https://github.com/Voles/twitstream-server) is up and running
6. Run `$ grunt build` to build the application. The destination folder is `dist`.