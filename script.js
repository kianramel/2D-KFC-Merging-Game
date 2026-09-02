//things to fix next period that i t cant be moved more to the right or left 
//can move it left and right after it reaches the floor 
//do the rest of the food items 
//merge give to customer 
//more different customer orders

// load assets 
const customer1Img = new Image();
customer1Img.src = "img/customer1.png"; 
const level0Img = new Image();
level0Img.src = "img/level0.png"; 
canvas = document.getElementById('gameCanvas');

// Set variables 
//splitting my screen one side for customer one side for the merging part
const leftWidth = 264; // 22% of screen width for customer
const rightX = 264; // Starts where the left side ends
const rightWidth = 936; // The remaining 78% for merging
	
// kitchen is the name of the merging area
const kitchenHeight = 736; // takes 92% of screen height
const kitchenWidth = 796; // takes 85% of right side width 

// calculations to make the kitchen be in the middle inside the right side (merge area)
const kitchenX = 334;
const kitchenY = 32;

//still fix it according to screen
//bubble dimensions 
const bubbleWidth = 305;
const bubbleHeight = 90;
const bubbleX = 15;
const bubbleY = 85;

//first bubble connecting to customer dimensions
const tailWidth1 = 30;
const tailHeight1 = 30;
const tailX1 = 70;
const tailY1 = 200;

//second bubble connecting to customer dimensions
const tailWidth2 = 20;
const tailHeight2 = 20;
const tailX2 = 90;
const tailY2 = 250;
	
const charWidth = 350; 
const charHeight = 550;
const charX = 7;
const charY = 220;

var saltX = 632;
var saltY = 1;
var saltWidth = 200;
var saltHeight = 200;

//fix above 

var isFalling = false;   // Item starts still
const gravity = 12;      // Drop speed per frame
const floorY = 568;      // Floor position inside kitchen (kitchenY + kitchenHeight - saltHeight)

const isGameRunning = true;
//const distance = 0;

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
	canvasContext.fillRect(0,0, leftWidth, 800);

	// Colour the right side  
	canvasContext.fillStyle = "#C46B63";
	canvasContext.fillRect(rightX, 0, rightWidth, 800);

	// colour inside the merging kitchen area 
	canvasContext.fillStyle = "white";
	canvasContext.fillRect(kitchenX, kitchenY, kitchenWidth, kitchenHeight);

	// Draw the red border outline 
	canvasContext.strokeStyle = "orange"; 
	canvasContext.lineWidth = 6; //thickness of the border
	canvasContext.strokeRect(kitchenX, kitchenY, kitchenWidth, kitchenHeight); 

	//draw speech bubble for customers order 
	canvasContext.fillStyle = "white"; 
	canvasContext.fillRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);

	canvasContext.strokeStyle = "black"; 
	canvasContext.lineWidth = 6; 
	canvasContext.strokeRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);

	//text inside the speech bubble 
	canvasContext.fillStyle = "black";
	canvasContext.font = "24px Arial";
	canvasContext.fillText("Could I please have fries?", 25, 140 );

	canvasContext.fillStyle = "white"; 
	canvasContext.fillRect(tailX1, tailY1, tailWidth1, tailHeight1);

	canvasContext.strokeStyle = "black"; 
	canvasContext.lineWidth = 6; 
	canvasContext.strokeRect(tailX1, tailY1, tailWidth1, tailHeight1);

	canvasContext.fillStyle = "white"; 
	canvasContext.fillRect(tailX2, tailY2, tailWidth2, tailHeight2);

	canvasContext.strokeStyle = "black"; 
	canvasContext.lineWidth = 6; 
	canvasContext.strokeRect(tailX2, tailY2, tailWidth2, tailHeight2);
	
	//Draw Customer + Item 
	canvasContext.drawImage(customer1Img, charX, charY, charWidth, charHeight); 
	canvasContext.drawImage(level0Img, saltX, saltY, saltWidth, saltHeight);
	
	//Draw Score
}

function update(){
    // Handles the item falling when Enter is pressed
    if (isFalling) {
        saltY += gravity;

        // Stop the item when it hits the floor
        if (saltY >= floorY) {
            saltY = floorY;
            isFalling = false; // Stop falling physics
        }
    }
}

// Move obbject L/R - press enter 
window.addEventListener('keyup',this.check,false); 
	function check(e) {
		var code = e.keyCode;
		if (code == 37) { 			//Left arrow pressed
			saltX -= 15;
		} else if (code == 39) { 	//Right arrow pressed
			saltX += 15;
		} else if (code == 32) {  // space key
        isFalling = true;
    }
}



