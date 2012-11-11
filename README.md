legacy-preprocessor
===================

Very basic example of stripping media queries for old browsers (<IE9) using node.js fs

In search for a solution to this problem: http://simurai.com/post/30451824480/media-query-splitting

### Test run
git clone the above files then:
```js
node legacy-preprocessor.js
```

This should output a file ```legacy.css``` which you could include in your project using conditional comments:
```html
<!--[if lt IE 9]><link rel="stylesheet" href="legacy.css"><![endif]-->
```

### Todo
* Update regex to capture entirety of the @media content
* Specify css file(s) or folder as a param
* Rather than using the ```/*legacy*/``` flag include param to specify a mq dimention as the selector