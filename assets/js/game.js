var goalPoints = Math.floor(Math.random() * 120) + 19; 
var wins = $("#wins");
var losses = $("#losses");
var crystal1 = $("#crystal1");
var crystal2 = $("#crystal2");
var crystal3 = $("#crystal3");
var crystal4 = $("#crystal4");
var total = 0;
var crystal = $(".crystal")


$("#goalPoints").html(goalPoints);

function getRandomNumber(){
  var randomNumber = Math.floor(Math.random() * 12) + 1;
  return randomNumber;

}

crystal1.attr("data-crystalvalue", getRandomNumber());
crystal2.attr("data-crystalvalue", getRandomNumber());
crystal3.attr("data-crystalvalue", getRandomNumber());
crystal4.attr("data-crystalvalue", getRandomNumber());

crystal1.click(function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  total += crystalValue;
  $("#total").html(total);
});
crystal2.click(function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  total += crystalValue;
  $("#total").html(total);
});
crystal3.click(function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  total += crystalValue;
  $("#total").html(total);
});
crystal4.click(function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  total += crystalValue;
  $("#total").html(total);
});

if(total > goalPoints){
  console.log("You win");
}

