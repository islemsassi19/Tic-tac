function game(){
    var id1=document.querySelector("#td1")
    var id2=document.querySelector("#td2")
    var id3=document.querySelector("#td3")
    var id4=document.querySelector("#td4")
    var id5=document.querySelector("#td5")
    var id6=document.querySelector("#td6")
    var id7=document.querySelector("#td7")
    var id8=document.querySelector("#td8")
    var id9=document.querySelector("#td9")


// i found the syntax of doubleclick on mdn , here is the link https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event#examples

//-----------------1-------------------
id1.addEventListener("click",function(){
    id1.textContent='X'
    
})
id1.addEventListener("dblclick", (e) => {
    id1.textContent='O'
  });
//-----------------2-------------------
id2.addEventListener("click",function(){
    id2.textContent='X' 
})
id2.addEventListener("dblclick", (e) => {
    id2.textContent='O'
  });
//-----------------3-------------------
id3.addEventListener("click",function(){
    id3.textContent='X'
})
id3.addEventListener("dblclick", (e) => {
    id3.textContent='O'
  });
//-----------------4-------------------
id4.addEventListener("click",function(){
    id4.textContent='X'
})
id4.addEventListener("dblclick", (e) => {
    id4.textContent='O'
  });

//-----------------5-------------------
id5.addEventListener("click",function(){
    id5.textContent='X'
})
id5.addEventListener("dblclick", (e) => {
    id5.textContent='O'
  });
//-----------------6-------------------
id6.addEventListener("click",function(){
    id6.textContent='X'
})
id6.addEventListener("dblclick", (e) => {
    id6.textContent='O'
  });
//-----------------7-------------------
id7.addEventListener("click",function(){
    id7.textContent='X'
})
id7.addEventListener("dblclick", (e) => {
    id7.textContent='O'
  });
//-----------------8-------------------
id8.addEventListener("click",function(){
    id8.textContent='X'
})
id8.addEventListener("dblclick", (e) => {
    id8.textContent='O'
  });
//-----------------9-------------------
id9.addEventListener("click",function(){
    id9.textContent='X'
})
id9.addEventListener("dblclick", (e) => {
    id9.textContent='O'
  });
}

var currentPlayer = "X";
var cells = [];
for (var i = 0; i < 9; i++) {
	cells[i] = 0;

function checkWin() {
	if (cells[0] == currentPlayer && cells[1] == currentPlayer && cells[2] == currentPlayer) {
		return true;
	} else if (cells[3] == currentPlayer && cells[4] == currentPlayer && cells[5] == currentPlayer) {
		return true;
	} else if (cells[6] == currentPlayer && cells[7] == currentPlayer && cells[8] == currentPlayer) {
		return true;
	} else if (cells[0] == currentPlayer && cells[3] == currentPlayer && cells[6] == currentPlayer) {
		return true;
	} else if (cells[1] == currentPlayer && cells[4] == currentPlayer && cells[7] == currentPlayer) {
		return true;
	} else if (cells[2] == currentPlayer && cells[5] == currentPlayer && cells[8] == currentPlayer) {
		return true;
	} else if (cells[0] == currentPlayer && cells[4] == currentPlayer && cells[8] == currentPlayer) {
		return true;
	} else if (cells[2] == currentPlayer && cells[4] == currentPlayer && cells[6] == currentPlayer) {
		return true;
	} else {
		return false;
	}
}}

