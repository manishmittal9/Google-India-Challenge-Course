$('document').ready(function (){
	const canvas = $('#pixelCanvas');

	// Select color input
	canvas.on('click', 'td', function() {
	  	var colour = $('#colorPicker').val();
	  	$(this).css('background', colour);
	});

	// Select size input
	$('#sizePicker').on('submit', function(event) {
	  	event.preventDefault();
	  	makeGrid();
	});

	// When size is submitted by the user, call makeGrid()

	var width = 1;
	var height = 1;

	function makeGrid() {
		width = $('#inputWeight').val();
		height = $('#inputHeight').val();
		canvas.find('tr').remove();
		for(let row = 0; row < width; row++){
		    canvas.append('<tr></tr>');
		    for(let column = 0; column < height; column++){
		        canvas.children().last().append('<td></td>');
		    }
		}
	}

	$('#reset').click(function () {
    	width = 1;  
    	height = 1;
    	$("table").empty(); 
    	pickColor = $('#colorPicker').val('#000000');
	});

});