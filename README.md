jqueryIntroLoader (version 1.3.9)
===================================

a jQuery plugin for generate animated Intro Loading Pages.

This plugin help jquery beginners to add some cool animated intro page on a website.<br>
This plugin is very easy to install and use.

[Home](http://factory.brainleaf.eu/jqueryIntroLoader) | 
[Documentation](http://factory.brainleaf.eu/jqueryIntroLoader/documentation.php) | [Demo](http://factory.brainleaf.eu/jqueryIntroLoader/demo)


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
You can find an exaustive documentation on plugin home page<br> [http://factory.brainleaf.eu/jqueryIntroLoader/documentation.php](http://factory.brainleaf.eu/jqueryIntroLoader/documentation.php)

###{less} Stylesheet
From *version 1.3.2*  **introLoaderLess.less** file was added to the project.<br>
This file allow you to modify easly and quickly the animations' styles and colors.<br>
Even though the css plugin is simple, use Less for the compilation of the CSS makes work easier.

###Available Animations and Styles
At now we provide 3 kind of animations and 7 color styles<br>
**Animations**: *simpleLoader* - *doubleLoader* - *lettersLoader*<br>
**Styles**: *light (default style)* - *dark* - *ocean* - *forest* - *fluoGreen* - *fluoMagenta* - *fluoYellow*

**Warning**: *lettersLoader* animation is at beta version, but you can use it. I'm working to refine it.

###Sofware incuded
This plugin use some tird party software to do something during animations.<br>
[SpinJs](fgnass.github.io/spin.js/) and [jQueryEasing](http://gsgd.co.uk/sandbox/jquery/easing/)

###ChangeLogs
**version 1.3.9**<br>
*------------------*<br>
.destroy() method added. 

**version 1.3.8**<br>
*------------------*<br>
Body class assignment bug fixed.

**version 1.3.7**<br>
*------------------*<br>
Some Javascript changes.

**version 1.3.6**<br>
*------------------*<br>
"preventScroll" bug on iOS solved.

**version 1.3.5**<br>
*------------------*<br>
New "preventScroll" option added to animation options group<br>
See [documentation](http://factory.brainleaf.eu/jqueryIntroLoader/documentation.php#prevent-scroll).

**version 1.3.3**<br>
*------------------*<br>
Some CSS bugs solved

**version 1.3.2**<br>
*------------------*<br>
New styles (*"ocean"* and *"forest"*) added for all animations<br> 
New substyles "zebra" added for "doubleLoader" animation only.<br>
LESS file added to the project<br>
Some Javascript changes

**version 1.3.0**<br>
*------------------*<br>
New animation *"lettersLoader"* added.

**version 1.2.0**<br>
*------------------*<br>
New animation *"doubleLoader"* added.

**version 1.1.3**<br>
*------------------*<br>
White colored background added to the loader<br>
(prevent site visibility before plugin style assignment).

**version 1.1.2**<br>
*------------------*<br>
CSS classes name changed<br>
Spinner ID changed<br>
Stylesheet cleaned

**version 1.1.1**<br>
*------------------*<br>
Some bugs correction

**version 1.1.0** <br>
*------------------*<br>
.stop() data method added (with 2 related new plugin options);
