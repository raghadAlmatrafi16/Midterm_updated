document.querySelector('button').addEventListener("click",ThrowRandom);
var colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'white', 'grey', 'pink'];

function ThrowRandom(){
  var randomNumbers = [];
  var rand1;

  for (i=0; i < 9; i++){
      rand1 = Math.random();
      rand1 = rand1*9;
      rand1 = Math.floor(rand1)+1;
      randomNumbers.push(rand1);
  }

  for (j=0; j < randomNumbers.length; j++){
    document.querySelectorAll("#table td")[j].innerHTML = ""+randomNumbers[j];
    document.querySelectorAll("#table td")[j].style.backgroundColor = colors[randomNumbers[j]];
  }
}

function disappear(n){
    var disappearOrder= [];


  n.style.visibility= "hidden";
  number = n.innerHTML;
  disappearOrder.push(number.toString());

  alert("The order in which the numbers disappeared is: "+disappearOrder);

}
