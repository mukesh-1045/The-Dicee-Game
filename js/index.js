var a = Math.random();
a = a * 6;
a = Math.floor(a) + 1;

var img = "image/dice"+a+".png";
// console.log(img);

document.querySelector(".img1").setAttribute("src", img);

// for image 2

var b = Math.random();
b = b * 6;
b = Math.floor(b) + 1;

var img0 = "image/dice"+b+".png";

// console.log(img0);


document.querySelector(".img2").setAttribute("src", img0);

if(a > b){
	document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(a === b){
	document.querySelector("h1").innerHTML = "Draw";

}else{
	document.querySelector("h1").innerHTML = "Player 2 Wins";
}