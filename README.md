jade-watcher
============

Express/connect middleware to watch and handle jade files. This middleware acts as a simple wrapper around the jade command line utility.

## Install

```bash
npm install -g jade
npm install jade-watcher
```

## Examples

```js
app.use(jadeWatcher({ src: __dirname, srcName: '_*' })); // Looks for files starting with an underscore; _header.jade would match
app.use(jadeWatcher({ srcName: 'index' })); // Watches a single file; index.jade
app.use(jadeWatcher({ pretty: true, obj: JSON.stringify(localsObject) }));
app.use(jadeWatcher({ src: __dirname + '/views', out: __dirname + '/build', pretty: true, obj: __dirname + '/locals.json' }));
```

## express

```javascript
var express = require('express');
var jadeWatcher = require('jade-watcher');

var app = express();
app.use(jadeWatcher({ client: true, noDebug: true }));

// Add your routes here, etc.

app.listen(3000);
```

## api

### jadeWatcher(options)

Create new middleware to serve watching jade files and generating the html

**Options**

- `src (string)`         jade files src directory; Default to `src/views`
- `out (string)`         the directory where the compiled html should be output to; Default to `static/views`
- `srcName (string)`     can be a file name or wildcard (without .jade extension); Default is wildcard *
- `obj (string)`         javaScript options object or JSON file containing it
- `path (string)`        filename used to resolve includes
- `pretty (boolean)`     compile pretty html output
- `client (boolean)`     compile function for client-side runtime.js
- `noDebug (boolean)`    compile without debugging (smaller functions)
- `watch (boolean)`      watch files for changes and automatically re-render; Default is true
- `debug (boolean)`      print to console or terminal; Default is true
- `extension (string)`   specify the output file extension
- `nameAfterFile (boolean)`     name the template after the last section of the file path (requires --client and overriden by --name)
- `doctype (string)`     specify the doctype on the command line (useful if it is not specified by the template)

## Debugging
* Default `src` value assumes that the jade files reside in directories `src/views`. The `static/views` directories will be created automatically when jade-watcher runs, so assuming the entire app is in directory `myApp` then:

```
myApp/
-/src
--/views/index.jade
:
:
-/static
--views
```

* Behaviour is similar to that of Express stylus middleware, that is, html is compiled upon browser reload.

## License

[MIT](LICENSE)
