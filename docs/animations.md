jQueryIntroLoader provides some different kind of animations. Each animation uses both of commons and specific options.


##ANIMATION OPTIONS DESCRIPTION
On table below you can see options description

Options | Type | Description | Default Value
------------ | ------------- | ------------- | -------------
**name** | [STRING] | *the animation name* | "simpleLoader"
**ease** | [STRING] | *the ease name (if you use "linear" no easing will be used)* | "linear"
**style** | [STRING] | *the css style name* | "light"
**exitFx** | [STRING]| *the animation used when plugin exit hiding its loader html element and show your site page* | "fadeOut"
**exitTime** | [INT] | *the time of exit animation* | 500
**delayBefore** | [INT] | *the delay time after window load and before the animation start* | 500
**delayAfter** | [INT] | *the delay time after animation* | 500
**preventScroll** | [BOOL]| *block window scroll during animation* | false
**stop** | [BOOL]| *plugin auto stop* | true
**fixed** | [BOOL]| *add css position "fixed" to the loader* | true
**onBefore** | [FUNC]| *function executed before plugin animation* | none
**onAfter** | [FUNC]| *function executed after plugin animation* | none

###Globals
The following option are allowed for all animation

Options | Type | Accepted Values
------------ | ------------- | ------------- 
**preventScroll** | [BOOL] | true/false
**stop** | [BOOL] | true/false
**fixed** | [BOOL] | true/false
**onBefore** | [FUNC]| any functions
**onAfter** | [FUNC]| any functions


***

##"simpleLoader" Animation
All valid options for "simpleLoader" animation

Options | Type | Accepted Values
------------ | ------------- | ------------- 
**ease** | [STRING] | any valid ease name
**style** | [STRING] | "light", "dark", "ocean", "forest", "fluoGreen", "fluoMagenta", "fluoYellow"
**exitFx** | [STRING]| "fadeOut", "slideUp", "slideDown", "slideLeft", "slideRight"
**exitTime** | [INT] | any number
**delayBefore** | [INT] | any number
**delayAfter** | [INT] | *not supported in this animation*

**SPINJS Supported!**

***

##"cssLoader" Animation
All valid options for "cssLoader" animation

Options | Type | Accepted Values
------------ | ------------- | ------------- 
**ease** | [STRING] | any valid ease name
**style** | [STRING] | "light", "dark", "ocean", "forest", "fluoGreen", "fluoMagenta", "fluoYellow"<br>You can use also some optional classes for circle sizes: **medium, large, half-circle**
**exitFx** | [STRING]| "fadeOut", "slideUp", "slideDown", "slideLeft", "slideRight"
**exitTime** | [INT] | any number
**delayBefore** | [INT] | any number
**delayAfter** | [INT] | *not supported in this animation*

**SPINJS Not supported for this animation!**

***

##"doubleLoader" Animation
All valid options for "doubleLoader" animation

Options | Type | Accepted Values
------------ | ------------- | ------------- 
**ease** | [STRING] | any valid ease name
**style** | [STRING] | "light", "dark", "ocean", "forest", "fluoGreen", "fluoMagenta", "fluoYellow","light zebra", "dark zebra", "ocean zebra", "forest zebra", "fluoGreen zebra", "fluoMagenta zebra", "fluoYellow zebra"
**exitFx** | [STRING]| *not supported in this animation*
**exitTime** | [INT] | any number
**delayBefore** | [INT] | any number
**delayAfter** | [INT] | *not supported in this animation*
**progbarTime** | [INT] | any number
**progbarDelayAfter** | [INT] | any number

**SPINJS Not supported for this animation!**

***

##"lettersLoader" Animation
All valid options for "lettersLoader" animation

Options | Type | Accepted Values
------------ | ------------- | ------------- 
**ease** | [STRING] | any valid ease name
**style** | [STRING] | "light", "dark", "ocean", "forest", "fluoGreen", "fluoMagenta", "fluoYellow"
**exitFx** | [STRING]| "fadeOut", "slideUp", "slideDown", "slideLeft", "slideRight"
**exitTime** | [INT] | any number
**animationTime** | [INT] | any number
**delayBefore** | [INT] | any number
**delayAfter** | [INT] | any number
**loaderText** | [STRING] | any string
**lettersDelayTime** | [INT] | any number

**SPINJS Supported!**

***

##"counterLoader" Animation
All valid options for "counterLoader" animation

Options | Type | Accepted Values
------------ | ------------- | ------------- 
**ease** | [STRING] | any valid ease name
**style** | [STRING] | "light", "dark", "ocean", "forest", "fluoGreen", "fluoMagenta", "fluoYellow"
**exitFx** | [STRING]| "fadeOut", "slideUp", "slideDown", "slideLeft", "slideRight"
**exitTime** | [INT] | any number
**delayBefore** | [INT] | any number
**delayAfter** | [INT] | *not supported in this animation*
**animationTime** | [INT] | any number

**SPINJS Not Supported!**