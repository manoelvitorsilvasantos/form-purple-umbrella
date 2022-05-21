var icon_senha = false;

$(document).ready(function(){
       $('img.eye-pass').attr('src', 'data/eye-pass-desactive.svg');
	$('img.eye-pass').width(16);
	$("img.eye-pass").click(function(){
              if(icon_senha == false){
       	      $('#senha').attr('type', 'text');
       		icon_senha = true;
       		$('img.eye-pass').attr('src', 'data/eye-pass-active.svg');
              }
       	else{
       	      $('#senha').attr('type', 'password');
       		icon_senha = false;
       		$('img.eye-pass').attr('src', 'data/eye-pass-desactive.svg');
       	}
 	});
});