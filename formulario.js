// 	  // Initialize Firebase
var config = {
  apiKey: "AIzaSyApDvbBTiKOrqrB4BqMsMpwL8C_ooawXOE",
  authDomain: "bd-portafolio.firebaseapp.com",
  databaseURL: "https://bd-portafolio.firebaseio.com",
  projectId: "bd-portafolio",
  storageBucket: "bd-portafolio.appspot.com",
  messagingSenderId: "783955591124"
  };
  firebase.initializeApp(config);

//       // Reference messages collection
// var messagesRef = firebase.database().ref('messages');

// // Listen for form submit
// document.getElementById('contactForm').addEventListener('submit', submitForm);

// // Submit form
// function submitForm(e){
//   e.preventDefault();

//   // Get values
//   var name = getInputVal('name');
//   var email = getInputVal('email');
//   var phone =getInputVal('cel');
//   var message = getInputVal('message');

//   // Save message
//   saveMessage(name, email, cel, message);

//   // Show alert
//   document.querySelector('.alert').style.display = 'block';

//   // Hide alert after 3 seconds
//   setTimeout(function(){
//     document.querySelector('.alert').style.display = 'none';
//   },3000);

//   // Clear form
//   document.getElementById('contactForm').reset();
// }
// // Function to get get form values
// function getInputVal(id){
//   return document.getElementById(id).value;
// }

// // Save message to firebase
// function saveMessage(name, email, cel, message){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//    name, email, cel, message
//   });
// }
$('#contactForm').submit(saveData);
function saveData(event) {
let name = $('#name').val();
let email = $('#email').val();
let cel = $('#input-cel').val();
let message = $('#message').val();
event.preventDefault();
console.log('datos',name,email, cel, message);
writeUserData(name, email, cel, message)
}

function writeUserData(name, email, cel, message) {
firebase.database().ref('users/').push({
  username: name,
  email: email,
  cel:cel,
  message:message
});
}