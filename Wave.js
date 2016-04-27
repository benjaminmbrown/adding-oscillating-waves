var Oscillator = function(){
	this.theta

	this.oscillate = function(){
		this.angle.add(this.velocity);
	}

	this.display = function(){
		var x = sin(this.angle.x) * this.amplitude.x;
		var y = sin(this.angle.y) * this.amplitude.y;

		push();
		translate(width/2, height/2);
		stroke(245);
		strokeWeight(2);
		fill(127,127);
		//line(0,0,x,y);
		ellipse(x,y,32,32);
		pop();
	}

	this.calculateWave = function(){


	}
}