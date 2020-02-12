/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/
 
var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];

/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item
	
	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/

var Partes = ['1', '2', '3', '4', '5','C'];
var nomeSoft = 'janelas-1a';

var Questoes = 
[
	{//Parte 1
		parte1_q1: //Questão 1
		{
			
			itens: 
			[
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_1_a,
					enunciado: 'Se você aumentar o valor de x (base do retângulo), o que acontece com h ( altura do retângulo)?',
					dados:	[
						{value: 'aumenta', label: 'Aumenta'},
						{value: 'diminui', label: 'Diminui'},
						{value: 'naoaltera', label: 'Não se altera'}
					],
					msgErro: 'Movimente o ponto a azul no canto inferior direito do retângulo ao lado. Observe o que acontece com a altura da janela conforme se altera o tamanho da base.'
				}
			]
		}
	},
	{ //Parte 2
		parte2_q2: //Questão 2
		{
			itens: 
			[
				{//A
					tipo: 'tabela',
					corrigir: corrige_q_2_a,
					enunciado: 'Agora, movimente o ponto azul no canto inferior direito da janela no quadro ao lado e preencha a tabela abaixo com as medidas da base e da altura de 10 retângulos diferentes.',
					dados:	[
							[{value: 'Perímetro', largura: 3},{value: 'Base (x)', largura: 3},{value: 'Altura (h)', largura: 3}, {value: 'Área', largura: 4}],	//header
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}],
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}],
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}],
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}],
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}],
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}],
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}],
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}],
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}],
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}]
						],
					msgErro: 'Se as linhas da matriz ficarem vermelhas, você precisa fazer as seguintes correções: <br /> 1) preencha todas as linhas da matriz com valores diferentes; <br /> 2) escolha somente valores que resultem em um perímetro igual a 400 cm.',
					msgAjuda: 'Preencha a tabela com o valor da base e da altura para que o valor da área seja calculado automaticamente.'
				}
			]
		},
		parte2_q3: //Questão 3
		{
			enunciadoGeral: 'Ainda utilizando a ferramenta ao lado, responda:',
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_3_a,
					dependente: false,
					enunciado: 'Qual é o maior  valor que você pode atribuir para a base da janela?',
					antes: 'x = ', 
					depois:'cm',
					msgErro: 'Esse valor não está correto. Movimente o ponto azul no canto inferior direito do retângulo ao lado e tente novamente.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_3_b,
					dependente: false,
					enunciado: 'E qual é o menor valor que se pode atribuir para a base da janela?',
					antes: 'x = ', 
					depois:'cm',
					msgErro: 'Esse valor não está correto. Movimente o ponto azul no canto inferior direito do retângulo ao lado e tente novamente.'
				}
			]
		}
	},
	{ //Parte 3
		parte3_q4: //Questão 4
		{
			enunciadoGeral: 'Dentre os valores que você preencheu na tabela da questão 2, responda:',
			itens: 
			[
				{//A
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_4_a,
					dependente: false,
					enunciado: 'Quais são as dimensões do retângulo com a maior área?',
					dados:	[
							 [{antes:'base (x) = ', depois: 'cm'}, {antes: 'altura (h) = ', depois: 'cm'}]
						],
					msgErro: 'Observe com atenção os valores das áreas na tabela do seu bloco de notas. Identifique o retângulo que possui a maior área. Quais são os valores de suas base e altura?'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_4_b,
					dependente: false,
					enunciado: 'Qual é o valor dessa área?',
					antes: 'área = ', 
					depois: 'cm²',
					msgErro: 'Observe com atenção os valores das áreas na tabela do seu bloco de notas. Identifique o retângulo que possui a maior área. Qual é o valor dessa área?'
				}
				
			]
		}
	},
	{ //Parte 4
		parte4_q5: //Questão 5
		{
			itens: 
			[
				{//A
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_5_a,
					dependente: false,
					enunciado: 'Se h é a medida da altura e x é a medida da base, escreva a expressão do perímetro, p, em termos de x e h.',
					selecionada: selecionou_q_5_a,
					dados: [
								[{antes: 'p = ',depois:' '}]
							],
					msgErro: 'Perímetro é a soma dos lados de um polígono.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Fração e divisão:  digitar "a/b". <br /><br />Multiplicação: digitar "a*b" ou simplesmente "ab". <br /><br />Potência: para escrever "p elevado ao quadrado", digitar "p^2" ou "p*p".<br /><br />Raiz: para escrever "raiz quadrada de x", digitar "sqrt(x)". <br /><br />Em todos os casos, as aspas não devem ser digitadas.'
				}	
			]
		},
		parte4_q6: //Questão 6
		{
			itens: 
			[
				{//A
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_6_a,
					dependente: false,
					enunciado: 'Se o perímetro é igual a 400cm, expresse h em termos desse perímetro e de x (medida da base). ',
					selecionada: selecionou_q_6_a,
					dados: [
							[{antes: 'h = ', depois:' '}]
						],
					msgErro: 'Dica: isole h na expressão 400 = 2x + 2h.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Fração e divisão:  digitar "a/b". <br /><br />Multiplicação: digitar "a*b" ou simplesmente "ab". <br /><br />Potência: para escrever "p elevado ao quadrado", digitar "p^2" ou "p*p".<br /><br />Raiz: para escrever "raiz quadrada de x", digitar "sqrt(x)". <br /><br />Em todos os casos, as aspas não devem ser digitadas.'
				}
			]
		},
		parte4_q7: //Questão 7
		{
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_7_a,
					dependente: false,
					selecionada: selecionou_q_7_a,
					antes: 'área = ',
					depois: ' ',
					enunciado: 'A partir da expressão de h obtida na questão 6, expresse a área do retângulo em termos de x.',					
					msgErro: 'Lembre-se que o valor da área de um retângulo é dado pela fórmula base*altura.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Fração e divisão:  digitar "a/b". <br /><br />Multiplicação: digitar "a*b" ou simplesmente "ab". <br /><br />Potência: para escrever "p elevado ao quadrado", digitar "p^2" ou "p*p".<br /><br />Raiz: para escrever "raiz quadrada de x", digitar "sqrt(x)". <br /><br />Em todos os casos, as aspas não devem ser digitadas.'
				}		
			]
		}
	},
	{ // Parte 5
		parte5_q8: //Questão 8
		{
			enunciadoGeral: 'Utilizando a ferramenta ao lado, observe que existem dois retângulos que possuem área de 7500 cm². Determine no seu caderno as medidas exatas desses retângulos e preencha as respostas dos itens A) e B).',
			itens:
			[
				{//A
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_8_a,
					dependente: true,
					enunciado: 'Retângulo 1:',
					dados: [
							[{antes: 'base = ', depois:'cm'}, {antes:'altura = ', depois:'cm'}]
						],
					msgErro: 'Lembre-se que o valor da área de um retângulo é definido pela fórmula base*altura. <br /> Você não pode repetir o mesmo retângulo do item (b).',
					msgAjuda: 'Preencha com o valor em cm.'
				},
				{//B
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_8_b,
					dependente: true,
					enunciado: 'Retângulo 2:',
					dados: [
							[{antes: 'base = ', depois:'cm'}, {antes: 'altura = ', depois:'cm'}]
						],
					msgErro: 'Lembre-se que o valor da área de um retângulo é definido pela fórmula base*altura. <br /> Você não pode repetir o mesmo retângulo do item (a).',
					msgAjuda: 'Preencha com o valor em cm.'
				}
			]
		},
		parte5_q9: //Questão 9
		{
			enunciadoGeral: 'Analisando visualmente o gráfico, responda:',
			itens:
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_9_a,
					dependente: false,
					enunciado: 'Qual é a maior área possível?',
					antes: 'área = ',
					depois: 'cm²',
					msgErro: 'Observe o gráfico com atenção. Identifique o retângulo com a maior área. Qual o valor da sua área?'
				},
				{//B
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_9_b,
					dependente: true,
					enunciado: 'Quais são as dimensões do retângulo com essa área?',
					dados: [
							[{antes: 'base = ', depois: 'cm'}, {antes: 'altura = ', depois: 'cm'}]
						],
					msgErro: 'Observe com atenção as dimensões do retângulo de maior área.'
				}
			]

		},
		parte5_q10: //Questão 10
		{
			enunciadoGeral: ' Utilizando o gráfico ao lado, responda: quantas janelas diferentes você pode construir com as áreas dadas a seguir?',
			itens:
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_10_a,
					enunciado: '11.000 cm²',
					msgErro: 'Observe o gráfico com atenção.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_10_b,
					enunciado: '10.000 cm²',
					msgErro: 'Observe o gráfico com atenção.'
				},
				{//C
					tipo: 'input',
					corrigir: corrige_q_10_c,
					enunciado: '8.000 cm²',
					msgErro: 'Observe o gráfico com atenção.'
				},
				{//D
					tipo: 'input',
					corrigir: corrige_q_10_d,
					enunciado: '6.000 cm²',
					msgErro: 'Observe o gráfico com atenção.'
				}
			]

		}				
	},
	{//Parte 6
	}
]

/*
	Bloco de Notas
	
	Nesse Array ficam os dados que aparecem no Bloquinho de notas.
	Se você for na linha 35 do exemplo_correcao.js verá que está sendo criada uma instância
	de "Blocao", uma classe de bloco de notas que permite tabelas no conteúdo. Se não for
	usar tabelas no Software, altere para "Bloco". Ambas classes utilizam a variavel global
	MeuBloco para preencher o seu conteúdo.
*/

var MeuBloco = new Array();

