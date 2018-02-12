var container = document.querySelector('.container');
var nextLetter = "X";
var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');
var box4 = document.querySelector('.box4');
var box5 = document.querySelector('.box5');
var box6 = document.querySelector('.box6');
var box7 = document.querySelector('.box7');
var box8 = document.querySelector('.box8');
var box9 = document.querySelector('.box9');
var gameOn = true;

  container.addEventListener('click', function(event){
    if(gameOn){

      if(event.target.innerText === ""){
        event.target.innerText = nextLetter
        if(nextLetter === 'X'){
          nextLetter = "O";
        }  else {
          nextLetter = "X";
        }
      }
    if (box1.innerText === box2.innerText && box2.innerText === box3.innerText && box3.innerText !== ""){
      box1.style.backgroundColor = "darkcyan";
      box2.style.backgroundColor = "darkcyan";
      box3.style.backgroundColor = "darkcyan";
      gameOn = false;
    }
    else if (box4.innerText === box5.innerText && box5.innerText === box6.innerText && box6.innerText !== ""){
      box4.style.backgroundColor = "darkcyan";
      box5.style.backgroundColor = "darkcyan";
      box6.style.backgroundColor = "darkcyan";
      gameOn = false;
    }
    else if (box7.innerText === box8.innerText && box8.innerText === box9.innerText && box9.innerText !== ""){
      box7.style.backgroundColor = "darkcyan";
      box8.style.backgroundColor = "darkcyan";
      box9.style.backgroundColor = "darkcyan";
      gameOn = false;
    }
    else if (box1.innerText === box4.innerText && box4.innerText === box7.innerText && box7.innerText !== ""){
      box1.style.backgroundColor = "darkcyan";
      box4.style.backgroundColor = "darkcyan";
      box7.style.backgroundColor = "darkcyan";
      gameOn = false;
    }
    else if (box2.innerText === box5.innerText && box5.innerText === box8.innerText && box8.innerText !== ""){
      box2.style.backgroundColor = "darkcyan";
      box5.style.backgroundColor = "darkcyan";
      box8.style.backgroundColor = "darkcyan";
      gameOn = false;
    }
    else if (box3.innerText === box6.innerText && box6.innerText === box9.innerText && box9.innerText !== ""){
      box3.style.backgroundColor = "darkcyan";
      box6.style.backgroundColor = "darkcyan";
      box9.style.backgroundColor = "darkcyan";
      gameOn = false;
    }
    else if (box1.innerText === box5.innerText && box5.innerText === box9.innerText && box9.innerText !== ""){
      box1.style.backgroundColor = "darkcyan";
      box5.style.backgroundColor = "darkcyan";
      box9.style.backgroundColor = "darkcyan";
      gameOn = false;
    }
    else if (box3.innerText === box5.innerText && box5.innerText === box7.innerText && box7.innerText !== ""){
      box3.style.backgroundColor = "darkcyan";
      box5.style.backgroundColor = "darkcyan";
      box7.style.backgroundColor = "darkcyan";
      gameOn = false;
    }
  }  
  });
