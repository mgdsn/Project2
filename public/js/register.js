$("#add-user").on("click", function(event) {
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
      username: $("#name-input").val(),
      password: $("#password-input").val()
    };
    $.post("/api/checkexists", userData, function(resdat) {
      if (resdat === "Yes") {
        alert("Username unavailable.");
      } else {
        $.post("/api/createuser", userData, function() {
          alert("Account created. Please log in.");
          window.location = "/";
        });
      }
    });
  } else {
    alert("Please fill out all fields before submitting!");
  }
});
