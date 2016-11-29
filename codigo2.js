var micaja = $('#micaja');
var texto = micaja.val();
function validar(){
if(texto.length>=6){
	
	micaja.addClass('aprobado');

}
else{
	
	micaja.addClass('noaprobado');
}
}

micaja.on('blur', validar);
