$(document).ready(function() {
  $("#surveyresults").hide();
  if (localStorage.getItem("user") !== null) {
    var loggedUser = JSON.parse(window.localStorage.getItem("user"));
    var localData = {
      name: loggedUser.name,
      password: loggedUser.password
    };
    $.post("/api/passcheck", localData, function(data) {
      if (data === "No") {
        alert("No username/password combo found");
        $("#surveycontainer").hide();
      } else {
        $.post("/api/survcheck", localData, function(survdata) {
          if (survdata.Database !== null) {
            $("#name").val(survdata.Name);
            $("#linkedIn").val(survdata.LinkedIn);
            $("#gitHub").val(survdata.GitHub);
            $("#q1").val(survdata.Project);
            $("#q2").val(survdata.Stack);
            $("#q3").val(survdata.Language);
            $("#q4").val(survdata.Database);
            $("#q5").val(survdata.MVC);
            $("#q6").val(survdata.Motivation);
            $("#extrainfo").val(survdata.Misc);
          }
        });
      }
    });
  } else {
    $("#surveycontainer").hide();
    $("#surveyresults").hide();
    window.location = "/";
  }
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
    var loggedUser2 = JSON.parse(window.localStorage.getItem("user"));
    var userData = {
      username: loggedUser2.name,
      password: loggedUser2.password,
      name: $("#name").val(),
      linkedIn: $("#linkedIn").val(),
      gitHub: $("#gitHub").val(),
      q1: $("#q1").val(),
      q2: $("#q2").val(),
      q3: $("#q3").val(),
      q4: $("#q4").val(),
      q5: $("#q5").val(),
      q6: $("#q6").val(),
      misc: $("#extrainfo").val()
    };

    $.post("/api/devadd", userData, function() {
      window.location = "/results";
    });
  } else {
    alert("Please fill out all fields before submitting!");
  }
});
