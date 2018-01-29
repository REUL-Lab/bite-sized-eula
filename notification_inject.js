$(document).ready(function() {
    /*var buttons = document.getElementsByTagName('div');
	console.log("Loading for " + buttons.length + " elements.");
	for(i = 0; i < elements.length; i++){
		console.log("Tag is currently " + elements[i].textContent);
		elements[i].click(function(event){
			console.log("Click felt!")
			var thisBtn = $(this);
			console.log("Button on page was clicked.");
			thisBtn.append("<p>Test</p>");
		});
	}*/
	
	function createNotification(e){
		console.log('this is the click');
		e.preventDefault();
		e.stopPropagation();
		$(this).append("<p>Test</p>")
	}
	console.log("Adding to all buttons");
	$("button").on('click', createNotification);
	$("div").on('click', createNotification);
	
});