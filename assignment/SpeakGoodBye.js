(function (window) {
	var byeSay = {};
	var speakWord = "Good Bye";
	byeSay.speak = function(name) {
    	console.log(speakWord + " " + name);
		}
	window.byeSay = byeSay;
  }	
)(window);