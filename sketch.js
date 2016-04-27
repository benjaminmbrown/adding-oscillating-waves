var xSpacing = 8; // spacing between pos
var w; //wave width
var maxWaves = 5;

var theta = 0.0;
var amplitude = []; //wave height
var dx = []; //x increment value
var yValues;



function setup() {
 createCanvas(640, 360);
 w = width+16;

 //make some waves;
var period = random(50,200);
 for(var i =0; i<maxWaves; i++){
 	amplitude[i] = random(10,90);
 	var period = random(50,300);
 	dx[i] = (TWO_PI / period) * xSpacing;
 }

 yValues = [];
}

function draw(){
	background(14);
	calculateWave();
	renderWave();
}

function calculateWave(){
	theta += 0.02;

	for (var i = 0; i< w/xSpacing; i++){
		yValues[i] = 0;
	}
	//start all heights to zero
	for(var j = 0; j<maxWaves; j++){
		//swap sine and cosine
		var x = theta;
		for(var i = 0; i<yValues.length;i++){
			if(j%2 === 0){
				yValues[i] += sin(x)*amplitude[j];
			}
			else{
				yValues[i] += cos(x)*amplitude[j];
				x+=dx[j];
			}
		}
	}

}

function renderWave(){
	noStroke();
	fill(255,100);
	//ellipseMode(CENTER);
	for(var x = 0; x<yValues.length; x++){
		ellipse(x*xSpacing, height/2+yValues[x],16,16);
	}
}