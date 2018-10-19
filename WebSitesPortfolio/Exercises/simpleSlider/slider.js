autoSlider();
var left = 0;
var timer = 0;

function autoSlider() {
	timer = setTimeout(function(){
	var row = document.getElementById("row");
	left = left - 128;
	
		if (left < -640) {
			left = 0;
			clearTimeout(timer);
		}
		row.style.left = left + 'px';
		autoSlider();
	}, 1000);
}
