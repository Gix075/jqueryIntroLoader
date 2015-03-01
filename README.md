jqueryIntroLoader (version 1.5.0)
===================================

a jQuery plugin for generate animated Intro Loading Pages.

This plugin help jquery beginners to add some cool animated intro page on a website.<br>
This plugin is very easy to install and use.

[Home](http://factory.brainleaf.eu/jqueryIntroLoader) | 
[Documentation](http://factory.brainleaf.eu/jqueryIntroLoader/documentation.php) | [Demo](http://factory.brainleaf.eu/jqueryIntroLoader/demo)

##Last Animation Updates
- **New "counterLoader" Animation** added from **version 1.5.0**
- From version 1.4.5 on *"lettersLoader" animation* you can use all exit effects (same allowed by "simpleLoader" animation).<br>


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

###Warning!
From version 1.4.0 some option names are changed.<br>
On official documentation page you can find a table with all changes.

###Documentation
You can find an exaustive documentation on plugin home page<br> [http://factory.brainleaf.eu/jqueryIntroLoader/documentation.php](http://factory.brainleaf.eu/jqueryIntroLoader/documentation.php)

###{less} Stylesheet
From *version 1.3.2*  **introLoaderLess.less** file was added to the project.<br>
This file allow you to modify easly and quickly the animations' styles and colors.<br>
Even though the css plugin is simple, use Less for the compilation of the CSS makes work easier.

###Available Animations and Styles
At now we provide 3 kind of animations and 7 color styles<br>
**Animations**: *simpleLoader* - *doubleLoader* - *lettersLoader* - *counterLoader*<br>
**Styles**: *light (default style)* - *dark* - *ocean* - *forest* - *fluoGreen* - *fluoMagenta* - *fluoYellow*

**Warning**: *lettersLoader* is an experimental animation. I'm working to refine it.

###Sofware incuded
This plugin use some tird party software to do something during animations.<br>
[SpinJs](fgnass.github.io/spin.js/) and [jQueryEasing](http://gsgd.co.uk/sandbox/jquery/easing/)

###Last Updates
**version 1.5.0**<br>
*------------------*<br>
- New **"counterLoader"** animation added;<br>
- Default exit effect optimized to prevent user errors during typing;
- "delayAfter" default value changed to 0;
- CSS properties changed for "preventScroll" option<br>
*(before this fix body element had no css margin property setted on 0 value in prevent scroll mode)*

**version 1.4.5**<br>
*------------------*<br>
Exit effects added on "letterLoader" animation.

**version 1.4.4**<br>
*------------------*<br>
Some javascript changes

**version 1.4.3**<br>
*------------------*<br>
onAfter function bug fixed on "lettersLoader" animation.<br>

**version 1.4.2**<br>
*------------------*<br>
Some javascript bugs fixed.<br>

**version 1.4.1**<br>
*------------------*<br>
z-index css property setted on value 9999.<br>

**version 1.4.0**<br>
*------------------*<br>
Some option names was changed. <br>
Read documentation to learn more about this changes.<br>
[documentation](http://factory.brainleaf.eu/jqueryIntroLoader/documentation.php).

**version 1.3.9**<br>
*------------------*<br>
.destroy() method added. 


[Complete Plugin Hystory](https://github.com/Gix075/jqueryIntroLoader/wiki).
