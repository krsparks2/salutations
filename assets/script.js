

function showDuck()
{
    var queryURL = "https://random-d.uk/api/v2";
    fetch(queryURL);
}

$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });