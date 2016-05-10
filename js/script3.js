$(document).ready(function(){
	$('input').focus();

	// declaring variables; fetching DOM elements
	var input = $('#addItems');
	var form = $('form');
	
	// preventing the form from refreshing
	$('#textBox').submit(function(event) {
		event.preventDefault();
		console.log('Prevent Form Refresh');
	});

	// enter event handler & preventing input textbox refreshing
	
	input.keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			console.log('Prevent Default');
	
			// declaring variable to contain input value
			var tVal = $('#addItems').val();

			// checking if input is empty through the trim method
			if(!$.trim($('#addItems').val())) {
				// if empty user gets alert
				alert("Please enter an item") } else {
					// item appended to list
					$(".list ul").append("<li class='toBuy'> <div class='check'></div>"+tVal+"<div class='remove'></div></li>");
					// input text-box emptied
					$('#addItems').val("");
					// automatic cursor focus on input
					input.focus();
		}
	}



	});


// sortable method
	$('.shoppingList').sortable( { axis: 'y'} );

//mark appended item as bought
	$(document).on('click', '.check', function() {
		$(this).closest('li').toggleClass('bought');
		$(this).toggleClass('unCheck');
		console.log('appended item bought');
	});

// remove ammended list item
	$(document).on('click', '.remove', function() {
		$(this).closest('li').remove();
		console.log('ammended item removed');
	});

});