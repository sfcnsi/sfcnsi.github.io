//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello World';

let myImage = document.querySelector('img');
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/005yNpUogy1gai67epq1vj30ti15oai4.jpg'){
		myImage.setAttribute('src','images/005yNpUogy1gai60ae2zoj30u016jb2a.jpg');	
	}else{
		myImage.setAttribute('src','images/005yNpUogy1gai67epq1vj30ti15oai4.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
	let myName = prompt('请输入你的名字：');
	if(!myName || myName === null){
		setUserName();
	}else{
		localStorage.setItem('name',myName);
		myHeading.textContent = 'Mozilla酷毙了,' + myName;
	}
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla酷毙了,' + storedName;
}

myButton.onclick = function(){
	setUserName();
}

