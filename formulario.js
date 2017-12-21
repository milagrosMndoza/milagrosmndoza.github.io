  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyApDvbBTiKOrqrB4BqMsMpwL8C_ooawXOE",
    authDomain: "bd-portafolio.firebaseapp.com",
    databaseURL: "https://bd-portafolio.firebaseio.com",
    projectId: "bd-portafolio",
    storageBucket: "",
    messagingSenderId: "783955591124"
  };
  firebase.initializeApp(config);

$('#contactForm').submit(saveData);
function saveData(event) {
 
let name = $('#input-name').val();
let email = $('#email').val();
let cel = $('#cel').val();
let message = $('#message').val();

console.log('datos',name, email, cel, message);
writeUserData(name, email, cel, message)
// $('#contactForm').trigger("reset");
$('#input-name').val("");
$('#email').val("");
$('#cel').val("");
$('#message').val("");
event.preventDefault();
}

function writeUserData(name, email, cel, message) {
firebase.database().ref('users/').push({
  username: name,
  email: email,
  cel:cel,
  message:message
});


}