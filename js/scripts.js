// Biz logic
function Place(location, timeOfYear, advice) {
  this.location = location;
  this.timeOfYear = timeOfYear;
  this.advice = advice;
}

//ui logic

$(document).ready(function() {
  $("form#new-input").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#place").val();
    var inputtedTime = $("input#time").val();
    var inputtedAdvice = $("input#advice").val();

    var newPlace = new Place(inputtedLocation, inputtedTime, inputtedAdvice);
    $("#hidden_list").show();
    $("#places").show();
    $("ul#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");

    $(".place").last().click(function() {
      $("#hidden").show();
      $(".time").text(newPlace.timeOfYear);
      $(".advice").text(newPlace.advice);
    });

  });
});













// var destinationOne = new Destination("London", "summer", "go sightseeing");
// var destinationTwo = new Destination("Iceland", "spring", "go on a road trip around the country");
// var destinationThree = new Destination("Chile", "winter", "drink wine");
//
// // ui logic
// $(document).ready(function() {
//
//   $("ul#destinations h3").append("<li><span class='info1'>" + destinationOne.location + "</span></li>");
//   $("ul#destinations h3").append("<li><span class='info2'>" + destinationTwo.location + "</span></li>");
//   $("ul#destinations h3").append("<li><span class='info3'>" + destinationThree.location + "</span></li>");
//
//   $(".info1").click(function(event) {
//     event.preventDefault();
//     $("#places_info").toggle();
//     $(".location").text(destinationOne.location);
//     $(".time_of_year").text(destinationOne.timeOfYear);
//     $(".notes").text(destinationOne.notes);
//   });
//
//   $(".info2").click(function(event) {
//     event.preventDefault();
//     $("#places_info").toggle();
//     $(".location").text(destinationTwo.location);
//     $(".time_of_year").text(destinationTwo.timeOfYear);
//     $(".notes").text(destinationTwo.notes);
//   });
//
//   $(".info3").click(function(event) {
//     event.preventDefault();
//     $("#places_info").toggle();
//     $(".location").text(destinationThree.location);
//     $(".time_of_year").text(destinationThree.timeOfYear);
//     $(".notes").text(destinationThree.notes);
//   });
//
// });
