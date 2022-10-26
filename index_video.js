let img;
let vScale = 30; //Note) module size

function preload() {
// 	img = loadImage('Sample_2D animation.gif');
	img = loadImage('cat.jpg');

	shapes = [];
	let dataList = ['data/04.svg', 'data/04.svg'];
	let randomData = random(dataList); // select random word
	shapes.push(loadImage('data/03.svg'));
	shapes.push(loadImage('data/04.svg'));
	shapes.push(loadImage('data/05.svg'));;
	shapes.push(loadImage(randomData)); //Note) module: ~ 255 value
}



function setup() {
	// canvas = createCanvas(400, 400);
	canvas = createCanvas(windowWidth, windowHeight);
  	canvas.style('z-index','-1');
  
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

			image(shapes[gradientToIndexR], vScale*x, vScale*y, vScale, vScale);

			}
	}
	
	
}



function draw() {

}


