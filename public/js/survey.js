$(document).ready(function() {
  $("#surveyresults").hide();
});

$("#submit").on("click", function(event) {
  event.preventDefault();
  function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }

  if (validateForm()) {
    var userData = {
      name: $("#name").val(),
      linkedIn: $("#linkedIn").val(),
      gitHub: $("#gitHub").val(),
      q1: $("#q1").val(),
      q2: $("#q2").val(),
      q3: $("#q3").val(),
      q4: $("#q4").val(),
      q5: $("#q5").val(),
      q6: $("#q6").val(),
      misc: $("#extrainfo").val(),
    };

    $.post("/api/devadd", userData, function(data) {
      $("#surveycontainer").hide();
      $("#surveyresults").show();
      $("#match-name").text(data.name);
     
    });
  } else {
    alert("Please fill out all fields before submitting!");
  }
});
