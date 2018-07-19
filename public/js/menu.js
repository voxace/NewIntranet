var pathArray = window.location.pathname.split('/');

switch(pathArray[1]) {
  case "wifi":
    $("#wifi" ).trigger("click");
    break;
  case "byod":
    $("#byod-info" ).trigger("click");
    break;
  case "subject":
    $("#subject-info" ).trigger("click");
    switch(pathArray[2]) {
      case "stage4":
        $("#subject-info-stg4" ).trigger("click");
        break;
      case "stage5":
        $("#subject-info-stg5" ).trigger("click");
        break;
      case "stage6":
        $("#subject-info-stg6" ).trigger("click");
        break;
    }
    break;
  case "assessment":
    $("#assessment-schedules" ).trigger("click");
    break;
  case "pbl":
    $("#rewards-system" ).trigger("click");
    break;
  default:
    $('#home').next().css("background", "rgba(0,0,0,0.1)");
}

var page = window.location.pathname;
if(page != "/") {
  $('a[href*="' + page + '"]').parent().css("background", "rgba(0,0,0,0.1)" );
}
