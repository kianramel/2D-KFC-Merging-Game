// load assets 
const customer1Img = new Image();
customer1Img.src = "img/customer1.png";

//load assets for the food merging make a list? 

const canvas = document.getElementById('gameCanvas');
const canvasContext = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function gameLoop() {
  canvasContext.clearRect(0,0,canvas.width,canvas.height);

//splitting my screen one side for customer one side for the merging part
const leftWidth = canvas.width * 0.22; // 22% of screen width for customer
const rightX = leftWidth; // Starts where the left side ends
const rightWidth = canvas.width - leftWidth; // The remaining 78% for merging

// Colour the customer side  
canvasContext.fillStyle = "#C46B63";
canvasContext.fillRect(0,0, leftWidth, canvas.height);

// Colour the right side  
canvasContext.fillStyle = "#C46B63";
canvasContext.fillRect(rightX, 0, rightWidth, canvas.height);

// kitchen is the name of the merging area
const kitchenHeight = canvas.height * 0.92; // takes 92% of screen height
const kitchenWidth = rightWidth * 0.85; // takes 85% of right side width 

// calculations to make the kitchen be in the middle inside the right side (merge area)
const kitchenX = rightX + (rightWidth - kitchenWidth) / 2;
const kitchenY = (canvas.height - kitchenHeight) / 2;

// colour inside the merging kitchen area 
canvasContext.fillStyle = "white";
canvasContext.fillRect(kitchenX, kitchenY, kitchenWidth, kitchenHeight);

// Draw the red border outline 
canvasContext.strokeStyle = "orange"; 
canvasContext.lineWidth = 6; //thickness of the border
canvasContext.strokeRect(kitchenX, kitchenY, kitchenWidth, kitchenHeight); 

// customer dimensions
const charWidth = leftWidth * 1.4; 
const charHeight = canvas.height * 0.7;
const charX = -85;
const charY = 250;

// draw character 
canvasContext.drawImage(customer1Img, charX, charY, charWidth, charHeight);

//customer dimensions 
const bubbleWidth = leftWidth * 0.8
const bubbleHeight = canvas.height * 0.1
const bubbleX = 40;
const bubbleY = 85;

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

//first bubble connecting to customer dimensions
const tailWidth1 = leftWidth *0.1
const tailHeight1 = canvas.height *0.05
const tailX1 = 75;
const tailY1 = 195;

canvasContext.fillStyle = "white"; 
canvasContext.fillRect(tailX1, tailY1, tailWidth1, tailHeight1);

canvasContext.strokeStyle = "black"; 
canvasContext.lineWidth = 6; 
canvasContext.strokeRect(tailX1, tailY1, tailWidth1, tailHeight1);

//second bubble connecting to customer dimensions
const tailWidth2 = leftWidth *0.08
const tailHeight2 = canvas.height *0.04
const tailX2 = 100;
const tailY2 = 260;

canvasContext.fillStyle = "white"; 
canvasContext.fillRect(tailX2, tailY2, tailWidth2, tailHeight2);

canvasContext.strokeStyle = "black"; 
canvasContext.lineWidth = 6; 
canvasContext.strokeRect(tailX2, tailY2, tailWidth2, tailHeight2);

//dropping the items for merging
	arr = new Array();
	
	function draw()
	{  
		//canvasContext.fillRect(0,0,800,800);
		var square = kitchen(); 
		
		if (Math.random() < 0.1)
		{
			square.x = Math.floor(Math.random() * 600);
			square.y = 0;
			arr.push(square);
		}
		
		for (i=arr.length -1; i > 0; i--)
		{
			arr[i].y++;
			
			canvasContext.beginPath();
			canvasContext.arc(arr[i].x, arr[i].y, 20,0, Math.PI*2, true);
			canvasContext.fillStyle = "red";
			canvasContext.fill();
		}
	
	}
	
	setInterval(draw,100);
	
	//var gravity = 1;


  var myRAF = requestAnimationFrame(gameLoop);
}

//start the loop
gameLoop();
