//Initialize function
var init = function () {
	$('.ui-btn-back').bind("click", function(event)
	{
		var currentApp = tizen.application.getCurrentApplication();
		currentApp.exit();
	});
	
	// adds message to the content paragraph
	$('#text').text(GetMessage("IDS_CONTENT"));
};

$(document).bind('pageinit', init);