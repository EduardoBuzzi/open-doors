var url1;
var url2;

try{
	const form = document.getElementById('conversion-form');
	var url1 = atob(form.dataset.assetAction);
  	var url2 = document.getElementsByName('redirect_to')[0].value;
} catch(err){}

if(url1) {
	adicionarBotao(url1);
} else if(url2) {
	adicionarBotao(url2);
}




function adicionarBotao(urp) {
    var novoElemento = document.createElement("a");
    var btn = document.createTextNode("Ver página destino");
    novoElemento.setAttribute("href", urp);
    novoElemento.setAttribute("id", "rd-button-joq3m2m7")
    novoElemento.setAttribute("target", "_blank")  
    novoElemento.appendChild(btn);
    var elementoAntes = document.getElementById("rd-button-joq3m2m7");
    if(elementoAntes == null){
      elementoAntes = document.querySelectorAll('input[type=submit]')[0]
      novoElemento.setAttribute("class", "call_button")	
      if(elementoAntes == null){
          elementoAntes = document.querySelectorAll('button[type=submit]')[0]
          novoElemento.setAttribute("class", "call_button")	
    		if(elementoAntes == null){
				elementoAntes = document.querySelector('form').lastElementChild	
    		}	
      	}
    }
    elementoAntes.after(novoElemento)
}

window.setTimeout('rdValidate()', 2500);
function rdValidate() {
	var rdValidation = document.querySelector('.rd-paywall');
	if(rdValidation != null){
      rdValidation.style.display = 'none';
      document.querySelector('body').classList.remove("is-blocked")
	  window.alert('Depois que você clicar em OK, vou tirar a verificação do RD para você ;)')
    }
}
