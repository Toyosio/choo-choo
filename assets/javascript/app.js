
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDS3SQajmFixlG0W1kBSFS_d_btbwnpYsk",
    authDomain: "choo-choo-train-3d6a6.firebaseapp.com",
    databaseURL: "https://choo-choo-train-3d6a6.firebaseio.com",
    projectId: "choo-choo-train-3d6a6",
    storageBucket: "choo-choo-train-3d6a6.appspot.com",
    messagingSenderId: "804516749953"
  };
  firebase.initializeApp(config);

//variables
  var database = firebase.database();
  var currentTime = moment();
  var trainName = "";
  var destination = "";
  var firstTrainArrival = 0;
  var nextTrainArrival = 0;
  var frequency = 0;


//initialize submit button
$('#newTrain').on("click" function() {
  preventDefault();
//newTrain input
  trainName = $('#name').val().trim;
  destination = $('dest').val().trim();
  firstTrainArrival = $('#tyme').val().trim();
  frequency = $('frequent').val().trim();
  database.push({
    trainName: name,
    destination: destination,
  ,
    frequency: frequency

  })

//

})
