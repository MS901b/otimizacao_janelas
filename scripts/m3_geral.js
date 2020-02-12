/********************
 * Funcoes do Flash *
 ********************/

// Retorna uma Array com todas as inputs que começam com "parte"
function pegaNomesResp(id) {
	var allElements = $$('[id^='+id+']');
	var allNames = Array();
	for (var i=0;i<allElements.length;i++) 
	{
		allNames.push(allElements[i].id);
	}
	return allNames.uniq();
}


//Funcao que pega no flash o valor da resposta do id passado.
function getResp(id) {
	return $('SalvaLocal').Pega(nomeSoft,id);
}

//Funcao que guarda no flash o valor da resposta do id passado.
function setResp(id,valor) {
	$('SalvaLocal').Salva(nomeSoft,id,valor);
}

// Apaga todas as resposta guardadas.
function apagaTodasResp() {
	return ($('SalvaLocal').ApagaTudo(nomeSoft));
}

function apagaResp(valor) {
	return $('SalvaLocal').Apaga(nomeSoft,valor);
}

// Funções de máximo e mínimo para Array. Não testado no IE.
Array.prototype.max = function() {
	var max = this[0];
	var len = this.length;
	for (var i = 1; i < len; i++) if (this[i] > max) max = this[i];
	return max;
}

Array.prototype.min = function() {
	var min = this[0];
	var len = this.length;
	for (var i = 1; i < len; i++) if (this[i] < min) min = this[i];
	return min;
}

function trataFloat(id)
{
	var valor=$(id).value;
	if(valor!='')
	{ 
		valor=valor.replace(",",".");
		if(!(isNaN(valor)))
		{
			valor=parseFloat(valor);
			valor=valor.toFixed(2);
			$(id).value=valor;
		}
	}
}