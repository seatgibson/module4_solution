(function (window) {
	var helloSay = {};
	var speakWord = "Hello";
	helloSay.speak = function (name) {
    console.log(speakWord + " " + name);
		}
	window.helloSay = helloSay;
  }	
)(window);