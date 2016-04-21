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

// Check to see if first name is correct length and contains only valid characters and display message to user if the name is invalid

firstName.onblur = function() {
	if( this.value.length < 2) {
		firstNameMessage.innerHTML = "Your name must be at least two characters long";
	} else if ( this.value.length > 30) {
		firstNameMessage.innerHTML = "Your name can not be more than thirty characters long";
	} else if ( namePattern.test ( this.value ) ) {
		firstNameMessage.innerHTML = "";
	}
	else {
		firstNameMessage.innerHTML = "Your first name cannot contain invalid characters";
	}
}

// Check to see if last name is correct length and contains only valid characters and display message to user if the name is invalid


lastName.onblur = function() {
	if( this.value.length < 2) {
		lastNameMessage.innerHTML = "Your name must be at least two characters long";
	} else if ( this.value.length > 30) {
		lastNameMessage.innerHTML = "Your name can not be more than thirty characters long";
	} else if ( namePattern.test ( this.value ) ) {
		lastNameMessage.innerHTML = "";
	}
	else {
		lastNameMessage.innerHTML = "Your last name cannot contain invalid characters";
	}
}

// Check to see if the address is correct length and contains only valid characters and display message to user if the address is invalid

address.onblur = function() {
	if( this.value.length < 5) {
		addressMessage.innerHTML = "Your address must be at least five characters long";
	} else if ( this.value.length > 50) {
		addressMessage.innerHTML = "Your address can not be more than fifty characters long";
	} else if ( addressPattern.test ( this.value ) ) {
		addressMessage.innerHTML = "";
	}
	else {
		addressMessage.innerHTML = "Your address can only contain letters, numbers, spaces, dots and dashes";
	}
}

// Check to see if email address is formated correctly, is an appropriate length and contains only valid characters and then display message to user if the email address is invalid

email.onblur = function() {
	if( this.value.length < 5) {
		emailMessage.innerHTML = "Your email address must be at least five characters long";
	} else if ( this.value.length > 50) {
		emailMessage.innerHTML = "Your email address can not be more than fifty characters long";
	} else if ( emailPattern.test ( this.value ) ) {
		emailMessage.innerHTML = "";
	}
	else {
		emailMessage.innerHTML = "Invalid email address";
	}
}

// Check to see if phone number is an appropriate length and contains only valid characters then display a message to the user if phone number is invalid

phoneNumber.onblur = function() {
	if( this.value.length < 5) {
		phoneMessage.innerHTML = "Your phone number must be at least five characters long";
	} else if ( this.value.length > 50) {
		phoneMessage.innerHTML = "Your phone number must be less that fifty characters long";
	} else if ( phonePattern.test ( this.value ) ) {
		phoneMessage.innerHTML = "";
	}
	else {
		phoneMessage.innerHTML = "You phone number should only contain numbers, spaces and brackets";
	}

}

// Check to see that a tour has been selected and display a message if a tour has not been selected

tour.onchange = function() {

	if( this.value == "" ) {
		tourMessage.innerHTML = 'Please choose a tour';
	} else {
		tourMessage.innerHTML = '';
	}

}

bookingForm.onsubmit = function(event) {
	var totalErrors = 0;
	var allGenderOptions = document.querySelectorAll("[name=gender]")

var genderIsSelected = false;
//Loop over all the campus options
	for(var i=0; i<allGenderOptions.length; i++) {

  		//check if this campus has been selected
  		if( allGenderOptions[i].checked ) {
  			genderIsSelected = true;
 		}

  	}

 	// If camousIsSelected is still false
  	if( genderIsSelected == false ) {
 		genderMessage.innerHTML = "Please select a gender";
  		totalErrors++;
  		} else {
  		genderMessage.innerHTML = "";
  	}

  	if (tour.value == "") {
  		tourMessage.innerHTML = "You must select a tour";
  		totalErrors++;
  	} else {
  		tourMessage.innerHTML = "";
  	}

 	//If the total errors is greater than 0
 	if( totalErrors > 0) {
  		// Stop the form from submitting
 		event.preventDefault();
  	}
	

}