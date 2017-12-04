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
  var trainName = "";
  var destination = "";
  var firstTrainArrival = 0;
  var nextTrainArrival = 0;
  var minsAway = 0;

//initialize submit button
$("#newTrain").on("click",  function(event) {
  event.preventDefault();
//newTrain input
  trainName = $("#name").val().trim();
  trainDestination = $("#dest").val().trim();
  firstTrainArrival = $("#tyme").val().trim();
  trainFrequency = $("#frequent").val().trim();

  //train object
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    firstTrain: firstTrainArrival,
    frequency: trainFrequency
  }

//loads info to firebase
database.ref().push(newTrain);

alert("New Schedule Added");

//reset form
name = $("#name").val("");
trainDestination = $("#dest").val("");
firstTrainArrival = $("#tyme").val("");
trainFrequency = $("#frequent").val("");
});

database.ref().on("child_added", function(snapShot) {
  var showTrainName = snapShot.val().name;
  var showDestination = snapShot.val().destination;
  var showFirstTrainArrival = snapShot.val().firstTrain;
  var showFrequency = snapShot.val().frequency;

console.log(snapshot);
  //convert moment
var firstTimeArrivalConverted = moment(firstTrainArrival, "HH:mm").subtract(1, "years");

//currentTime
var currentTime = moment();

var diffTime = moment().diff(moment(firstTimeArrivalConverted), "minutes");

var tReminder = diffTime % showFrequency;

var ShowminsAway = showFrequency - tReminder;

var nextTrainArrival = moment().add(ShowminsAway, "minutes");

var nextTrainArrivalConverted = moment(nextTrainArrival).format("HH:mm");

$("#currentSchedule").append("<tr><td>" + showTrainName + "</td><td>" + showDestination + "</td><td>" + showFrequency + "</td><td>" + showNextTrainArrival + "</td><td>" + Showmins + "</td></tr>");

});
