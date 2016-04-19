//Find the form

var bookingForm = document.querySelector("#booking");

//Get references to input fields

var firstName = document.querySelector("#first-name");
var firstNameMessage = document.querySelector("#first-name-message");
var lastName = document.querySelector("#last-name");
var lastNameMessage = document.querySelector("#last-name-message");
var gender = document.querySelector("[name=gender]");
var genderMessage = document.querySelector("#gender-message");
var address = document.querySelector("#address");
var addressMessage = document.querySelector("#address-message");
var email = document.querySelector("#email");
var emailMessage = document.querySelector("#email-message");
var phoneNumber = document.querySelector("#phone");
var phoneMessage = document.querySelector("#phone-message");
var tour = document.querySelector();
var checkIn = document.querySelector("#check-in");
var checkOut = document.querySelector("#check-out");

firstName.onblur = function() {
	if( this.value.length < 2) {
		firstNameMessage.innerHTML = "Your name must be at least two characters long";
	} else if ( this.value.length > 30) {
		firstNameMessage.innerHTML = "Your name can not be more than thirty characters long";
	}
}