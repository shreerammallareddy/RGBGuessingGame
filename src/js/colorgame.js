console.log("connected");

var colors=generateRandonColors(6);

var pickedColor=pickerRandColor(); //need to randomize this by using another function;
var squares=document.querySelectorAll(".square");
var displayMessage=document.querySelector("#displayMessage")
var title = document.querySelector("#toFind");
var h1 = document.querySelector("h1");


title.textContent=pickedColor;


//add inital colors to squares need to be randaomized
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];

	//add click events to each of squares.
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			displayMessage.textContent="Correct!!";
			colorsMatch(clickedColor);
			h1.style.backgroundColor=pickedColor;
		}else{
			console.log(this.style.backgroundColor);
			this.style.backgroundColor="#232323"; //here this refers to object present in this js i.e colors array
			displayMessage.textContent="Try Again";
		}
	})
}


function colorsMatch(color){
	//here we assign the matched color to all other color blocks
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickerRandColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandonColors(num){
	//add num random colors to array and return that array
	var arr=[];
// store randome colors into array
	for(var i =0;i<num;i++){
		arr.push(randomColor());//obtain each color from randomColor function
	}

	return arr;
}

function randomColor(){
	var max=256;
	var min=0;
	//pick a Red from 0 to 255
	var r = Math.floor(Math.random()*(max-min)+min);
	//pick a Blue from 0 to 255
	var g = Math.floor(Math.random()*(max-min)+min);
	//pick a Green from 0 to 255
	var b = Math.floor(Math.random()*(max-min)+min);

	return "rgb("+r+", "+g+", "+b+")";
}