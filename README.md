jqueryIntroLoader (version 1.3.0)
===================================

a jQuery plugin for generate animated Intro Loading Pages.

This plugin help jquery beginners to add some cool animated intro page on a website.<br>
This plugin is very easy to install and use.

[Home](http://factory.brainleaf.eu/jqueryIntroLoader) | 
[Documentation](http://factory.brainleaf.eu/jqueryIntroLoader/#documentation) | [Demo](http://factory.brainleaf.eu/jqueryIntroLoader/demo)

###Why use it?

- It's cool!
- It's responsive!
- It's useful!
- It's light!
- It's simple to use!
- You don't need to know jQuery to obtain cool animations!
- It's perfect for jQuery beginners!

###Use

**HTML**<br>
```html
    <head>
        <!-- CSS -->
        <link href="path/to/css/introLoader.min.css" rel="stylesheet">
        <!-- PLUGIN (with helper plugins included) -->
        <script src="path/to/plugin/jquery.introLoader.pack.min.js"></script>
    </head>
    <body>
        <div id="element" class="introLoading"></div>
    </body>
```

**JAVASCRIPT**<br>
```javascript
    $(document).ready(function() {
        $('#element').introLoader();
    });
```

*Read documentation to learn more about plugin options and use.*

###Documentation
You can find an exaustive documentation on plugin home page<br> [http;//factory.brainleaf.eu/jqueryIntroLoader/#documentation](http://factory.brainleaf.eu/jqueryIntroLoader/#documentation)

###Sofware incuded
This plugin use some tird party software to do something during animations.<br>
[SpinJs](fgnass.github.io/spin.js/) and [jQueryEasing](http://gsgd.co.uk/sandbox/jquery/easing/)

###ChangeLogs
**version 1.3.0**<br>
*------------------*<br>
New animation *"lettersLoader"* added.<br><br>
**version 1.2.0**<br>
*------------------*<br>
New animation *"doubleLoader"* added.<br><br>
**version 1.1.3**<br>
*------------------*<br>
White colored background added to the loader<br>
(prevent site visibility before plugin style assignment).<br>

**version 1.1.2**<br>
*------------------*<br>
CSS classes name changed<br>
Spinner ID changed<br>
Stylesheet cleaned<br>

**version 1.1.1**<br>
*------------------*<br>
Some bugs correction

**version 1.1.0** <br>
*------------------*<br>
.stop() data method added (with 2 related new plugin options);