function tz_error(msg){
    var init = $("#mini-content").length > 0 ? "#mini-content" : "section.main-content";
	$(init).prepend(
	"<div onclick=\"this.remove()\" class=\"ui-state-error ui-corner-all\" style=\"padding: 0 .7em;\">" +
	"	<p><span class=\"ui-icon ui-icon-alert\" style=\"float: left; margin-right: .3em;\"></span>" +
	"	<strong>Alert: </strong>" + msg + "</p>" +
	"</div>");
}

function tz_info(strong, msg){
	var init = $("#mini-content").length > 0 ? "#mini-content" : "section.main-content";
	$(init).prepend(
	"<div onclick=\"this.remove()\" class=\"ui-state-highlight ui-corner-all\" style=\"padding: 0 .7em;\">" + 
	"	<p><span class=\"ui-icon ui-icon-info\" style=\"float: left; margin-right: .3em;\"></span>" +
	"	<strong>" + strong + "</strong> " + msg + "</p>" +
	"</div>");
}

function tz_field_err(selector, errMsg, wrapper){
	$(selector).addClass("tz_err")
	$(wrapper == null ? selector : wrapper).after("<div style='color: red;'>" + errMsg + "</div>")
}

function tz_ajax_load(url, targetSelector, data){
  var initData = $(targetSelector).html();
  $.ajax({
      url: url,
      data: data,
      method: 'POST',
      beforeSend: function() { $(targetSelector).html("<img src='../images/ajax-loader.gif'>") },
      success: function(data) { $(targetSelector).html(data) },
      error: function() { $(targetSelector).html(initData) }
    });
} 

function showNotif(){
	var init = $(".main-content").html();
	$(".main-content").css("width", $(".content-wrapper").css("width"))
	$(".main-content").css("display", "table");
	$(".main-content").html("<div style='display: table-row;'><div style='display: table-cell; width: 75%; vertical-align: top;' id='mini-content'>" + init + "</div><div id='notif-pane' style='display: table-cell; width: 25%'></div></div>")

	tz_ajax_load('notif','#notif-pane')
}