// load assets 
const customer1Img = new Image();
customer1Img.src = "img/customer1.png";

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

// Colour the customer side cream 
canvasContext.fillStyle = "#C46B63";
canvasContext.fillRect(0,0, leftWidth, canvas.height);

// Colour the right side deeper cream
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
const charX = (leftWidth - charWidth) / 2;
const charY = canvas.height - charHeight - 20;

// draw character 
canvasContext.drawImage(customer1Img, charX, charY, charWidth, charHeight);

//customer dimensions 
const bubbleWidth = leftWidth * 0.9
const bubbleHeight = canvas.height * 0.3
const bubbleX = (leftWidth - bubbleWidth)
const bubbleY = canvas.height - bubbleHeight - 20;

//draw speech bubble for customers order 
canvasContext.fillStyle = "white"; 
canvasContext.fillRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);

canvasContext.strokeStyle = "black"; 
canvasContext.lineWidth = 4; 
canvasContext.strokeRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);


  var myRAF = requestAnimationFrame(gameLoop);
}

//start the loop
gameLoop();
