$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStreet = $("input#new-street").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var inputtedZip = $("input#new-zip").val();
    var inputtedAddress =  { street: inputtedStreet, city: inputtedCity, state: inputtedState, zip: inputtedZip };
    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, address: (inputtedAddress.street + ", " + inputtedAddress.city + ", " + inputtedAddress.state + " " + inputtedAddress.zip) };

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $(".contact").last().click(function() {
  $("#show-contact").toggle();
  $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName + " ");
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
  $(".address").text(newContact.address);
});
  });
});
