$(document).ready(function () {
  console.log("portfolio.js linked");
  $('.sidenav').sidenav();
  $('.collapsible').collapsible();
  $('.modal').modal();

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCR-_9cNtVI6krIkrImq3CNpgLCSoEU-N8",
    authDomain: "moskowitza-contact.firebaseapp.com",
    databaseURL: "https://moskowitza-contact.firebaseio.com",
    projectId: "moskowitza-contact",
    storageBucket: "moskowitza-contact.appspot.com",
    messagingSenderId: "735755413395"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();

  // Initial Values
  var name = "";
  var email = "";
  var age = 0;
  var comment = "";

  // Capture Button Click
  $("#msg").on("click", function (event) {
    event.preventDefault();

    // Grabbed values from text boxes
    first = $("#first_name").val().trim();
    last = $("#last_name").val().trim();
    email = $("#email").val().trim();
    message = $("#message").val().trim();

    // Code for handling the push
    database.ref().push({
      first_name: first,
      last_name: last,
      email: email,
      message: message,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  });

  // Firebase watcher + initial loader + order/limit HINT: .on("child_added"
  database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.first);
    console.log(sv.last);
    console.log(sv.email);
    console.log(sv.message);
    console.log(sv.dateAdded);

    // // Change the HTML to reflect
    // $("#name-display").text(sv.name);
    // $("#email-display").text(sv.email);
    // $("#age-display").text(sv.age);
    // $("#comment-display").text(sv.comment);

    // Handle the errors
  }, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

  //clear form
  $("#modalBtn").on('click', function () {

    $('form').find('input:text').val('');
    $('#email').val('');
    // $('form').find('input:text, input:email, input:password, select, textarea').val('');

    // $('form').find('input:radio, input:checkbox').prop('checked', false);
  });
});

