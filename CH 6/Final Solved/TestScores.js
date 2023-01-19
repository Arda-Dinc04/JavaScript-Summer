var personsWithScores = [];
var average;
var total = 0;
var highestScore = 0;
var name = "";

var $ = function (id) { return document.getElementById(id); };

document.getElementById("name").focus();
//validate entries and add to array
  function addScore() {
    $("nameError").innerHTML = ("");
    $("scoreError").innerHTML = ("");
  var nameInput = $("name").value;
  var scoreInput = parseInt($("score").value);
  if (nameInput == "" ){
    $("nameError").innerHTML = (" Please enter a name.");
  }
  else if((scoreInput < 0 || scoreInput > 100 )){
    $("scoreError").innerHTML = (" Score must be between 0 and 100.");
  }
  else {    
    personsWithScores.push({name: nameInput, score: scoreInput});
    $("name").value = "";
    $("score").value = "";
    console.log(personsWithScores);
    document.getElementById("name").focus();
  }
};

//then calculate the average and highest score
function displayResults() {
  total = 0;

  for (var i = 0; i < personsWithScores.length; i++) {
    total = total + personsWithScores[i].score;      
    if (personsWithScores[i].score > highestScore) {
      highestScore = personsWithScores[i].score;
      highestScoreName = personsWithScores[i].name;
    }
  }
  average = parseInt(total/personsWithScores.length);
  $("results_header").innerHTML = ("Results");
  $("results_text").innerHTML = ("\nAverage score is = " + average + "<br>" + "\nHigh score = " + highestScoreName + " with a score of " + highestScore);

};

//display scores table
function displayScores() {
  if($("scores")){
    $("scores").innerHTML = ("");
  }
  $("scores_header").innerHTML = ("Scores");
  for(var i=0; i < personsWithScores.length;i++) {
    var element = document.createElement("p");

    var nameHTML = document.createElement("label");
    var scoreHTML = document.createElement("label");
    scoreHTML.id = "scoreLabel";

    nameHTML.innerHTML = personsWithScores[i].name;
    scoreHTML.innerHTML = personsWithScores[i].score;

    element.append(nameHTML, scoreHTML);

    $("scores").append(element);
  }
};
