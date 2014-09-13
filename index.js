/**
  Express Jade template engine middleware.

  @author Lisa-Ann Bruney
  @year 2014
  @url https://github.com/lbruney/jade-watcher
**/

module.exports = function jadeWatcher(options) {
  var options = options || {} 
    , appPath = require('path')
    , exec = require('child_process').exec
    , child = null
    , debug = options.debug || true

    // Jade options
    , jade = {};
      jade.src = options.src || appPath.resolve('.', '../') + '/src/views'
    , jade.out = options.out || appPath.resolve('.', '../') + '/static/views'
    , jade.pretty = (options.pretty ? '--pretty ' : ' ') 
    , jade.watch = ((options.watch == null || options.watch == true) ? '--watch ' : ' ') 
    , jade.noDebug = (options.noDebug ? '--no-debug ' : ' ') 
    , jade.client = (options.client ? '--client ' : ' ') 
    , jade.obj = (options.obj ? '--obj "' + options.obj + '"' : ' ') 
    , jade.path = (options.path ? '--path ' + options.path : ' ') 
    , jade.srcName = (options.srcName ? options.srcName : '*');

  return function jadeWatcher(req, res, next) {
    if (!child) {
      log('jade-watcher started.', debug);
      child = exec(buildJade(jade, debug),
        function (error, stdout, stderr) {
          log('stdout: ' + stdout, debug);
          log('stderr: ' + stderr, debug);
          if (error !== null) {
            log('exec error: ' + error, debug);
          }
      });
    }
    next();
  };
};

function buildJade(options, debug) {
  var command = 'jade '+ options.pretty + options.watch + options.client + options.noDebug + options.obj + options.path + options.src + '/' + options.srcName + '.jade --out ' + options.out
  log(command, debug)
  return command;
}

function log(str, debug) {
  if (debug) {
    console.log(str);
  }
}

