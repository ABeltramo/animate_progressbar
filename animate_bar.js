(function( $ ) {
    $.fn.animate_progressbar = function(value,duration,complete) {
	   if (value == null)value = 0;
       if (duration == null)duration = 1000;
	   if (complete == null)complete = function(){};
	   var PBar = this;
	   var ValNow = this.attr("aria-valuenow");
	   var Pas = duration/(value-ValNow);
	   if (ValNow < value){
		   var pGress = setInterval(function() {
				if (ValNow > value)
					clearInterval(pGress);
				 else
					PBar.progressbar({value: ValNow++});
				
			},Pas);
	   }
		else{
			var pGress = setInterval(function() {
				if (ValNow < value)
					clearInterval(pGress);
				 else
					PBar.progressbar({value: ValNow--});
				
			},Pas);
		}
	   complete();   
    }
})( jQuery );