jade-watcher
============

express/connect middleware to watch and handle jade files

## Install

```bash
npm install jade-watcher
```

## Examples

```js
app.use(jadeWatcher({ src: __dirname, srcName: '_*' }));
app.use(jadeWatcher({ pretty: true, obj: "{'obj1': 'test1', 'obj2': 'test2'}" }));
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

- `src (string)`         jade files src directory; Default to src/views
- `out (string)`         output the compiled html to <dir>; Default to static/views
- `srcName (string)`     can be a file name or wildcard (without .jade extension); Default is wildcard *
- `obj (string)`         javascript options object 
- `path (string)`        filename used to resolve includes
- `pretty (boolean)`     compile pretty html output
- `client (boolean)`     compile function for client-side runtime.js
- `noDebug (boolean)`    compile without debugging (smaller functions)
- `watch (boolean)`      watch files for changes and automatically re-render; Default is true
- `debug (boolean)`      print to console or terminal; Default is true

## License

[MIT](LICENSE)
