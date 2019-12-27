
console.log('first page');

var x = true;
var o = false;
//get cell class
var allCells = document.getElementsByClassName("cell");
//for
//click
for(var i = 0; i < allCells.length; i++) {
  allCells[i].addEventListener("click", function() {
    if(this.innerHTML === '') {
      if(x) {
        this.innerHTML = "X";
        winner();
        o = true;
        x = false;

      }
      else {
        this.innerHTML = "O";
        winner();
        o = false;
        x = true;
      }
    }
  });
}
//get the id 1
var cellClick1 = document.getElementById("1");
var cellClick2 = document.getElementById("2");
var cellClick3 = document.getElementById("3");
var cellClick4 = document.getElementById("4");
var cellClick5 = document.getElementById("5");
var cellClick6 = document.getElementById("6");
var cellClick7 = document.getElementById("7");
var cellClick8 = document.getElementById("8");
var cellClick9 = document.getElementById("9");

function winner() {
  if(cellClick1.innerHTML !== "" && cellClick1.innerHTML === cellClick2.innerHTML && cellClick1.innerHTML === cellClick3.innerHTML) {
    console.log("win");
  }
  else if(cellClick4.innerHTML !== "" && cellClick4.innerHTML === cellClick5.innerHTML && cellClick4.innerHTML === cellClick6.innerHTML) {
    console.log("win");
  }
  else if(cellClick7.innerHTML !== "" && cellClick7.innerHTML === cellClick8.innerHTML && cellClick7.innerHTML === cellClick9.innerHTML) {
    console.log("win");
  }
  else if(cellClick1.innerHTML !== "" && cellClick1.innerHTML === cellClick4.innerHTML && cellClick1.innerHTML === cellClick7.innerHTML) {
    console.log("win");
  }
  else if(cellClick2.innerHTML !== "" && cellClick2.innerHTML === cellClick5.innerHTML && cellClick2.innerHTML === cellClick8.innerHTML) {
    console.log("win");
  }
  else if(cellClick3.innerHTML !== "" && cellClick3.innerHTML === cellClick6.innerHTML && cellClick3.innerHTML === cellClick9.innerHTML) {
    console.log("win");
  }
  else if(cellClick1.innerHTML !== "" && cellClick1.innerHTML === cellClick5.innerHTML && cellClick1.innerHTML === cellClick9.innerHTML) {
    console.log("win");
  }
  else if(cellClick3.innerHTML !== "" && cellClick3.innerHTML === cellClick5.innerHTML && cellClick3.innerHTML === cellClick7.innerHTML) {
    console.log("win");
  }

}

console.log('last page');




