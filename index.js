var ranNum=Math.floor((Math.random()*6))+1;
var diceImage="dice" + ranNum+ ".png";
var imageSrc="images/"+diceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSrc);

var ranNum2=Math.floor(Math.random()*6)+1;
var imageSrc2="images/dice"+ranNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imageSrc2);

if (ranNum>ranNum2) {
  document.querySelector("h1").innerHTML="Player1 wins";
}
else{
  document.querySelector("h1").innerHTML="Player2 wins";
}



// function chooseImage(){
//   var diceImages=new Array();
//   diceImages[0]="images/dice1.png";
//   diceImages[1]="images/dice2.png";
//   diceImages[2]="images/dice3.png";
//   diceImages[3]="images/dice4.png";
//   diceImages[4]="images/dice5.png";
//   diceImages[5]="images/dice6.png";
//
//   var ranImage=diceImages[ranNum];
//   // for (var i=0; i<2; i++){
//   //
//   // }
//   return document.querySelectorAll(".dice").write=diceImages[ranNum];
// }
