document.observe("dom:loaded", function() {
    /*habilitando as partes 
    ATENÇÃO: comentar este trecho para o software oficial 
       
    for(var b = 0; b < Partes.length; b++)
    {
    	if($('SalvaLocal').Pega(nomeSoft, 'automacao_atividade_'+PosicaoAtual.Atividade+'_parte_'+b) != 3)
    		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_'+PosicaoAtual.Atividade+'_parte_'+b, '2');
    }*/

});

var salvaLocalOK = false,
    documentoOK = false;
var ggbOk = false;

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
    if ((PosicaoAtual.Parte == 2) || (PosicaoAtual.Parte == 5)) ggbOk = true;

    if (salvaLocalOK && documentoOK && ggbOk) {
        BlocoNotas = new Blocao();
        initAtividade('atividade_1', 'parte' + (PosicaoAtual.Parte + 1));
        if (PosicaoAtual.Parte == 0) {
            Event.observe('parte1_q1_a_1', 'input:change', function() {
                setMultiplaEscolha('atividade_1_parte1_q1_a_', 1, 3);
            });
            Event.observe('parte1_q1_a_2', 'input:change', function() {
                setMultiplaEscolha('atividade_1_parte1_q1_a_', 2, 3);
            });
            Event.observe('parte1_q1_a_3', 'input:change', function() {
                setMultiplaEscolha('atividade_1_parte1_q1_a_', 3, 3);
            });
        }
        if (PosicaoAtual.Parte == 1) {
            Event.observe('parte2_q2_a_22', 'change', function() {
                trataCelula('parte2_q2_a_22', 'parte2_q2_a_23', 'parte2_q2_a_24');
            });
            Event.observe('parte2_q2_a_23', 'change', function() {
                trataCelula('parte2_q2_a_23', 'parte2_q2_a_22', 'parte2_q2_a_24');
            });
            Event.observe('parte2_q2_a_32', 'change', function() {
                trataCelula('parte2_q2_a_32', 'parte2_q2_a_33', 'parte2_q2_a_34');
            });
            Event.observe('parte2_q2_a_33', 'change', function() {
                trataCelula('parte2_q2_a_33', 'parte2_q2_a_32', 'parte2_q2_a_34');
            });
            Event.observe('parte2_q2_a_42', 'change', function() {
                trataCelula('parte2_q2_a_42', 'parte2_q2_a_43', 'parte2_q2_a_44');
            });
            Event.observe('parte2_q2_a_43', 'change', function() {
                trataCelula('parte2_q2_a_43', 'parte2_q2_a_42', 'parte2_q2_a_44');
            });
            Event.observe('parte2_q2_a_52', 'change', function() {
                trataCelula('parte2_q2_a_52', 'parte2_q2_a_53', 'parte2_q2_a_54');
            });
            Event.observe('parte2_q2_a_53', 'change', function() {
                trataCelula('parte2_q2_a_53', 'parte2_q2_a_52', 'parte2_q2_a_54');
            });
            Event.observe('parte2_q2_a_62', 'change', function() {
                trataCelula('parte2_q2_a_62', 'parte2_q2_a_63', 'parte2_q2_a_64');
            });
            Event.observe('parte2_q2_a_63', 'change', function() {
                trataCelula('parte2_q2_a_63', 'parte2_q2_a_62', 'parte2_q2_a_64');
            });
            Event.observe('parte2_q2_a_72', 'change', function() {
                trataCelula('parte2_q2_a_72', 'parte2_q2_a_73', 'parte2_q2_a_74');
            });
            Event.observe('parte2_q2_a_73', 'change', function() {
                trataCelula('parte2_q2_a_73', 'parte2_q2_a_72', 'parte2_q2_a_74');
            });
            Event.observe('parte2_q2_a_82', 'change', function() {
                trataCelula('parte2_q2_a_82', 'parte2_q2_a_83', 'parte2_q2_a_84');
            });
            Event.observe('parte2_q2_a_83', 'change', function() {
                trataCelula('parte2_q2_a_83', 'parte2_q2_a_82', 'parte2_q2_a_84');
            });
            Event.observe('parte2_q2_a_92', 'change', function() {
                trataCelula('parte2_q2_a_92', 'parte2_q2_a_93', 'parte2_q2_a_94');
            });
            Event.observe('parte2_q2_a_93', 'change', function() {
                trataCelula('parte2_q2_a_93', 'parte2_q2_a_92', 'parte2_q2_a_94');
            });
            Event.observe('parte2_q2_a_102', 'change', function() {
                trataCelula('parte2_q2_a_102', 'parte2_q2_a_103', 'parte2_q2_a_104');
            });
            Event.observe('parte2_q2_a_103', 'change', function() {
                trataCelula('parte2_q2_a_103', 'parte2_q2_a_102', 'parte2_q2_a_104');
            });
            Event.observe('parte2_q2_a_112', 'change', function() {
                trataCelula('parte2_q2_a_112', 'parte2_q2_a_113', 'parte2_q2_a_114');
            });
            Event.observe('parte2_q2_a_113', 'change', function() {
                trataCelula('parte2_q2_a_113', 'parte2_q2_a_112', 'parte2_q2_a_114');
            });

            Event.observe('parte2_q3_a', 'change', function() {
                trataFloat('parte2_q3_a');
                setResp("atividade_1_parte2_q3_a", $('parte2_q3_a').value);
            });
            Event.observe('parte2_q3_b', 'change', function() {
                trataFloat('parte2_q3_b');
                setResp("atividade_1_parte2_q3_b", $('parte2_q3_b').value);
            });

        }


        if (PosicaoAtual.Parte >= 2) {
            MeuBloco[0] = '<em>Tabela da Questão 2<\/em>';


            for (var i = 2; i < 12; i++) {
                base[i] = getResp('a1_q2_tabela_base' + (i - 2));
                altura[i] = getResp('a1_q2_tabela_altura' + (i - 2));
                area[i] = (Number(base[i]) * Number(altura[i])).toFixed(2);
            }


            MeuBloco[1] = [
                [{ value: 'Perímetro', largura: 4 }, { value: 'Base (x)', largura: 4 }, { value: 'Altura (h)', largura: 4 }, { value: 'Área', largura: 4 }],
                [{ value: '400', tipo: 'texto' }, { value: base[2], tipo: 'texto' }, { value: altura[2], tipo: 'texto' }, { value: area[2], tipo: 'texto' }],
                [{ value: '400', tipo: 'texto' }, { value: base[3], tipo: 'texto' }, { value: altura[3], tipo: 'texto' }, { value: area[3], tipo: 'texto' }],
                [{ value: '400', tipo: 'texto' }, { value: base[4], tipo: 'texto' }, { value: altura[4], tipo: 'texto' }, { value: area[4], tipo: 'texto' }],
                [{ value: '400', tipo: 'texto' }, { value: base[5], tipo: 'texto' }, { value: altura[5], tipo: 'texto' }, { value: area[5], tipo: 'texto' }],
                [{ value: '400', tipo: 'texto' }, { value: base[6], tipo: 'texto' }, { value: altura[6], tipo: 'texto' }, { value: area[6], tipo: 'texto' }],
                [{ value: '400', tipo: 'texto' }, { value: base[7], tipo: 'texto' }, { value: altura[7], tipo: 'texto' }, { value: area[7], tipo: 'texto' }],
                [{ value: '400', tipo: 'texto' }, { value: base[8], tipo: 'texto' }, { value: altura[8], tipo: 'texto' }, { value: area[8], tipo: 'texto' }],
                [{ value: '400', tipo: 'texto' }, { value: base[9], tipo: 'texto' }, { value: altura[9], tipo: 'texto' }, { value: area[9], tipo: 'texto' }],
                [{ value: '400', tipo: 'texto' }, { value: base[10], tipo: 'texto' }, { value: altura[10], tipo: 'texto' }, { value: area[10], tipo: 'texto' }],
                [{ value: '400', tipo: 'texto' }, { value: base[11], tipo: 'texto' }, { value: altura[11], tipo: 'texto' }, { value: area[11], tipo: 'texto' }]
            ];

        }

        if (PosicaoAtual.Parte == 2) {
            Event.observe('parte3_q4_a_11', 'change', function() {
                trataFloat('parte3_q4_a_11');
                setResp("atividade_1_parte3_q4_a_11", $('parte3_q4_a_11').value);
            });
            Event.observe('parte3_q4_a_12', 'change', function() {
                trataFloat('parte3_q4_a_12');
                setResp("atividade_1_parte3_q4_a_12", $('parte3_q4_a_12').value);
            });
            Event.observe('parte3_q4_b', 'change', function() {
                trataFloat('parte3_q4_b');
                setResp("atividade_1_parte3_q4_b", $('parte3_q4_b').value);
            });

        }
        if (PosicaoAtual.Parte == 3) {
            Event.observe('parte4_q5_a_11', 'change', function() {
                setResp("atividade_1_parte4_q5_a_11", $('parte4_q5_a_11').value);
            });
            Event.observe('parte4_q6_a_11', 'change', function() {
                setResp("atividade_1_parte4_q6_a_11", $('parte4_q6_a_11').value);
            });
            Event.observe('parte4_q7_a', 'change', function() {
                setResp("atividade_1_parte4_q7_a", $('parte4_q7_a').value);
            });

            var applet = document.ggbApplet;
            applet.setVisible('func_1', false);
            applet.setVisible('func_2', false);
            applet.setVisible('func_3', false);
            applet.setVisible('RespComparador', false);

        }
        if (PosicaoAtual.Parte == 4) {
            Event.observe('parte5_q8_a_11', 'change', function() {
                trataFloat('parte5_q8_a_11');
                setResp("atividade_1_parte5_q8_a_11", $('parte5_q8_a_11').value);
            });
            Event.observe('parte5_q8_a_12', 'change', function() {
                trataFloat('parte5_q8_a_12');
                setResp("atividade_1_parte5_q8_a_12", $('parte5_q8_a_12').value);
            });
            Event.observe('parte5_q8_b_11', 'change', function() {
                trataFloat('parte5_q8_b_11');
                setResp("atividade_1_parte5_q8_b_11", $('parte5_q8_b_11').value);
            });
            Event.observe('parte5_q8_b_12', 'change', function() {
                trataFloat('parte5_q8_b_12');
                setResp("atividade_1_parte5_q8_b_12", $('parte5_q8_b_12').value);
            });

            Event.observe('parte5_q9_a', 'change', function() {
                trataFloat('parte5_q9_a');
                setResp("atividade_1_parte5_q9_a", $('parte5_q9_a').value);
            });
            Event.observe('parte5_q9_b_11', 'change', function() {
                trataFloat('parte5_q9_b_11');
                setResp("atividade_1_parte5_q9_b_11", $('parte5_q9_b_11').value);
            });
            Event.observe('parte5_q9_b_12', 'change', function() {
                trataFloat('parte5_q9_b_12');
                setResp("atividade_1_parte5_q9_b_12", $('parte5_q9_b_12').value);
            });

            Event.observe('parte5_q10_a', 'change', function() {
                setResp("atividade_1_parte5_q10_a", $('parte5_q10_a').value);
            });
            Event.observe('parte5_q10_b', 'change', function() {
                setResp("atividade_1_parte5_q10_b", $('parte5_q10_b').value);
            });
            Event.observe('parte5_q10_c', 'change', function() {
                setResp("atividade_1_parte5_q10_c", $('parte5_q10_c').value);
            });
            Event.observe('parte5_q10_d', 'change', function() {
                setResp("atividade_1_parte5_q10_d", $('parte5_q10_d').value);
            });
        }
    }
}


function corrige_q_1_a(valor) {
    return [valor[0] ? false : null, valor[1] ? true : null, valor[2] ? false : null];
}

function passouteste(valor, pos) {
    var i = 0;
    for (i == 0; i < 20 && i != pos; i = i + 2) {
        if (valor[i] == valor[pos] && valor[i + 1] == valor[pos + 1]) return false;
    }
    return [true];
}

function corrige_q_2_a(valor) {

    var resposta = [(valor[0] != '' && valor[1] != '' && 2 * valor[0] + 2 * valor[1] == 400 && valor[0] >= 0 && valor[1] >= 0),
        (valor[0] != '' && valor[1] != '' && 2 * valor[0] + 2 * valor[1] == 400 && valor[0] >= 0 && valor[1] >= 0),
        (2 * valor[2] + 2 * valor[3] == 400) && passouteste(valor, 2) && valor[2] >= 0 && valor[3] >= 0 && valor[2] != '' && valor[3] != '',
        (2 * valor[2] + 2 * valor[3] == 400) && passouteste(valor, 2) && valor[2] >= 0 && valor[3] >= 0 && valor[2] != '' && valor[3] != '',
        (2 * valor[4] + 2 * valor[5] == 400) && passouteste(valor, 4) && valor[4] >= 0 && valor[5] >= 0 && valor[4] != '' && valor[5] != '',
        (2 * valor[4] + 2 * valor[5] == 400) && passouteste(valor, 4) && valor[4] >= 0 && valor[5] >= 0 && valor[4] != '' && valor[5] != '',
        (2 * valor[6] + 2 * valor[7] == 400) && passouteste(valor, 6) && valor[6] >= 0 && valor[7] >= 0 && valor[6] != '' && valor[7] != '',
        (2 * valor[6] + 2 * valor[7] == 400) && passouteste(valor, 6) && valor[6] >= 0 && valor[7] >= 0 && valor[6] != '' && valor[7] != '',
        (2 * valor[8] + 2 * valor[9] == 400) && passouteste(valor, 8) && valor[8] >= 0 && valor[9] >= 0 && valor[8] != '' && valor[9] != '',
        (2 * valor[8] + 2 * valor[9] == 400) && passouteste(valor, 8) && valor[8] >= 0 && valor[9] >= 0 && valor[8] != '' && valor[9] != '',
        (2 * valor[10] + 2 * valor[11] == 400) && passouteste(valor, 10) && valor[10] >= 0 && valor[11] >= 0 && valor[10] != '' && valor[11] != '',
        (2 * valor[10] + 2 * valor[11] == 400) && passouteste(valor, 10) && valor[10] >= 0 && valor[11] >= 0 && valor[10] != '' && valor[11] != '',
        (2 * valor[12] + 2 * valor[13] == 400) && passouteste(valor, 12) && valor[12] >= 0 && valor[13] >= 0 && valor[12] != '' && valor[13] != '',
        (2 * valor[12] + 2 * valor[13] == 400) && passouteste(valor, 12) && valor[12] >= 0 && valor[13] >= 0 && valor[12] != '' && valor[13] != '',
        (2 * valor[14] + 2 * valor[15] == 400) && passouteste(valor, 14) && valor[14] >= 0 && valor[15] >= 0 && valor[14] != '' && valor[15] != '',
        (2 * valor[14] + 2 * valor[15] == 400) && passouteste(valor, 14) && valor[14] >= 0 && valor[15] >= 0 && valor[14] != '' && valor[15] != '',
        (2 * valor[16] + 2 * valor[17] == 400) && passouteste(valor, 16) && valor[16] >= 0 && valor[17] >= 0 && valor[16] != '' && valor[17] != '',
        (2 * valor[16] + 2 * valor[17] == 400) && passouteste(valor, 16) && valor[16] >= 0 && valor[17] >= 0 && valor[16] != '' && valor[17] != '',
        (2 * valor[18] + 2 * valor[19] == 400) && passouteste(valor, 18) && valor[18] >= 0 && valor[19] >= 0 && valor[18] != '' && valor[19] != '',
        (2 * valor[18] + 2 * valor[19] == 400) && passouteste(valor, 18) && valor[18] >= 0 && valor[19] >= 0 && valor[18] != '' && valor[19] != ''
    ];

    if (resposta.all() == true) {
        for (var i = 0; i < 10; i++) {
            setResp('a1_q2_tabela_base' + i, valor[(i * 2)]);
            setResp('a1_q2_tabela_altura' + i, valor[(i * 2) + 1]);
        }
    }
    return resposta;
}


function corrige_q_3_a(valor) {
    if (isNaN(valor))
        return [false];
    return [valor == 200];
}

function corrige_q_3_b(valor) {
    v = ' ' + valor;
    if (isNaN(v) || v == ' ')
        return [false];
    return [v == 0];
}

function corrige_q_4_a(valor) {
    var i, j = -1;
    var maior = 2,
        val1, val2;

    for (i = 2; i < 12; i++) {
        val1 = parseFloat(area[i]);
        val2 = parseFloat(area[maior]);
        if (val1 > val2) maior = i, j = -1;
        if (val1 == val2) j = i;
    }
    if (!(isNaN(valor[0])) && !(isNaN(valor[1]))) {
        if (valor[0] == parseFloat(base[maior]) && valor[1] == parseFloat(altura[maior]))
            return [true, true];
        else if (j >= 0 && valor[0] == altura[maior] && valor[1] == base[maior])
            return [true, true];
    }
    return [false, false];
}

function corrige_q_4_b(valor) {
    var i, val, maximo, maior = 2;

    for (i = 2; i < 12; i++) {
        val = parseFloat(area[i]);
        maximo = parseFloat(area[maior]);
        if (val > maximo) maior = i;
    }
    maximo = parseFloat(area[maior]);
    if (isNaN(valor)) return [false];
    else return [valor == maximo];
}

function corrige_q_5_a(valor) {
    var func = $('parte4_q5_a_11').value;
    var func2 = $('parte4_q5_a_11').value;
    var correto, correto1, correto2;

    if (func != null) {
        func = func.replace(/=/g, "");
        func = func.replace(/[a-g]/g, "");
        func = func.replace(/[i-w]/g, "");
        func = func.replace(/[y-z]/g, "");
        func = func.replace(/[A-G]/g, "");
        func = func.replace(/[I-W]/g, "");
        func = func.replace(/[Y-Z]/g, "");
        if (func2 != func) return [false];
        func = func.replace(/H/g, "h");
        func = func.replace(/X/g, "x");
        func = func.replace(/x/g, "(x)");
        func = func.replace(/h/g, "(h)");
        func2 = func.replace(/h/g, "2");
        func = func.replace(/h/g, "1");
        if (func != "")
            correto1 = compararFuncao(func, "2*x+2");
        else correto1 = false;
        if (func2 != "")
            correto2 = compararFuncao(func2, "2*x+4");
        else correto2 = false;
        if (correto1 == true && correto2 == true)
            correto = true;
        else correto = false;
    } else {
        correto = false;
    }
    return [correto];
}

function corrige_q_6_a(valor) {
    var func = $('parte4_q6_a_11').value;
    var func2 = $('parte4_q6_a_11').value;
    var correto;


    if (func != null) {
        func = func.replace(/=/g, "");
        func = func.replace(/[a-w]/g, "");
        func = func.replace(/[y-z]/g, "");
        func = func.replace(/[A-W]/g, "");
        func = func.replace(/[Y-Z]/g, "");
        if (func2 != func) return [false];
        func = func.replace(/X/g, "x");
        func = func.replace(/x/g, "(x)");
        if (func != "")
            correto = (compararFuncao(func, "200-x"));
        else
            correto = false;
    } else {
        correto = false;
    }
    return [correto];
}

function corrige_q_7_a(valor) {
    var func = $('parte4_q7_a').value;
    var func2 = $('parte4_q7_a').value;
    var correto;

    if (func != null) {
        func = func.replace(/=/g, "");
        func = func.replace(/[a-w]/g, "");
        func = func.replace(/[y-z]/g, "");
        func = func.replace(/[A-W]/g, "");
        func = func.replace(/[Y-Z]/g, "");
        if (func2 != func) return [false];
        func = func.replace(/X/g, "x");
        func = func.replace(/x/g, "(x)");
        if (func != "")
            correto = (compararFuncao(func, "(200-x)*x"));
        else correto = false;
    } else {
        correto = false;
    }
    return [correto];
}

function corrige_q_8_a(valor) {
    var correto;
    if (valor[0] == $('parte5_q8_b_11').value && valor[1] == $('parte5_q8_b_12').value) correto = [false, false];
    else {
        if ((valor[0] == 50 && valor[1] == 150) || (valor[0] == 150 && valor[1] == 50)) correto = [true, true];
        else correto = [false, false];
    }
    return correto;
}

function corrige_q_8_b(valor) {
    var correto;
    if (valor[0] == $('parte5_q8_a_11').value && valor[1] == $('parte5_q8_a_12').value) correto = [false, false];
    else {
        if ((valor[0] == 50 && valor[1] == 150) || (valor[0] == 150 && valor[1] == 50)) correto = [true, true];
        else correto = [false, false];
    }
    return correto;
}

function corrige_q_9_a(valor) {
    return [valor[0] == 10000];
}


function corrige_q_9_b(valor) {
    return [valor[0] == 100 && valor[1] == 100, valor[0] == 100 && valor[1] == 100];
}

function corrige_q_10_a(valor) {
    str = " " + valor;
    str = str.replace(",", ".");
    if (isNaN(str)) return [false];
    valor = parseFloat(str);
    return [valor == 0];
}

function corrige_q_10_b(valor) {
    str = " " + valor;
    str = str.replace(",", ".");
    if (isNaN(str)) return [false];
    valor = parseFloat(str);
    return [valor == 1];
}

function corrige_q_10_c(valor) {
    str = " " + valor;
    str = str.replace(",", ".");
    if (isNaN(str)) return [false];
    valor = parseFloat(str);
    return [valor == 2];
}

function corrige_q_10_d(valor) {
    str = " " + valor;
    str = str.replace(",", ".");
    if (isNaN(str)) return [false];
    valor = parseFloat(str);
    return [valor == 2];
}

function ggbOnInit() {
    ggbOk = true;

    var applet = document.ggbApplet;
    applet.setErrorDialogsActive(false);

    TentaCarregar();
}

function tudoCerto() {
    if (PosicaoAtual.Parte == 4) {
        setResp('atividade_1', 3);
        $('Mapinha').Salva('janelas-1a', 'atividade_1', '3');
    }
}

function selecionou_q_5_a() {
    var applet = document.ggbApplet;
    applet.setVisible('c', true);
    applet.setVisible('f', true);
    applet.setVisible('g', true);
    applet.setVisible('h', true);
    applet.setVisible('poly2', false);
}

function selecionou_q_6_a() {
    var applet = document.ggbApplet;
    applet.setVisible('c', true);
    applet.setVisible('f', false);
    applet.setVisible('g', false);
    applet.setVisible('h', false);
    applet.setVisible('poly2', false);
}

function selecionou_q_7_a() {
    var applet = document.ggbApplet;
    applet.setVisible('c', false);
    applet.setVisible('f', false);
    applet.setVisible('g', false);
    applet.setVisible('h', false);
    applet.setVisible('poly2', true);
}