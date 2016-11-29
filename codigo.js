$(document).ready(function(){
	var formulario = $('form');
	var metodo = formulario.attr('method');
	console.log(metodo);
	var url = formulario.attr('action');
	console.log(url);
	var boton = $('#boton');
	var usuario = $('#usuario');
	var contrasena = $('#contrasena');
	var user,pass;
	boton.on('click', function(e){
		e.preventDefault();
		conole.log(data);
	$.ajax({
		url:url_formulario,
		type: metodo,
		datos: data,j
		beforeSend:function(){
			user = usuario.value();
			pass = contrasena.value();
			console.log(user);
			formulario.hide();
			$('imagen').html('<img src="cargando.gif" width="70%"');

		},
		succes:function(resp){
			console.log(resp);
			if (resp=='correcto'){
				console.log('hola');
			}

			}else{
				$('imagen').html('<p class="error"valores ingresados erroneos</p>')
			}

		},
		complete: function(){
			//$('.imagen').hide();

		}

		}
		
		});
	});
});