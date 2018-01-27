# Javascript UsageExamples

## Letters Loader Animations
An example of js code for "lettersLoader" animation whit SpinJs configuration

```javascript
$(document).ready(function() { 
  $("#element").introLoader({ 
        animation: { 
          name: 'lettersLoader', 
          options: { 
               ease: "easeInOutCirc", 
               style: 'light', 
               delayBefore: 500, 
               exitTime: 300, 
               loaderText: 'Page ready!', 
               lettersDelayTime: 0 
          } 
        }, 
        spinJs: { 
          lines: 13, // The number of lines to draw 
          length: 20, // The length of each line 
          width: 10, // The line thickness 
          radius: 30, // The radius of the inner circle 
          corners: 1, // Corner roundness (0..1) 
          color: '#fff', // #rgb or #rrggbb or array of colors 
         } 
      }); 
}); 
```