console.log("connected");
var numOfColors=6;
var colors=[];
var pickedColor; //need to randomize this by using another function;
var squares=document.querySelectorAll(".square");
var displayMessage=document.querySelector("#displayMessage")
var title = document.querySelector("#toFind");
var h1 = document.querySelector("h1");
var reset=document.querySelector("#reset");
var modes=document.querySelectorAll(".mode");


init();


function init(){
	
	//adding modes
	modesSetup();	
	//add inital colors to squares need to be randaomized
	initSquares();
	//since we have already used reset in above modes so need not add above
	resetFunc(); 
}

function modesSetup(){
	for(var i=0;i<modes.length;i++){
		modes[i].addEventListener("click",function(){
			modes[0].classList.remove("selected");
			modes[1].classList.remove("selected");
			this.classList.add("selected");
			numOfColors = (this.textContent==="Easy")?3:6;
			resetFunc();
		})
	}
}

function initSquares(){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		//add click events to each of squares.
		squares[i].addEventListener("click",function(){
			var clickedColor=this.style.backgroundColor;
			if(clickedColor===pickedColor){
				displayMessage.textContent="Correct!!";
				colorsMatch(clickedColor);
				h1.style.backgroundColor=pickedColor;
				reset.textContent="Play Again?";
			}else{
				this.style.backgroundColor="#232323"; //here this refers to object present in this js i.e colors array
				displayMessage.textContent="Try Again";
			}
		})
	}
}


//event for Reset Button
reset.addEventListener("click",function(){
	resetFunc();
})

function resetFunc(){
	//generate new colors and add it to array
	colors=generateRandomColors(numOfColors);
	//generate new picked color
	pickedColor=pickerRandColor();
	title.textContent=pickedColor;
	//set display text Correct or Try Again as null
	displayMessage.textContent="";
	h1.style.backgroundColor="steelblue";
	reset.textContent="New Colors"
	//change squares colors
	for(var i=0;i<squares.length;i++){
		if(colors[i]){//Here we check if the color value exist or not. If 
			//it doesn't exist we make that square as null and also we need to unhide hidden in easy mode;
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
}






//function to add matched color to all remaining squares 
function colorsMatch(color){
	//here we assign the matched color to all other color blocks
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

//function to pick random color
function pickerRandColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

//function to add random colors to colors array
function generateRandomColors(num){
	//add num random colors to array and return that array
	var arr=[];
// store randome colors into array
for(var i =0;i<num;i++){
		arr.push(randomColor());//obtain each color from randomColor function
	}

	return arr;
}

//function to generate random colors
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



// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numOfColors=3;
// 	colors=generateRandomColors(numOfColors);
// 	//generate new picked color
// 	pickedColor=pickerRandColor();
// 	title.textContent=pickedColor;
// 	//set display text Correct or Try Again as null
// 	displayMessage.textContent="";
// 	h1.style.backgroundColor="steelblue";
// 	//change squares colors
// 	for(var i=0;i<squares.length;i++){
// 		if(i>2){
// 			squares[i].style.display="none";
// 		}else{
// 			squares[i].style.backgroundColor=colors[i];
// 		}

// 	}
// })

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numOfColors=6;
// 	colors=generateRandomColors(numOfColors);
// 	//generate new picked color
// 	pickedColor=pickerRandColor();
// 	title.textContent=pickedColor;
// 	//set display text Correct or Try Again as null
// 	displayMessage.textContent="";
// 	h1.style.backgroundColor="steelblue";
// 	//change squares colors
// 	for(var i=0;i<squares.length;i++){		
// 			squares[i].style.display="block";		
// 			squares[i].style.backgroundColor=colors[i];
// 	}
// })