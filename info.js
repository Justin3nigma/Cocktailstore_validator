function formValidation() {
    removeError();
    var result = F_name_validator();
    result = S_name_validator() && result;
    result = U_name_validator() && result;
    result = password_validator() && result;
    result = password_doublecheck() && result;
    result = edustatus_check() && result;
    result = check_degree() && result;
    result = Age_validator() && result;

    if (result) {
        alert("Success");
    }
    return result;
}

function F_name_validator() {
    var errors = document.querySelector("#f_nameError");
    var Alphabet = true;
    var cap = true;
    var element_ = document.getElementById("f_name");
    var value = element_.value.trim();
    document.querySelector("#f_nameError").innerHTML = "";
    if (value.length == 0) {
        errors.innerHTML += "<span>First name input required</span>";
        element_.focus();
        return false;
    }
    if (value.charAt(0) < "A" || value.charAt(0) > "Z") {
        cap = false;
    }
    value = value.toUpperCase();
    for (var i = 0; i < value.length; i++) {
        // check all character are letters
        if (value.charAt(i) < "A" || value.charAt(i) > "Z") { Alphabet = false; }
    }  // for
    if (!Alphabet) {
        errors.innerHTML += "<span>Alphabets only</span>";
        element_.focus();
        return false;
    }
    else if (!cap) {
        errors.innerHTML += "<span>Should begin with the capital</span>";
        element_.focus();
        return false;
    }
    return true;
}

function S_name_validator() {
    var errors = document.querySelector("#S_nameError");
    var Alphabet = true;
    var cap = true;
    var element_ = document.getElementById("s_name");
    var value = element_.value.trim();
    document.querySelector("#S_nameError").innerHTML = "";
    if (value.length == 0) {
        errors.innerHTML += "<span>Second name input required</span>";
        element_.focus();
        return false;
    }
    if (value.charAt(0) < "A" || value.charAt(0) > "Z") {
        cap = false;
    }
    value = value.toUpperCase();
    for (var i = 0; i < value.length; i++) {

        if (value.charAt(i) < "A" || value.charAt(i) > "Z") { Alphabet = false; }
    }
    if (!Alphabet) {
        errors.innerHTML += "<span>Alphabets only</span>";
        element_.focus();
        return false;
    }
    else if (!cap) {
        errors.innerHTML += "<span>Should begin with the capital</span>";
        element_.focus();
        return false;
    }
    return true;
}

function U_name_validator() {
    var errors = document.querySelector("#u_nameErr");
    var element_ = document.getElementById("u_name");
    var value = element_.value.trim();
    document.querySelector("#u_nameErr").innerHTML = "";
    if (value.length == 0) {
        errors.innerHTML += "<span>Username input required</span>";
        element_.focus();
        return false;
    }
    else if (value.length < 6) {
        errors.innerHTML += "<span>Minimum 6 character required</span>";
        element_.focus();
        return false;
    }
    value = value.toUpperCase();
    if (value.charAt(0) < "A" || value.charAt(0) > "Z") {
        errors.innerHTML += "<span>Should begin with the Alphabet</span>";
        element_.focus();
        return false;
    }
    return true;
}

var getValue;
function password_validator() {
    var errors = document.querySelector("#pass_wordError");
    var element_ = document.getElementById("pass_word");
    var value = element_.value.trim();
    var alphabet_Check = false;
    var Digit_Check = false;
    var Alphabet_str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num_str = "1234567890";
    document.querySelector("#pass_wordError").innerHTML = "";

    if (value.length == 0) {
        errors.innerHTML = "<span>Password input required</span>";
        element_.focus();
        return false;
    }
    else if (value.length != 6) {
        errors.innerHTML = "<span>6 characters required</span>";
        element_.focus();
        return false;
    }
    var firstLetter = value.toUpperCase();
    if (firstLetter.charAt(0) < "A" || firstLetter.charAt(0) > "Z") {
        errors.innerHTML += "<span>Should begin with the Alphabet</span>";
        element_.focus();
        return false;
    }
    for (var i = 0; i < value.length; i++) {
        if (Alphabet_str.indexOf(value.substr(i, 1)) >= 0) {
            alphabet_Check = true;
        }
    }
    if (!alphabet_Check) {
        errors.innerHTML += "<span>Minimum 1 capital letter required</span>"
        element_.focus();
        return false;
    }
    for (var i = 0; i < value.length; i++) {
        if (num_str.indexOf(value.substr(i, 1)) >= 0) {
            Digit_Check = true;
        }
    }
    if (!Digit_Check) {
        errors.innerHTML += "<span>Minimum 1 digit required</span>"
        element_.focus();
        return false;
    }
    getValue = value;
    return true;
}

function password_doublecheck() {
    var errors = document.querySelector("#C_pass_wordError");
    var element_ = document.getElementById("c_password");
    var value = element_.value.trim();
    document.querySelector("#C_pass_wordError").innerHTML = "";
    if (value.length == 0) {
        errors.innerHTML = "<span>Password input required</span>";
        element_.focus();
        return false;
    }
    if (value != getValue) {
        errors.innerHTML = "<span>Password does not match</span>";
        element_.focus();
        return false;
    }
    return true;
}

function edustatus_check() {
    var errors = document.querySelector("#edu_statusError");
    var radio_num = document.signup.edustat.length;
    var onechecked = false;
    document.querySelector("#edu_statusError");
    for (var i = 0; i < radio_num; i++) {
        if (document.signup.edustat[i].checked == true) {
            onechecked = true;
        }
    }

    if (!onechecked) {
        errors.innerHTML = "<span>Check required</span>";
        return false;
    }

    return true;
}

function check_degree() {
    var errors = document.querySelector("#degreeError");
    var optionLength = document.signup.edu.options.length;
    var seleted = document.signup.edu.selectedIndex;
    document.querySelector("#degreeError").innerHTML = "";

    if (seleted == 0) {
        errors.innerHTML += "<span>Selection required</span>";
        return false;
    }
    else {
        return true;
    }
}


function Age_validator() {
    var errors = document.querySelector("#ageError");
    var input = document.signup.age.value.trim();
    document.querySelector("#ageError").innerHTML = "";
    if (parseInt(input) < 18 || parseInt(input) > 60) {
        errors.innerHTML += "<span>Age must be between 18 and 60</span>"
        document.signup.age.focus();
        document.signup.age.select();
        return false;
    }
    if (parseInt(input) != input) {
        errors.innerHTML += "<span>Age input required</span>"
        document.signup.age.focus();
        document.signup.age.select();
        return false;
    }
    return true;
}


function removeError() {
    document.querySelector("#f_nameError").innerHTML = "";
    document.querySelector("#ageError").innerHTML = "";
    document.querySelector("#S_nameError").innerHTML = "";
    document.querySelector("#u_nameErr").innerHTML = "";
    document.querySelector("#pass_wordError").innerHTML = "";
    document.querySelector("#C_pass_wordError").innerHTML = "";
    document.querySelector("#edu_statusError").innerHTML = "";
    document.querySelector("#degreeError").innerHTML = "";
}
