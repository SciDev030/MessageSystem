# MessageSystem #
## A useful script to create multilanguage application for Tizen ##

### INSTALLATION ###

Copy message.js to your project js folder.

And add message.js to your other script files of your project on the index.html.

### USAGE ###

#### HTML ####

<pre><code><script type="text/javascript">document.write(GetMessage("IDS_EXAMPLE"));</script></code></pre>

#### JavaScript ####

<pre><code>$('#text').text(GetMessage("IDS_EXAMPLE");</code></pre>

### PLANNED FEATURES ####

* Support of more languages and delicts
* Support of JSON and XML lists

### LICENSE ####

[GPLv3][] / http://www.gnu.org
[GPLv3]: http://www.gnu.org/licenses/gpl.txt