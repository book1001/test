let img;
let vid;
let vScale = 30; //Note) module size
let monoSynth;

function preload() {
	img = loadImage('Sample_2D animation.gif');
	// img = loadImage('lim5.jpeg');
	// img = createCapture(VIDEO);
	// vid = createVideo(
  //   ['cat.mp4'],
  //   vidLoad
  // );
	// vid.size(100, 100);
	// img = loadImage('palm1.jpg');
	// img = loadImage('original/Halim.png');

	shapes = [];
	let dataList = ['data/04.svg', 'data/04.svg'];
	let randomData = random(dataList); // select random word

	// shapes.push(loadImage('data/02.svg')); //Note) module: 0 value ~
	// shapes.push(loadImage('data/07.svg'));
	// shapes.push(loadImage('data/08.svg'));
	shapes.push(loadImage('data/03.svg'));
	shapes.push(loadImage('data/04.svg'));
	shapes.push(loadImage('data/05.svg'));

	// shapes.push(loadImage('data/07.svg'));
	// shapes.push(loadImage('data/08.svg'));
	// shapes.push(loadImage('data/09.svg'));
	// shapes.push(loadImage('data/10.svg'));
	// shapes.push(loadImage('data/11.svg'));
	// shapes.push(loadImage('data/12.svg'));
	// shapes.push(loadImage('data/13.svg'));
	// shapes.push(loadImage('data/14.svg'));
	shapes.push(loadImage(randomData)); //Note) module: ~ 255 value

	// shapesG = [];
	// shapesG.push(loadImage('data/096.svg')); //Note) module: 0 value ~
	// shapesG.push(loadImage('data/117.svg')); //Note) module: ~ 255 value
}

p5.Image.prototype.nextFrame = function(){
	let f = this.getCurrentFrame();
	if(f>=img.numFrames()-1){
		f = -1;
	}
	return this.setFrame(++f);
}

function setup() {
	// canvas = createCanvas(400, 400);
	canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index','-1');
  // canvas.mouseMoved(playSynth);
  monoSynth = new p5.MonoSynth();
	console.log('no loop');



	frameRate(15);
}


var i = 0

function draw() {
	// img.render();
	// img.blob.nextFrame();
	img.resize(width / vScale, height / vScale);
	img.loadPixels();
	for(x = 0; x < img.width * vScale; x = x + 1){
		for(y = 0; y < img.height * vScale; y = y + 1){
			var titleWidth = 800 / img.width; //Note) image size result (make it same as canvas size)
			var titleHeight = 800 / img.height;
			var posX = titleWidth * x;
			var posY = titleHeight * y;

			var c = img.get(min(x, img.width - 1), y);

			// var greyscale = round(red(c) * 0.222 + green(c) * 0.707 + blue(c) * 0.071);
			var greyscaleR = round(red(c) * 1);
			var greyscaleG = round(green(c) * 1);
			// var greyscale = round(blue(c) * 1);

			var gradientToIndexR = round(map(greyscaleR, 0, 255, 0, shapes.length - 1));
			var gradientToIndexG = round(map(greyscaleG, 0, 255, 0, shapes.length - 1));

			var motion = image(shapes[gradientToIndexR], vScale*x, vScale*y, vScale, vScale);
			// blendMode(MULTIPLY);
			// image(shapes[gradientToIndexG], vScale*x, vScale*y, vScale, vScale);
			// image(shapes[gradientToIndexR], posX, posY, vScale, vScale);
			// image(shapes[gradientToIndexG], x * vScale + vScale / 2,  posY, titleWidth, vScale / 255 * greyscaleG);
			image(motion, 300, 300, 100, 100);

			// strokeWeight(0);
			// fill('#fae');
			// ellipse(x * vScale + vScale / 2, y * vScale + vScale / 2, vScale / 255 * greyscaleR, vScale / 255 * greyscaleR);
			//
			// blendMode(MULTIPLY);
			// // fill('rgb(0,255,0)');
			// fill(255, 255, 0);
			// ellipse(x * vScale + vScale / 2, y * vScale + vScale / 2, vScale / 255 * greyscaleR, vScale / 255 * greyscaleG);
			}
	}


}


function mousePressed() {
  img.pause();
}

function mouseReleased() {
  img.play();
}


function mouseWheel(event) {
  userStartAudio();

  let note = random(['Fb4', 'G4']);
  // note velocity (volume, from 0 to 1)
  let velocity = random();
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1/6;

  monoSynth.play(note, velocity, time, dur);
	// return false;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
		userStartAudio();

		  let note = random(['Fb4', 'G4']);
		  // note velocity (volume, from 0 to 1)
		  let velocity = random();
		  // time from now (in seconds)
		  let time = 0;
		  // note duration (in seconds)
		  let dur = 1/6;

		  monoSynth.play(note, velocity, time, dur);
  } else if (keyCode === RIGHT_ARROW) {
		userStartAudio();

		  let note = random(['Fb4', 'G4']);
		  // note velocity (volume, from 0 to 1)
		  let velocity = random();
		  // time from now (in seconds)
		  let time = 0;
		  // note duration (in seconds)
		  let dur = 1/6;

		  monoSynth.play(note, velocity, time, dur);
  }
}
