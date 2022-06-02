// $(document).ready(() => {
//   $("button").click(() => {
//     $("p").hide();
//     $("#myHeading").css("color", "red");
//   });
// });

// $("button").dblclick(() => {
//   $("p").show();
//   $("#myHeading").css("color", "green");
// });

$(document).ready(function () {
  //when click on button, alert the html content of id="test"
  $("button").click(function () {
    alert("Old HTML: " + $("#test").text());
  });
  //when click on button, change the content of id="test" to html.
  $("button").click(function () {
    $("#test").html("<b>Hello world!</b>");
  });
});
