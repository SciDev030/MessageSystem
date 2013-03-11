//Initialize function
var init = function ()
{	
	$('.ui-btn-back').bind("click", function(event)
	{
		var currentApp = tizen.application.getCurrentApplication();
		currentApp.exit();
	});
	
	loadLanguage();
};

$(document).bind('pageinit', init);