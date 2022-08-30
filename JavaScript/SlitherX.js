let slytherin = [];
const velocity = 1;
let tailpiece = 2;
let xVelocity = 1;
let yVelocity = 0;
let stageBox = 30;
let size = 20;
let positionX = Math.floor(Math.random() * stageBox);
let positionY = Math.floor(Math.random() * stageBox);
let foodX = 15;
let foodY = 15;


window.onload = function() {

    let canvas = document.getElementById("canvas");
    let scenes = canvas.getContext("2d");
    document.addEventListener("keydown", function keyPush(event) {

        switch(event.keyCode) {

            case 37:
                xVelocity = -1;
                yVelocity =  0;
                break;

            case 38:
                xVelocity =  0; 
                yVelocity = -1;
                break;

            case 39:
                xVelocity = 1;
                yVelocity = 0;
                break;

            case 40:
                xVelocity = 0; 
                yVelocity = 1;
                break;
        }
    }),


	setInterval(function games() {

		let score = 0;
		positionX += xVelocity;
		positionY += yVelocity;
	
		if(positionX < 0) { positionX = stageBox - 1; }
		if(positionX > stageBox - 1) { positionX = 0; }
		if(positionY < 0) { positionY = stageBox - 1; }
		if(positionY > stageBox - 1) { positionY = 0; }
	
		scenes.fillStyle = "#4b5d15";
		scenes.fillRect(0, 0, canvas.width, canvas.height);
		scenes.fillStyle = "#DC143C";
		scenes.fillRect(foodX * size, foodY * size, size - 1, size - 1);
		scenes.fillStyle = "#00FF00";

		
		for(let i = 0; i < slytherin.length; i++) {

			scenes.fillRect(slytherin[i].x * size, slytherin[i].y * size, size - 1, size - 1);
			score += 1;
		
			if(slytherin[i].x === positionX && slytherin[i].y === positionY) {
			
				tailpiece = 2;
				confirm("Your Slither Perished!!\nYour Score is " + score + " Points");
				clearInterval(games);
			}
		}

		slytherin.push({ x: positionX, y: positionY });

		while(slytherin.length > tailpiece) { slytherin.shift(); }

		if(foodX == positionX && foodY == positionY) {
			
			tailpiece++;
			foodX = Math.floor(Math.random() * stageBox);
			foodY = Math.floor(Math.random() * stageBox);
		}

	}, 120)
};

		
