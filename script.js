let username = "   Ahmed_Khan99   ";
let city = "Karachi,Lahore,Islamabad,Multan";
let cnic = "42101-1234567-1";
let bio = "I am a MERN stack student learning JavaScript at Saylani.";


// 1. Clean username & length
let cleanUsername = username.trim();
console.log(cleanUsername);
console.log(cleanUsername.length);
// 2. Last 2 digits of CNIC

console.log(cnic.slice(-2));


// 3. Split & Join

let cities = city.split(",");
console.log(cities);

console.log(cities.join(" | "));


// 4. Includes JavaScript

console.log(bio.includes("JavaScript"));


// 5. Uppercase & Lowercase

console.log(bio.toUpperCase());

console.log(bio.toLowerCase());


// 6. Word Count

let words = bio.split(" ");
console.log(words.length);

const form = document.getElementById("signupForm");
const usernameInput = document.getElementById("username");
usernameInput.addEventListener("input", function () {
    this.value = this.value.toLowerCase();
});

function isNameValid(name) {

    if (name.trim().length < 3) {
        return false;
    }

    for (let i = 0; i < name.length; i++) {

        if (!isNaN(name[i]) && name[i] !== " ") {
            return false;
        }
    }
    return true;
}
function isUsernameValid(username) {

    username = username.trim();

    if (username.length < 5 || username.length > 15) {
        return false;
    }

    if (username.includes(" ")) {
        return false;
    }

    return true;
}

function isPhoneValid(phone) {

    if (!phone.startsWith("03")) {
        return false;
    }

    if (phone.length !== 11) {
        return false;
    }

    for (let i = 0; i < phone.length; i++) {

        if (isNaN(phone[i])) {
            return false;
        }

    }

    return true;
}


function isBioValid(bio) {

    if (bio.length < 50) {
        return false;
    }

    let words = bio.trim().split(" ");

    if (words.length < 10) {
        return false;
    }

    return true;
}



function isPasswordMatch(password, confirmPassword) {

    return password === confirmPassword;

}


form.addEventListener("submit", function (e) {

    e.preventDefault();

    let fullname = document.getElementById("fullname").value;

    let username = document.getElementById("username").value;

    let phone = document.getElementById("phone").value;

    let password = document.getElementById("password").value;

    let confirmPassword = document.getElementById("confirmPassword").value;

    let bio = document.getElementById("bio").value;


    if (!isNameValid(fullname)) {

        alert("Full Name is invalid.");
        return;

    }

    if (!isUsernameValid(username)) {

        alert("Username is invalid.");
        return;

    }

    if (!isPhoneValid(phone)) {

        alert("Phone Number is invalid.");
        return;

    }

    if (!isBioValid(bio)) {

        alert("Bio is invalid.");
        return;

    }

    if (!isPasswordMatch(password, confirmPassword)) {

        alert("Passwords do not match.");
        return;
    }

    alert("Signup successful!");

});