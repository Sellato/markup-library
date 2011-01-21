$(document).ready(function() {
	
	// Optional JS for IE6
	if ($.browser.msie && $.browser.version.substr(0,1)<7) {
		// Adds buttonHover class on buttons when hovering over them, removes when hover out
		$('button, .inputSubmit, .inputButton, .button').hover(function() {
			$(this).addClass('buttonHover');
		}, function() {
			$(this).removeClass('buttonHover');
		});

		// Adds a disabled class to disabled text fields for styling
		$('input[type="text"]:disabled, input[type="password"]:disabled, textarea:disabled').each(function(index) {
			$(this).addClass('disabledField');
		});
	};

});