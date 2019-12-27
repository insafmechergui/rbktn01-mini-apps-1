
console.log('first page');

var x = true;
var o = false;



// var square = [
//   ['1', '2', '3'],
//   ['4', '5', '6'],
//   ['7', '8', '9']
// ];

var player1 = [];
var player2 = [];

var allCells = document.getElementsByClassName("cell");
//function vertical(index) {
  // var row = allCells[index];
// for(var i = 0; i < allCells.length; i++) {
//   for(var j = 0; j < allCells[i]; j++) {
//     var compare = allCells[i][0];
//     if(allCells[i][j] % compare === 0) {
//       console.log(true);
//     }

//     console.log("matr");
//   }
// }
  // var count = 0;
  // for(var i = 0; i < row.length; i++) {
  //     if(row[i]) {
  //       count++;
  //     }
  // }
  // console.log(count === 3);
//}

//get the id 1
var cellClick = document.getElementById("1");
//event click
cellClick.addEventListener("click", function() {
  //if cell clicked is empty
  //insert x or o

  if(cellClick.innerHTML === '') {

    if(x) {
      cellClick.innerHTML = 'X';
      o = true;
      x = false;
      //player1[0] ='X';
     // player1.insert(0, 'X0');
//console.log(player1)
      //console.log(cellClick.indexOf('X'));
    }else {
      cellClick.innerHTML = 'O';
      x = true;
      o = false;
      //player1.push('O');
      //console.log(player1)


    }
  }
});

var cellClick2 = document.getElementById("2");
cellClick2.addEventListener("click", function() {
  if(cellClick2.innerHTML === '') {

    if(x) {
      cellClick2.innerHTML = 'X';
      o = true;
      x = false;
      //player1.push('X');
      //player1.insert(1, 'X1');

      //console.log(player1)

    }else {
      cellClick2.innerHTML = 'O';
      x = true;
      o = false;
      //player2.push('O');
      //console.log(player2)

    }
  }
});

var cellClick3 = document.getElementById("3");
cellClick3.addEventListener("click", function() {
  if(cellClick3.innerHTML === '') {
    if(x) {
      cellClick3.innerHTML = 'X';
      o = true;
      x = false;
      //player1.push('X');
      //console.log(player1)

    }else {
      cellClick3.innerHTML = 'O';
      x = true;
      o = false;
      //player2.push('O');
      //console.log(player2)

    }
  }
});

var cellClick4 = document.getElementById("4");
cellClick4.addEventListener("click", function() {
  if(cellClick4.innerHTML === '') {
    if(x) {
      cellClick4.innerHTML = 'X';
      o = true;
      x = false;
    }else {
      cellClick4.innerHTML = 'O';
      x = true;
      o = false;
    }
  }
});

var cellClick5 = document.getElementById("5");
cellClick5.addEventListener("click", function() {
  if(cellClick5.innerHTML === '') {
    if(x) {
      cellClick5.innerHTML = 'X';
      o = true;
      x = false;
    }else {
      cellClick5.innerHTML = 'O';
      x = true;
      o = false;
    }
  }
});

var cellClick6 = document.getElementById("6");
cellClick6.addEventListener("click", function() {
  if(cellClick6.innerHTML === '') {
    if(x) {
      cellClick6.innerHTML = 'X';
      o = true;
      x = false;
    }else {
      cellClick6.innerHTML = 'O';
      x = true;
      o = false;
    }
  }
});

var cellClick7 = document.getElementById("7");
cellClick7.addEventListener("click", function() {
  if(cellClick7.innerHTML === '') {
    if(x) {
      cellClick7.innerHTML = 'X';
      o = true;
      x = false;
    }else {
      cellClick7.innerHTML = 'O';
      x = true;
      o = false;
    }
  }
});

var cellClick8 = document.getElementById("8");
cellClick8.addEventListener("click", function() {
  if(cellClick8.innerHTML === '') {
    if(x) {
      cellClick8.innerHTML = 'X';
      o = true;
      x = false;
    }else {
      cellClick8.innerHTML = 'O';
      x = true;
      o = false;
    }
  }
});

var cellClick9 = document.getElementById("9");
cellClick9.addEventListener("click", function() {
  if(cellClick9.innerHTML === '') {
    if(x) {
      cellClick9.innerHTML = 'X';
      o = true;
      x = false;
    }else {
      cellClick9.innerHTML = 'O';
      x = true;
      o = false;
    }
  }
});


console.log('last page');




