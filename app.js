
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3004);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


var gith = require('gith').create(9004);

gith({
    repo: 'loranbriggs/Sandbox',
    branch: 'master'
  }).on( 'all', function( payload ) {
    var sys = require('sys')
    var exec = require('child_process').exec;
    function puts(error, stdout, stderr) { 
      sys.puts(stdout)
    }
    exec(". ~/sandbox.codesquire.com/deploy-master.sh", puts); // command to be execute
  });

