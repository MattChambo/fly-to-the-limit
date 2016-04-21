//Regular expressions for validation.js

var namePattern = new RegExp("^[a-zA-Z.'-]{2,30}$");
var addressPattern = new RegExp("^[a-zA-Z0-9 .-]{5,50}$");
var emailPattern = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
var phonePatter = new RegExp("^[0-9 ()+]{5,50}$");