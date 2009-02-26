(function() {
	if (typeof jQuery == 'undefined') {
  	var e = document.createElement('script');
		
		e.onload = function() { 
			jQuery.noConflict();
			
			var l = 'Loaded jQuery ' + jQuery.fn.jquery;
			
			if(typeof console == 'undefined') {
				alert(l);
			} else {
				console.info(l);
			}
			
		};
    
		e.setAttribute('type', 'text/javascript');
    e.setAttribute('src', 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js');
		document.body.appendChild(e);
	}
})();