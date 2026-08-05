// load assets 
const customerImg = new Image();
customerImg.src = "img/customer.png";

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
canvasContext.fillStyle = "#FFFDD0";
canvasContext.fillRect(0,0, leftWidth, canvas.height);

// Colour the right side deeper cream
canvasContext.fillStyle = "#F5EEBB";
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
canvasContext.strokeStyle = "#E4002B"; //kfc red colour
canvasContext.lineWidth = 6; //thickness of the border
canvasContext.strokeRect(kitchenX, kitchenY, kitchenWidth, kitchenHeight); 

  var myRAF = requestAnimationFrame(gameLoop);
}

//start the loop
gameLoop();
