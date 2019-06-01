
jQuery.fn.mostrarelemento = function (){

	this.each( function(){
		elemento = $(this);
		elemento.css("background","#01E592");
		elemento.show("slow");
	});
	return this;
};

