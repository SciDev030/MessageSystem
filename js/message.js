/**
 * This function handle return the translation of the giving msgId. 
 * @param {String} msgId | String to be translate
 * @returns {String}
 * @example
 * en
 * $('#text').text(GetMessage("IDS_SINGLEPAGE"));
 * <p id="text">Single-Page Application</p>
 * --------<br/>
 * de
 * <p id="text">Einzelseiten Anwendung</p>
 * 
 */
function GetMessage(msgId)
{
	switch(window.navigator.language.substr(0,2))
	{
		
		case "en":
			switch(msgId)
			{
				case "IDS_SINGLEPAGE":										return "Single-Page Application";
				case "IDS_CONTENT":											return "This is a single page boilerplate template.";
				case "IDS_FOOTERCONTENT":									return "Footer content";
				default:													return msgId;
			}
		
		case "de":
			switch(msgId)
			{
				case "IDS_SINGLEPAGE":										return "Einzelseiten Anwendung";
				case "IDS_CONTENT":											return "Das ist eine Einzelseiten Entwurf.";
				case "IDS_FOOTERCONTENT":									return "Footer Inhalt";
				default:													return msgId;					
			}
	}
}