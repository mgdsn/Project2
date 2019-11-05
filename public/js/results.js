$(document).ready(function() {
  var loggedUser = JSON.parse(window.localStorage.getItem("user"));
  var localData = {
    name: loggedUser.name,
    password: loggedUser.password
  };
  $.post("/api/calcmatch", localData, function(data) {
    $("#surveyresults").append(
      "<tr><th>Name</th><th>LinkedIn</th><th>GitHub</th><th>Project</th><th>Stack</th><th>Language</th><th>Database</th><th>MVC</th><th>Motivation</th><th>Extra Info</th></tr>"
    );

    for (i = 0; i < data.length; i++) {
      if (data[i].Username === loggedUser.name) {
        continue;
      }
      $("#surveyresults").append(
        "<tr class='devResults'><td>" +
          data[i].Name +
          "</td><td>" +
          "<a href='" +
          data[i].LinkedIn +
          "'>" +
          data[i].LinkedIn +
          "</a>" +
          "</td><td>" +
          "<a href='" +
          data[i].GitHub +
          "'>" +
          data[i].GitHub +
          "</a>" +
          "</td><td>" +
          data[i].Project +
          "</td><td>" +
          data[i].Stack +
          "</td><td>" +
          data[i].Language +
          "</td><td>" +
          data[i].Database +
          "</td><td>" +
          data[i].MVC +
          "</td><td>" +
          data[i].Motivation +
          "</td><td>" +
          data[i].Misc +
          "</td></tr>"
      );
    }
  });
});
