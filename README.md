legacy-preprocessor
===================

Very basic example of stripping media queries for old browsers [<IE8] using node.js fs

In search for a solution to this problem: http://simurai.com/post/30451824480/media-query-splitting

### Test run
```js
node legacy-preprocessor.js
```

### Todo
* Specify css file(s) or folder as a param
* Rather than using the ```/*legacy*/``` flag include param to specify a mq dimention as the selector