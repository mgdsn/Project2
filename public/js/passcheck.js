$(document).ready(function() {
  $("#surveyLink").hide();
  if (localStorage.getItem("user") !== null) {
    var loggedUser = JSON.parse(window.localStorage.getItem("user"));
    var localData = {
      name: loggedUser.name,
      password: loggedUser.password
    };
    $.post("/api/passcheck", localData, function(data) {
      if (data === "No") {
        alert("No username/password combo found");
      } else {
        $("#loginButton").html("Welcome, " + loggedUser.name);
        $("#surveyLink").show();
      }
    });
  }
});

$("#loginSub").on("click", function(event) {
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
      name: $("#usernameAdd").val(),
      password: $("#check1").val()
    };
    $.post("/api/passcheck", userData, function(data) {
      if (data === "No") {
        alert("No username/password combo found");
      } else {
        window.localStorage.setItem("user", JSON.stringify(userData));
        $("#loginButton").html("Welcome, " + userData.name);
        $("#surveyLink").show();
      }
    });
  } else {
    alert("Please fill out all fields before submitting!");
  }
});
