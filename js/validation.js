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
var tour = document.querySelector("#tour");
var tourMessage = document.querySelector("#tour-message");
var checkIn = document.querySelector("#check-in");
var checkOut = document.querySelector("#check-out");

firstName.onblur = function() {
	if( this.value.length < 2) {
		firstNameMessage.innerHTML = "Your name must be at least two characters long";
	} else if ( this.value.length > 30) {
		firstNameMessage.innerHTML = "Your name can not be more than thirty characters long";
	} else if ( namePattern.test ( this.value ) ) {
		firstNameMessage.innerHTML = "";
	}
	 else {
		firstNameMessage.innerHTML = "Invalid first name";
	}
}

lastName.onblur = function() {
	if( this.value.length < 2) {
		lastNameMessage.innerHTML = "Your name must be at least two characters long";
	} else if ( this.value.length > 30) {
		lastNameMessage.innerHTML = "Your name can not be more than thirty characters long";
	} else if ( namePattern.test ( this.value ) ) {
		lastNameMessage.innerHTML = "";
	}
	 else {
		lastNameMessage.innerHTML = "Invalid last name";
	}
}

address.onblur = function() {
	if( this.value.length < 5) {
		addressMessage.innerHTML = "Your address must be at least five characters long";
	} else if ( this.value.length > 50) {
		addressMessage.innerHTML = "Your address can not be more than fifty characters long";
	} else if ( addressPattern.test ( this.value ) ) {
		addressMessage.innerHTML = "";
	}
	 else {
		addressMessage.innerHTML = "Invalid address";
	}
}

email.onblur = function() {
	if( this.value.length < 5) {
		addressMessage.innerHTML = "Your email address must be at least five characters long";
	} else if ( this.value.length > 50) {
		addressMessage.innerHTML = "Your email address can not be more than fifty characters long";
	} else if ( emailPattern.test ( this.value ) ) {
		addressMessage.innerHTML = "";
	}
	 else {
		addressMessage.innerHTML = "Invalid email address";
	}
}

tour.onchange = function() {

	if( this.value == "" ) {
		tourMessage.innerHTML = 'Please choose a tour';
	} else {
		tourMessage.innerHTML = '';
	}

}