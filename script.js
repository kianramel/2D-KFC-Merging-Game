//TO-DO if y = floor stop moving 
// x-coordinate boundaries for the food sprites 


// load assets 
const customer1Img = new Image();
customer1Img.src = "img/customer1.png"; 
const level0Img = new Image();
level0Img.src = "img/level0.png"; 
canvas = document.getElementById('gameCanvas');

	class Customer { 
		constructor(x,y) { 
				this.x = x;
				this.y = y;
				this.width = 350;
				this.height = 550;
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
				this.status = 'TOP';
		}
		draw(){
			canvasContext.drawImage(level0Img, this.x, this.y, this.width, this.height)
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

var isFalling = false;   // Item starts still
const gravity = 12;      // Drop speed per frame
const floorY = 568;      // Floor position inside kitchen (kitchenY + kitchenHeight - saltHeight)

const gameObjects = []
const salt1 = new salt (632,1)
gameObjects.push(salt1);
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
	
	salt1.draw();//
	
	//Draw Score
}

function update(){ //WHOLE part
    // Handles the item falling when Enter is pressed
    if (salt1.status === 'FALLING') {
        salt1.y += gravity;

        // Stop the item when it hits the floor
        if (salt1.y >= floorY) {
            salt1.y = floorY;
            salt1.status = 'LANDED';
		
        }
    }
}

// Move obbject L/R - press enter 
window.addEventListener('keyup',this.check,false); 
	function check(e) {
		var code = e.keyCode;
		
			if (code == 37) { // left arrow pressed
				for (let thisObject of gameObjects) {
					if (thisObject.status === 'TOP'){
						thisObject.x -= 15;
						if (thisObject.x < 334) thisObject.x = 334;
					}
				}	
			} else if (code == 39) { // right arrow pressed
				for (let thisObject of gameObjects) {
					if (thisObject.status === 'TOP'){
					thisObject.x+= 15;
			} else if (code == 32) { // space key
				for (let thisObject of gameObjects) {
					if (thisObject.status === 'FALLING') //landed or falling
    }
}

/*
window.addEventListener('keyup',this.check,false); 
	function check(e) {
		var code = e.keyCode;
		
		if (code == 37) { 			//Left arrow pressed
			for (let thisObject of gameObjects) {
				if (isFalling == true){
					thisObject.x -= 15;
				}
			}
		} else if (code == 39) { 	//Right arrow pressed
			for (let thisObject of gameObjects) {
				thisObject.x += 15;
		} else if (code == 32) {  // space key
			for (let thisObject of gameObjects) {
				isFalling = true;
    }
}
--
function update(){
    // Handles the item falling when Enter is pressed
	for (let thisObject of gameObjects) {
		if (thisObject.status === 'FALLING'){
			thisObject.y += gravity;

        // Stop the item when it hits the floor
	for (let thisObject of gameObjects) {
        if (thisObject.y >= floorY) {
            thisObject.y = floorY;
            thisObject.status = 'LANDED';
		
        }
    }
}
*/