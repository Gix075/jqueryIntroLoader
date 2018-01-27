# Data Methods

List of plugin data methods allowed.<br>

## stop()

To use stop() method you need to load plugin with animation option **stop** setted on **false**

```javascript
$('#element').introLoader({
      animation: {
         options: {
             stop: false
         }
      }
});
```
Then you can use
```javascript
var loader = $('#element').data('introLoader');
loader.stop();
```

## destroy()

To destroy plugin simply use the following lines:
```javascript
var loader = $('#element').data('introLoader');
loader.destroy();
```
