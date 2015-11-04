$(function() {

	var slides = ["/city1.gif","/city2.gif", "/city4.gif"]
	var counter = 0;
	var randomSlide = null;
	var randomSlideTwo = null;

	// put in counter that goes up every time you click it goes up until it gets to the length of the array then reset

    console.log( "ready!" );
	$('#image1').click(function() {
	window.open("http://bartinder-dev.elasticbeanstalk.com/home")
	});

	$('#image2').click(function() {
	window.open("https://powerful-taiga-9352.herokuapp.com");
	});

	$('#firstButton').on('click', function() {
		randomSlideTwo = slides[Math.floor(Math.random()*slides.length)]
		var urlArray = $('#head').css("background-image");
		var splitUrl = urlArray.split("/", 10);
		var currentSlide = splitUrl[splitUrl.length - 1];
		randomSlideTwoArray = randomSlideTwo.split('/',10);
		randomSlideTwo = randomSlideTwoArray[randomSlideTwoArray.length - 1];
		console.log(randomSlideTwo + ")")
		console.log(currentSlide)	

		while ((randomSlideTwo + ")") === currentSlide) {
			randomSlideTwo = slides[Math.floor(Math.random()*slides.length)]
		};

		$('.bg__bar').css("background-image", "url(images/" + randomSlideTwo + ")");
	});

	$('#secondButton').on('click', function() {
		randomSlideTwo = slides[Math.floor(Math.random()*slides.length)]
		var urlArray = $('#middle').css("background-image");
		var splitUrl = urlArray.split("/", 10);
		var currentSlide = splitUrl[splitUrl.length - 1];
		randomSlideTwoArray = randomSlideTwo.split('/',10);
		randomSlideTwo = randomSlideTwoArray[randomSlideTwoArray.length - 1];
		console.log(randomSlideTwo + ")")
		console.log(currentSlide)	

		while ((randomSlideTwo + ")") === currentSlide) {
			randomSlideTwo = slides[Math.floor(Math.random()*slides.length)]
		};

		$('#middle').css("background-image", "url(images/" + randomSlideTwo + ")");
	});

		$('#thirdButton').on('click', function() {
		randomSlideTwo = slides[Math.floor(Math.random()*slides.length)]
		var urlArray = $('#butt').css("background-image");
		var splitUrl = urlArray.split("/", 10);
		var currentSlide = splitUrl[splitUrl.length - 1];
		randomSlideTwoArray = randomSlideTwo.split('/',10);
		randomSlideTwo = randomSlideTwoArray[randomSlideTwoArray.length - 1];
		console.log(randomSlideTwo + ")")
		console.log(currentSlide)	

		while ((randomSlideTwo + ")") === currentSlide) {
			randomSlideTwo = slides[Math.floor(Math.random()*slides.length)]
		};

		$('#butt').css("background-image", "url(images/" + randomSlideTwo + ")");
	});
		
});