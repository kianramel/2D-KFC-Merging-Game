// load assets 
const customer1Img = new Image();
customer1Img.src = "img/customer1.png"; 

const level0Img = new Image();
level0Img.src = "img/level0.png"; 

const level1Img = new Image();
level1Img.src = "img/level1.png";

const level2Img = new Image();
level2Img.src = "img/level2.png";

const level3Img = new Image();
level3Img.src = "img/level3.png";

const level4Img = new Image();
level4Img.src = "img/level4.png";

const level5Img = new Image();
level5Img.src = "img/level5.png";

const level6Img = new Image();
level6Img.src = "img/level6.png";

const level7Img = new Image();
level7Img.src = "img/level7.png";

canvas = document.getElementById('gameCanvas');


	class Customer { 
		constructor(x,y) { 
				this.x = x;
				this.y = y;
				this.width = 200;
				this.height = 200;
				this.image = new Image();
				this.image.src = "img/customer1.png"; 
		}
	}

const char1 = new Customer (190,10)

	class salt {
		constructor(x,y) {
				this.x = x;
				this.y = y;
				this.width = 200;
				this.height = 200;
				this.image = new Image();
				this.image.src = "img/level0.png";
				this.status = 'INVISIBLE';
		}
		draw(){
			if (this.status != 'INVISIBLE'){
				canvasContext.drawImage(level0Img, this.x, this.y, this.width, this.height)
			}
		}
	}
	
	class secret {
		constructor(x,y) {
				this.x = x;
				this.y = y;
				this.width = 200;
				this.height = 200;
				this.image = new Image();
				this.image.src = "img/level1.png";
				this.status = 'INVISIBLE';
		}
		draw(){
			if (this.status != 'INVISIBLE'){
				canvasContext.drawImage(level1Img, this.x, this.y, this.width, this.height) 
			}
		}
	}

	class fries {
		constructor(x,y) {
				this.x = x;
				this.y = y;
				this.width = 120;
				this.height = 200;
				this.image = new Image();
				this.image.src = "img/level2.png";
				this.status = 'INVISIBLE';
		}
		draw(){
			if (this.status != 'INVISIBLE'){
				canvasContext.drawImage(level2Img, this.x, this.y, this.width, this.height) 
			}
		}
	}

	class bites {
		constructor(x,y) {
				this.x = x;
				this.y = y;
				this.width = 130;
				this.height = 200;
				this.image = new Image();
				this.image.src = "img/level3.png";
				this.status = 'INVISIBLE';
		}
		draw(){
			if (this.status != 'INVISIBLE'){
				canvasContext.drawImage(level3Img, this.x, this.y, this.width, this.height) 
			}
		}
	}
	
	class burger {
		constructor(x,y) {
				this.x = x;
				this.y = y;
				this.width = 200;
				this.height = 200;
				this.image = new Image();
				this.image.src = "img/level4.png";
				this.status = 'INVISIBLE';
		}
		draw(){
			if (this.status != 'INVISIBLE'){
				canvasContext.drawImage(level4Img, this.x, this.y, this.width, this.height) 
			}
		}
	}
	
	class bucket {
		constructor(x,y) {
				this.x = x;
				this.y = y;
				this.width = 100;
				this.height = 200;
				this.image = new Image();
				this.image.src = "img/level5.png";
				this.status = 'INVISIBLE';
		}
		draw(){
			if (this.status != 'INVISIBLE'){
				canvasContext.drawImage(level5Img, this.x, this.y, this.width, this.height) 
			}
		}
	}
	
	class meal {
		constructor(x,y) {
				this.x = x;
				this.y = y;
				this.width = 200;
				this.height = 200;
				this.image = new Image();
				this.image.src = "img/level6.png";
				this.status = 'INVISIBLE';
		}
		draw(){
			if (this.status != 'INVISIBLE'){
				canvasContext.drawImage(level6Img, this.x, this.y, this.width, this.height) 
			}
		}
	}

	class combo {
		constructor(x,y) {
				this.x = x;
				this.y = y;
				this.width = 200;
				this.height = 200;
				this.image = new Image();
				this.image.src = "img/level7.png";
				this.status = 'INVISIBLE';
		}
		draw(){
			if (this.status != 'INVISIBLE'){
				canvasContext.drawImage(level7Img, this.x, this.y, this.width, this.height) 
			}
		}
	}
	
	class kitchen {
		constructor(width,height) {
				this.x = 334;
				this.y = 32;
				this.width = width;
				this.height = height;
		}
	}
	
const kitchen1 = new kitchen (796,736)
	
//splitting my screen one side for customer one side for the merging part
const leftWidth = 264; // 22% of screen width for customer
const rightX = 264; // Starts where the left side ends
const rightWidth = 936; // The remaining 78% for merging

	class bubble {
		constructor(x,y,width,height) {
				this.x = x;
				this.y = y;
				this.width = width;
				this.height = height;
		}
	}
	
const bubble1 = new bubble (15,85,305,90)
	
	class tail {
		constructor(x,y,width,height) {
				this.x= x;
				this.y= y;
				this.width = width;
				this.height = height;
		}
	}

const tail1 = new tail (70,200,30,30)

//dimensions of second tail connecting to customer 
const tail2 = new tail (90,250,20,20)

//var isFalling = false; // Item starts still
const gravity = 12; // Drop speed per frame
const floorY = 568; // Floor position inside kitchen (kitchenY + kitchenHeight - saltHeight)

const gameObjects = []
const salt1 = new salt (632,1)
gameObjects.push(salt1);
const secret1 = new secret (632,1)
gameObjects.push(secret1);
const fries1 = new fries (632,1)
gameObjects.push(fries1);
const bites1 = new bites (632,1)
gameObjects.push(bites1);
const burger1 = new burger (632,1)
gameObjects.push(burger1);
const bucket1 = new bucket (632,1)
gameObjects.push(bucket1);
const meal1 = new meal (632,1)
gameObjects.push(meal1);
const combo1 = new combo (632,1)
gameObjects.push(combo1);

let currentObject = Math.floor(Math.random() * gameObjects.length);

currentObject = 0
// TODO - add code here to shuffle the order of the list

gameObjects[currentObject].status = 'TOP';
//for the rest of the custom assets as well


const isGameRunning = true;

// When the HTML page loads, find the canvas and set some settings 
window.onload = function(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	
	setInterval(mainLoop, 1000 / 60); // The main loop runs everything inside it sixty times every second.
}

function mainLoop(){
		if (isGameRunning) {
				draw();
				update();
		}
}

function draw(){
	//Draw background

	// Colour the customer side  
	canvasContext.fillStyle = "#C46B63";
	canvasContext.fillRect(0,0, 264, 800);

	// Colour the right side  
	canvasContext.fillStyle = "#C46B63";
	canvasContext.fillRect(264, 0, 936, 800);

	// colour inside the merging kitchen area 
	canvasContext.fillStyle = "white";
	canvasContext.fillRect(334, 32, 796, 736);

	// Draw the red border outline 
	canvasContext.strokeStyle = "orange"; 
	canvasContext.lineWidth = 6; //thickness of the border
	canvasContext.strokeRect(334, 32, 796, 736); 

	//draw speech bubble for customers order 
	canvasContext.fillStyle = "white"; 
	canvasContext.fillRect(15, 85, 305, 90);

	canvasContext.strokeStyle = "black"; 
	canvasContext.lineWidth = 6; 
	canvasContext.strokeRect(15, 85, 305, 90);

	//text inside the speech bubble 
	canvasContext.fillStyle = "black";
	canvasContext.font = "24px Arial";
	canvasContext.fillText("Could I please have fries?", 25, 140 );

	canvasContext.fillStyle = "white"; 
	canvasContext.fillRect(70,200,30,30);

	canvasContext.strokeStyle = "black"; 
	canvasContext.lineWidth = 6; 
	canvasContext.strokeRect(70,200,30,30);

	canvasContext.fillStyle = "white"; 
	canvasContext.fillRect(90,250,20,20);

	canvasContext.strokeStyle = "black"; 
	canvasContext.lineWidth = 6; 
	canvasContext.strokeRect(90,250,20,20);
	
	//Draw Customer + Item 
	canvasContext.drawImage(customer1Img, 7,190,350,550);
	
	salt1.draw();
	secret1.draw();
	fries1.draw();
	bites1.draw();
	burger1.draw();
	bucket1.draw();
	meal1.draw();
	combo1.draw();
	
	//Draw Score
}

function update(){ //WHOLE part
    // Handles the item falling when Enter is pressed
		if (gameObjects[currentObject].status === 'FALLING'){
			gameObjects[currentObject].y += gravity;
		}
        // Stop the item when it hits the floor
        if (gameObjects[currentObject].y >= floorY) {
            gameObjects[currentObject].y = floorY;
            gameObjects[currentObject].status = 'LANDED';
						
						//Use Math.random() to pick a brand new random item 
						currentObject = Math.floor(Math.random() * gameObjects.length);
						
						// reset the newly chosen object to the top spawn point 
						gameObjects[currentObject].x = 632;
						gameObjects[currentObject].y = 1;						
						gameObjects[currentObject].status = 'TOP';
		}
		//detect collisions 
}
		
// Move obbject L/R - press enter 
window.addEventListener('keydown',this.check,false); 
function check(e) {
	var code = e.keyCode;

	if (code == 37) { // left arrow pressed
			if (gameObjects[currentObject].status === 'TOP'){
				gameObjects[currentObject].x -= 15;
			}
			if (gameObjects[currentObject].x < 338) {
				gameObjects[currentObject].x = 338; // x-boundary
			}
			if (gameObjects[currentObject].status === 'LANDED'){
				// shouldnt move while on the ground
			}	
	} 	
	else if (code == 39) { // right arrow pressed
			if (gameObjects[currentObject].status === 'TOP'){
				gameObjects[currentObject].x+= 15;
			}
			if (gameObjects[currentObject].x > 927) { // x-boundary
				gameObjects[currentObject].x = 927;
			}
			if (gameObjects[currentObject].status === 'LANDED'){
				// shouldnt move while on the ground
			}
	} 
	if (code == 32) { // space key
				console.log(gameObjects[currentObject].status);
				if (gameObjects[currentObject].status === 'TOP') {
					gameObjects[currentObject].status = "FALLING";
				}
	}
}

//problem encountered - wont allow the same asset on the screen at the same time