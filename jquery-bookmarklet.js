(function() {
	if (typeof jQuery == 'undefined') {
  	var e = document.createElement('script');
		e.onload = function() {
			jQuery.noConflict();
		};
    
		e.setAttribute('type', 'text/javascript');
    e.setAttribute('src', 'http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js');
		document.body.appendChild(e);
   }
})();