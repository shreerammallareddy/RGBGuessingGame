console.log("connected");

var colors=[
"rgb(255, 0, 0)",
"rgb(0, 255, 0)",
"rgb(0, 0, 255)",
"rgb(255, 100, 120)",
"rgb(225, 123, 34)",
"rgb(5, 100, 200)"
]

var pickedColor=colors[3];

var squares=document.querySelectorAll(".square");
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
}
