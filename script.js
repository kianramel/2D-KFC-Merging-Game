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

var startScreen = new Image();
startScreen.src = "start-screen.png";

var screen = "start";

//items array for what can be ordered 
const orderableItemNames = ['fries', 'bites', 'burger', 'bucket', 'meal', 'combo'];
let goal = " ";

function getRandomGoal() {
	let randomIndex = Math.floor(Math.random() * orderableItemNames.length);
	return orderableItemNames[randomIndex];
}

goal = getRandomGoal();

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
				this.level = 0;
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
				this.level = 1;
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
				this.level = 2;
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
				this.level = 3;
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
				this.level = 4;
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
				this.level = 5;
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
				this.level = 6;
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
				this.level = 7;
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


// only include levels 0 and 5 for the random drop - excluding level 7 so it can be gained through merging
const itemClasses = [salt, secret, fries, bites, burger, bucket, meal, combo];
const gameObjects = [];

function spawnNewItem() {
    let randomIndex = Math.floor(Math.random() * 6);
    currentObject = new itemClasses[randomIndex](632, 1);
    currentObject.status = 'TOP';
    gameObjects.push(currentObject);
}

spawnNewItem(); 

//var isFalling = false; // Item starts still
const gravity = 12; // Drop speed per frame
const floorY = 568; // Floor position inside kitchen (kitchenY + kitchenHeight - saltHeight)
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
	if(screen == "start"){
		canvasContext.drawImage(startScreen, 0, 0, 1200, 800);
	} else if (screen = "main"){
		//Draw background
		// Colour the customer side  
		canvasContext.fillStyle = "#265370";
		canvasContext.fillRect(0,0, 264, 800);

		// Colour the right side  
		canvasContext.fillStyle = "#265370";
		canvasContext.fillRect(264, 0, 936, 800);

		// colour inside the merging kitchen area 
		canvasContext.fillStyle = "white";
		canvasContext.fillRect(334, 32, 796, 736);

		// Draw the red border outline 
		canvasContext.strokeStyle = "#4A5568"; 
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
		canvasContext.font = "22px Arial";
		canvasContext.fillText("Could I please have " + goal + "?", 25, 140 );

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
		
		//Draw Customer 
		canvasContext.drawImage(customer1Img, 7,190,350,550);

		//Draw Item 
		gameObjects.forEach(function(object) {
			object.draw();
		});
	}
}

function update() {
	if(screen == "start"){
			
	} else if (screen == "main") {
	if (currentObject && currentObject.status === 'TOP') {
		return; 
	}
	// Handles the item falling when spacebar is pressed
	if (currentObject.status === 'FALLING') {
			currentObject.y += gravity;
	}
	// Stop the item when it hits the floor
	if (currentObject.y >= floorY) {
		currentObject.y = floorY;
		currentObject.status = 'LANDED';
		spawnNewItem();
	}
		
	let hasCollided = false;

		// Collision Logic 
		gameObjects.forEach(function(thing1) {
			gameObjects.forEach(function(thing2) {
				if (!hasCollided && thing1 !== thing2 && thing1.status !== 'INVISIBLE' && thing2.status !== 'INVISIBLE') {
					if (detectCollision(thing1.x, thing1.y, thing1.width, thing1.height, thing2.x, thing2.y, thing2.width, thing2.height)) {
						
						if (thing1.constructor.name === thing2.constructor.name) {
							if (thing1.status === 'FALLING') {
								
								let mergeX = thing2.x;
								let mergeY = thing2.y;

								thing1.x = -1000;
								thing1.y = -1000;
								thing1.status = 'INVISIBLE';

								thing2.x = -1000;
								thing2.y = -1000;
								thing2.status = 'INVISIBLE';

								if (thing2.level < itemClasses.length - 1) {
									let nextLevelIndex = thing2.level + 1;
									let NextClass = itemClasses[nextLevelIndex];
									
									let upgradedItem = new NextClass(mergeX, mergeY);
									upgradedItem.status = 'LANDED';
									
									if (NextClass.name.toLowerCase() === goal.toLowerCase()) {
										// clean kitchen grid
										gameObjects.length = 0;
										
										// Get a new random customer order
										goal = getRandomGoal();
										
										// Drop a brand new fresh starter item from the ceiling
										spawnNewItem();
										
										hasCollided = true;
										return; // Exit right away to start the new clean round
									}

									gameObjects.push(upgradedItem);
								}

								spawnNewItem();
								hasCollided = true; 
								return;
							}
						}
						else {
							// I want to land on top ONLY if it's coming down from above
							if (thing1.status === 'FALLING') {
								thing1.y = thing2.y - thing1.height;
									thing1.status = 'LANDED';
									spawnNewItem();
									hasCollided = true;
									return;
							}
						}
					}
				}
			});
		});
	}
}
		jklhjkbhjkb
// Move obbject L/R - press enter 
window.addEventListener('keydown',this.check,false); 
function check(e) {
	var code = e.keyCode;
	if (screen == "start") {
		if (code == 32){
			screen = "main";
		}
	} else if (screen == "main"){
		if (code == 37) { // left arrow pressed
				if (currentObject.status === 'TOP'){
					currentObject.x -= 15;
				}
				if (currentObject.x < 338) {
					currentObject.x = 338; // x-boundary
				}
				if (currentObject.status === 'LANDED'){
					// shouldnt move while on the ground
				}	
		} 	
		else if (code == 39) { // right arrow pressed
				if (currentObject.status === 'TOP'){
					currentObject.x+= 15;
				}
				if (currentObject.x > 927) { // x-boundary
					currentObject.x = 927;
				}
				if (currentObject.status === 'LANDED'){
					// shouldnt move while on the ground
				}
		} 
		if (code == 32) { // space key
					if (currentObject.status === 'TOP') {
						currentObject.status = "FALLING";
					}
		}
	}
}

	function detectCollision(ax, ay, aw, ah, bx, by, bw, bh){
	// Takes details of two objects as parameters and returns true or false whether they collide
	// IMPORTANT object A needs to be the smaller object  (unless they are the same size)
	// @author K Ramel
	// @lastModified 28/10/2026
	// @param	ax	(int)	- The x coordinate of object A
	// @param	ay	(int)	- The y coordinate of object A
	// @param	aw	(int)	- The width of object A
	// @param	ah	(int)	- The height of object A
	// @param	bx	(int)	- The x coordinate of object B
	// @param	by	(int)	- The y coordinate of object B
	// @param	bw	(int)	- The width of object B
	// @param	bh	(int)	- The height of object B
	// @return     (boolean)- true if there is a collision, false if not
		if (ax >= bx && ax <= bx+bw && ay >= by && ay <= by + by+bh) {
			return true;
		}
		if (ax+aw >= bx && ax+aw  <= bx+bw && ay >= by && ay <= by + by+bh) {
			return true;
		}
		if (ax >= bx && ax <= bx+bw && ay+ah >= by && ay <= by + by+bh) {
			return true;
		}
		if (ax+aw  >= bx && ax+aw  <= bx+bw && ay+ah >= by && ay <= by + by+bh) {
			return true;
		}
		return false
	}