
jQuery.fn.ocultaelemento = function (){

	this.each( function(){
		elemento = $(this);
		elemento.css("background","#AFF803");
		elemento.hide("slow");
	});
	return this;
};

