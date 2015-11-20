jqueryIntroLoader (version 1.7.1)
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

##Last Animation Updates
- **New "cssLoader" Animation** added from **version 1.7.0**
- **New "gifLoader" Animation** added from **version 1.6.0**
- **New "counterLoader" Animation** added from **version 1.5.0**
- From version 1.4.5 on *"lettersLoader" animation* you can use all exit effects (same allowed by "simpleLoader" animation).<br>

## Install using Bower
From **version 1.5.0** you can install and add *jqueryIntroLoader* using  **[Bower](http://bower.io/)**
```
$ bower install introloader --save
```


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
At now we provide 6 kind of animations and 7 color styles<br>
**Animations**: *simpleLoader* - *cssLoader* - *gifLoader* - *doubleLoader* - *lettersLoader* - *counterLoader*<br>
**Styles**: *light (default style)* - *dark* - *ocean* - *forest* - *fluoGreen* - *fluoMagenta* - *fluoYellow*

**Warning**: *lettersLoader* is an experimental animation. I'm working to refine it.

###Sofware incuded
This plugin use some tird party software to do something during animations.<br>
[SpinJs](fgnass.github.io/spin.js/) and [jQueryEasing](http://gsgd.co.uk/sandbox/jquery/easing/)

###Last Updates
**version 1.7.1**<br>
*------------------*<br>
- css bug fixed on cssLoader animation

**version 1.7.0**<br>
*------------------*<br>
- **cssLoader** animation added

**version 1.6.2**<br>
*------------------*<br>
- Some little changes on demo files

**version 1.6.1**<br>
*------------------*<br>
- Helper plugin **"SpinJs"** updated to version **2.1.0**

**version 1.6.0**<br>
*------------------*<br>
- **New "gifLoader" Animation** added


[Complete Plugin Hystory](https://github.com/Gix075/jqueryIntroLoader/wiki).
