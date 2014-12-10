/*
 *  jQueryIntroLoader - v1.0.0
 *  simple intro loader animations
 *  http://factory.brainleaf.eu/jqueryIntroLoader
 *
 *  Made by BRAINLEAF Communication
 *  Under GNU/GPL License
 */

;(function ( $, window, document, undefined ) {

		
		var pluginName = "introLoader",
				defaults = {
                    
                animation: {
                    name: 'simpleLoader',
                    options: {
                        effect:'fadeOut',
                        ease: "linear",
                        style: 'light',
                        delayTime: 500, //delay time in milliseconds
                        animationTime: 300,
                        onAfter: function(){},
                        onBefore: function(){}
                    }
                },    
                    
                spinJs: {
                    /*
                        Example of allowe options
                        ----------------------------------------------------------------
                        lines: 13, // The number of lines to draw
                        length: 20, // The length of each line
                        width: 10, // The line thickness
                        radius: 30, // The radius of the inner circle
                        corners: 1, // Corner roundness (0..1)
                        rotate: 0, // The rotation offset
                        direction: 1, // 1: clockwise, -1: counterclockwise
                        color: '#000', // #rgb or #rrggbb or array of colors
                        speed: 1, // Rounds per second
                        trail: 60, // Afterglow percentage
                        shadow: false, // Whether to render a shadow
                        hwaccel: false, // Whether to use hardware acceleration
                        className: 'spinner', // The CSS class to assign to the spinner
                        zIndex: 2e9, // The z-index (defaults to 2000000000)
                        top: '50%', // Top position relative to parent
                        left: '50%' // Left position relative to parent
                    */
                    
                }
                    
                    
		};

		// The actual plugin constructor
		function Plugin ( element, options ) {
				this.element = element;
				this.settings = $.extend( true, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend(Plugin.prototype, {
				init: function () {
						
						console.log("jqueryIntroLoading --> start");
                    
                        // Global Values
                        var thisPlugin = this;
                        var domElement = this.element;
                        
                        // spinJS Options
                        var spinOpt = {
                            lines: this.settings.spinJs.lines, // The number of lines to draw
                            length: this.settings.spinJs.length, // The length of each line
                            width: this.settings.spinJs.width, // The line thickness
                            radius: this.settings.spinJs.radius, // The radius of the inner circle
                            corners: this.settings.spinJs.corners, // Corner roundness (0..1)
                            rotate: this.settings.spinJs.rotate,// The rotation offset
                            direction: this.settings.spinJs.direction,// 1: clockwise, -1: counterclockwise
                            color: this.settings.spinJs.color, // #rgb or #rrggbb or array of colors
                            speed: this.settings.spinJs.speed, // Rounds per second
                            trail: this.settings.spinJs.trail, // Afterglow percentage
                            shadow: this.settings.spinJs.shadow, // Whether to render a shadow
                            hwaccel: this.settings.spinJs.hwaccel, // Whether to use hardware acceleration
                            className: this.settings.spinJs.className, // The CSS class to assign to the spinner
                            zIndex: this.settings.spinJs.zIndex, // The z-index (defaults to 2000000000)
                            top: this.settings.spinJs.top, // Top position relative to parent
                            left: this.settings.spinJs.left // Left position relative to parent
                        }
                        
                        // animation options object
                        var animOpt = this.settings.animation.options;
                        
                        switch(this.settings.animation.name) {
                            case "simpleLoader":
                                this.simpleLoaderAnimation(domElement,spinOpt,animOpt);
                                break;
                            default:
                                this.simpleLoaderAnimation(domElement,spinOpt,animOpt);
                                break;
                        }
                        
                    
				},
				simpleLoaderAnimation: function (domElement,spinOpt,animOpt) {
                    
                    // onBefore function 
                    animOpt.onBefore();
                                        
                    var styleClass = 'theme-'+ animOpt.style;
                    $(domElement).addClass('BL-introLoading simpleLoader ' + styleClass);
                    
                    
                    var markup  = '';
                        markup += '<div id="BLintroLoadingSpinner" class="BL-introLoadingInner">';
                        markup += '</div>';
                    
                    $(domElement).html(markup);
                    
                    var target = document.getElementById('BLintroLoadingSpinner');
                    var spinner = new Spinner(spinOpt).spin(target);
                    
                    $(window).on('load', function() {
                                                
                        setTimeout(function() {
                            
                            switch(animOpt.effect) {
                                case "fadeOut":
                                    $(domElement).fadeOut(
                                        animOpt.animationTime, 
                                        animOpt.ease,
                                        animOpt.onAfter() // onAfter function
                                    );
                                    break;
                                    
                                case "slideUp":
                                    spinner.stop();
                                    $(domElement).animate(
                                        {"bottom":$(window).height()},
                                        animOpt.animationTime, 
                                        animOpt.ease,
                                        function () {
                                            $(domElement).hide();
                                            animOpt.onAfter(); // onAfter function
                                        }
                                    );
                                    break;
                                    
                                case "slideDown":
                                    spinner.stop();
                                    $(domElement).animate(
                                        {"top":$(window).height()},
                                        animOpt.animationTime, 
                                        animOpt.ease,
                                        function () {
                                            $(domElement).hide();
                                            animOpt.onAfter(); // onAfter function
                                        }
                                    );
                                    break;
                                    
                                case "slideLeft":
                                    spinner.stop();
                                    $(domElement).animate(
                                        {"right":$(window).width(),"left":"-100%"},
                                        animOpt.animationTime, 
                                        animOpt.ease,
                                        function () {
                                            $(domElement).hide();
                                            animOpt.onAfter(); // onAfter function
                                        }
                                    );
                                    break; 
                                case "slideRight":
                                    spinner.stop();
                                    $(domElement).animate(
                                        {"left":$(window).width(),"right":"-100%"},
                                        animOpt.animationTime, 
                                        animOpt.ease,
                                        function () {
                                            $(domElement).hide();
                                            animOpt.onAfter(); // onAfter function
                                        }
                                    );
                                    break;    
                                default:
                                    $(domElement).hide();
                                    break;
                            }
                            
                        }, animOpt.delayTime);
                        
                    });
				}
		});

		$.fn[ pluginName ] = function ( options ) {
				this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});

				// chain jQuery functions
				return this;
		};

})( jQuery, window, document );
