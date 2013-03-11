/**
 * This function load the translation file. After adding the translation file getMessages will translate the strings. We prefer to create the subfolder lang on the js file. You can name the files as you wish, but its recommend to use IETF language tag (en-US for Englisch (United States).
 * <br/>
 * If you use multilanguage set up as default language english
 * @see getMessages()
 * @see en-US.js
 * @since 1.0
 * @example 
 * 
 *  $.getScript("./js/lang/de-DE.js", function()
	{
		getMessages();
	});
 */
function loadLanguage()
{
	if(window.navigator.language.substr(0,2) == "de")
		$.getScript("./js/lang/de-DE.js", function()
		{
			getMessages();
		});
	else
		$.getScript("./js/lang/en-US.js", function()
		{
			getMessages();
		});
}

/**
 * Translate static strings on the layout 
 */
function getMessages()
{
	$('#header').text(lang.header.title);
	$('#content1').text(lang.content1);
	$('#content2').text(lang.content2);
	$('#homepage').text(lang.homepage);
	$('#source').text(lang.source);
	$('#footer_button').text(lang.footer.content.button);
}

/**
 * Translate specific string
 * @param {String} s	String to be translate
 * @returns {String}
 */
function translate(s)
{
	return string;
}