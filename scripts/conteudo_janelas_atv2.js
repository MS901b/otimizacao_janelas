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
var Partes = ['1'];
var nomeSoft = 'janelas-1a';

var Questoes = 
[
	{//Parte 1
		
		parte1_q1: //Questão 1
		{
			itens: 
			[
				
				{//A
					tipo: 'input',
					corrigir: corrige_q_1_a,
					enunciado: 'Considere que o comprimento do segmento (metade do perímetro) que deu origem ao quadrado e ao retângulo é igual a p/2. Se o lado menor desse retângulo for chamado de “b”, qual será a área do quadradinho em termos de p e b?',
					antes:'Área = ', 
					depois: 'cm',
					msgErro: 'Observe o vídeo e encontre uma expressão algébrica para a área do quadradinho. Se precisar de ajuda para digitar a resposta clique em ?',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Fração e divisão:  digitar a/b. <br /><br />Multiplicação: digitar a*b ou simplesmente ab. <br /><br />Potência: para escrever p elevado ao quadrado, digitar p^2 ou p*p.<br /><br />Raiz: para escrever raíz quadrada de x, digitar sqrt(x).'
				}
			]
		} 
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