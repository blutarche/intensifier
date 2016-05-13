# intensifier
Intensifies gif maker [http://aikdanai.com/intensifier/](http://aikdanai.com/intensifier/)

## How to compile sass

```
sass --watch scss:css --style compressed
```

## How to use webpack
### install module
```
npm install
```

### run webpack-dev-server
```
npm start
```


### webpack create bundle.js
```
webpack --inline --hot
```
#### or
```
./node_modules/.bin/webpack --inline --hot
```
#### or
```
./webpack-build
```

### optimize
```
webpack --inline --hot --optimize-minimize --optimize-dedupe
```

## References
[Canvas to GIF](https://github.com/antimatter15/jsgif)


```javascript
var canvas = document.getElementById('canvasTagID');
var context = canvas.getContext('2d');
var encoder = new GIFEncoder();
encoder.setRepeat(0);
encoder.setDelay(0); // delay between frame
encoder.start();

context.fillStyle = "rgb(255,0,0)";  
context.fillRect (10, 10, 100, 100);  
encoder.addFrame(Context);

context.fillStyle = "rgb(0,255,0)";  
context.fillRect (50, 50, 200, 200);  
encoder.addFrame(Context);

// Update Context
// Add Frame
// ...

encoder.finish();
document.getElementById('imageTagID').src = 'data:image/gif;base64,'+encode64(encoder.stream().getData());
```
