document.observe("dom:loaded", function() {
    /* habilitando as partes 
    ATENÇÃO: comentar este trecho para o software oficial 
       
    for(var b = 0; b < Partes.length; b++)
    {
    	if($('SalvaLocal').Pega(nomeSoft, 'automacao_atividade_'+PosicaoAtual.Atividade+'_parte_'+b) != 3)
    		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_'+PosicaoAtual.Atividade+'_parte_'+b, '2');
    } */

});

var salvaLocalOK = false,
    documentoOK = false;
/*
Event.observe(document, 'flash:SalvaLocal', function(ev) {
    salvaLocalOK = true;
    TentaCarregar();
})*/

Event.observe(window, 'load', function() {
    salvaLocalOK = true;
    documentoOK = true;
    TentaCarregar();

})

function TentaCarregar() {
    if (salvaLocalOK && documentoOK) {

        BlocoNotas = new Blocao();

        initAtividade('atividade_2', 'parte1');

        Event.observe('parte1_q1_a', 'change', function() {
            setResp("atividade_2_parte1_q1_a", $('parte1_q1_a').value);
        });
    }
}

/*
	As funções a abaixo são usadas para corrigir as questões. Em geral elas devem
	devolver um array com o resultado de cada input do item da questão. Cada tipo
	de questão, porém, possui certas peculiaridades. O padrão de resposta para
	cada campo é:
		- true, se está correto;
		- false, se está certo;
		- null, se não deve ser aplicada nenhuma correção
	
	Estudem esse código pra ver cada caso.
	A variável valor é sempre um Array com os valores dos inputs. Não é obrigatório
	o seu uso, visto que cada input possui um ID. Mas pode ser usado por conveniencia.
*/

//Um input de texto cuja resposta correta é 'qwe'

function corrige_q_1_a(valor) {
    var func = $('parte1_q1_a').value;
    var func2 = $('parte1_q1_a').value;
    var correto, correto1, correto2;

    if (func != null) {

        func = func.replace(/a/g, "");
        func = func.replace(/[c-o]/g, "");
        func = func.replace(/[q-z]/g, "");
        func = func.replace(/A/g, "");
        func = func.replace(/[C-O]/g, "");
        func = func.replace(/[Q-Z]/g, "");
        if (func2 != func) return [false];

        func = func.replace(/B/g, "b");
        func = func.replace(/P/g, "(x)");
        func = func.replace(/p/g, "(x)");
        func = func.replace(/b/g, "(b)");
        func2 = func.replace(/b/g, "2");
        func = func.replace(/b/g, "1");

        if (func != "")
            correto1 = compararFuncao(func, "((x/4)-1)^2");
        else correto1 = false;
        if (func2 != "")
            correto2 = compararFuncao(func2, "((x/4)-2)^2");
        else correto2 = false;
        if (correto1 == true && correto2 == true) {
            correto = true;
        } else correto = false;
    } else {
        correto = false;
    }

    console.log(correto1);
    console.log(correto2);
    console.log(correto);
    return [correto];
}


function compararFuncao(func1, func2) {
    var applet = document.ggbApplet;
    applet.setErrorDialogsActive(false);

    applet.evalCommand('func_1(x)=10000');
    applet.evalCommand('func_2(x)=10000');
    applet.evalCommand('func_3(x)=10000');
    applet.evalCommand('RespComparador = Integral[0,-1,1]');

    applet.setVisible('func_1', false);
    applet.setVisible('func_2', false);
    applet.setVisible('func_3', false);
    applet.setVisible('RespComparador', false);

    primeirafuncao = 'func_1(x)=' + func1;
    segundafuncao = 'func_2(x)=' + func2;
    applet.evalCommand(primeirafuncao);
    applet.evalCommand(segundafuncao);
    applet.evalCommand('func_3(x)=abs(func_1(x)-func_2(x))');
    applet.evalCommand('RespComparador = Integral[func_3(x),-1,1]');
    saida = applet.getValue('RespComparador');
    console.log(saida);
    if (saida < 0.00001)
        return true;
    else
        return false;
}

function tudoCerto() {
    setResp('atividade_2', 3);
    $('Mapinha').Salva('janelas', 'atividade_2', '3');
}