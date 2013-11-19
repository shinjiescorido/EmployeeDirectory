function tz_error(msg){
	$("section.main-content").prepend(
	"<div onclick=\"this.remove()\" class=\"ui-state-error ui-corner-all\" style=\"padding: 0 .7em;\">" +
	"	<p><span class=\"ui-icon ui-icon-alert\" style=\"float: left; margin-right: .3em;\"></span>" +
	"	<strong>Alert: </strong>" + msg + "</p>" +
	"</div>");
}

function tz_info(strong, msg){
	$("section.main-content").prepend(
	"<div onclick=\"this.remove()\" class=\"ui-state-highlight ui-corner-all\" style=\"padding: 0 .7em;\">" + 
	"	<p><span class=\"ui-icon ui-icon-info\" style=\"float: left; margin-right: .3em;\"></span>" +
	"	<strong>" + strong + "</strong> " + msg + "</p>" +
	"</div>");
}