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
const bubbleWidth = 211;
const bubbleHeight = 80;
const bubbleX = 40;
const bubbleY = 85;

//first bubble connecting to customer dimensions
const tailWidth1 = leftWidth *0.1;
const tailHeight1 = 40;
const tailX1 = 75;
const tailY1 = 195;

//second bubble connecting to customer dimensions
const tailWidth2 = leftWidth *0.08;
const tailHeight2 = 32;
const tailX2 = 100;
const tailY2 = 260;
	
const charWidth = leftWidth * 1.4; 
const charHeight = 560;
const charX = -85;
const charY = 250;

const saltX = 1050;
const saltY = 1;
const saltWidth = 200;
const saltHeight = 200;

//fix above 

//const gravity = 1;
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

//fix below
	//draw speech bubble for customers order 
	canvasContext.fillStyle = "white"; 
	canvasContext.fillRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);

	canvasContext.strokeStyle = "black"; 
	canvasContext.lineWidth = 6; 
	canvasContext.strokeRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);

	//text inside the speech bubble 
	canvasContext.fillStyle = "black";
	canvasContext.font = "26px Arial";
	canvasContext.fillText("Could I please have fries?", 50, 140 );

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

//fix above 
	//Draw Customer + Item 
	canvasContext.drawImage(customer1Img, charX, charY, charWidth, charHeight); 
	canvasContext.drawImage(level0Img, saltX, saltY, saltWidth, saltHeight);
	
	//Draw Score
}

function update(){
}	


// Move obbject L/R - press enter 
window.addEventListener('keyup',this.check,false); 
	function check(e) {
		var code = e.keyCode;
		if (code == 37) { 			//Left arrow pressed
			saltX -= 5;
		} else if (code == 39) { 	//Right arrow pressed
			saltX += 5;
		}
	}



