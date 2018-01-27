### Simple Init *(plugin with default options)*

```javascript
$(document).ready(function(){
  $('#element').introLoader();
});
```
## OPTIONS
Plugin option are divided in two groups: **animation** and **spinJs**

### Animation Options
Example of animation options usage
```javascript
$(document).ready(function(){
  $('#element').introLoader({
       animation: { 
          name: 'simpleLoader', //animation name
          options: { 
              exitFx:'slideUp', //animation effect
              ease: "easeInOutCirc", //easing
              style: 'dark', //css style
              stop: true, //auto intro page stop (on window load)
              fixed: true, //position:fixed;
              delayBefore: 1000, //delay time before animation start
              exitTime: 500 //duration
          } 
  }
});
```
### SpinJs Options
jqueryIntroLoader supports all of native spinjs options. You can easly configure this options on [spinJs Website](http://fgnass.github.io/spin.js/) with a cool visual configurator (you can configure spin and then copy&paste code inside spinJs:{} options object)<br>
Example of spinJs options usage
```javascript
$(document).ready(function(){
  $('#element').introLoader({
       spinJs: { 
            lines: 13, // The number of lines to draw 
            length: 20, // The length of each line 
            width: 10, // The line thickness 
            radius: 30, // The radius of the inner circle 
            corners: 1, // Corner roundness (0..1) 
            color: '#fff', // #rgb or #rrggbb or array of colors 
        }
  }
});
```