$(window).scroll(function() {
    if ($(this).scrollTop() > 75) { // this refers to window
    	$('#mainNav').css({"background":"rgba(36, 73, 117,.9)"});
    	$("#changeNav").removeClass('container');
    	$("#changeNav").addClass('container-fluid');
    }else{
    	$('#mainNav').css({"background":"transparent"});  
    	$("#changeNav").removeClass('container-fluid');
    	$("#changeNav").addClass('container');  	
    }
});