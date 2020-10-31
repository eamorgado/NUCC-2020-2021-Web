# JavaScript - Introdução
[Outline](https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/README.md)->[JavaScript](https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/Docs/JavaScript/JavaScript.md) -> Introdução

&nbsp;&nbsp;&nbsp;&nbsp; JavaScript é uma das linguagens principais utilizadas nos browsers, é uma linguagem poderosa, flexível e rápida. Uma vez que está na base da web stack é uma excelete escolha para entrar no mundo do frontend e das suas frameworks

## Conteúdo
1. [Imprimir valores na consola](#Imprimir-valores-na-consola)  
2. [Tipos de dados](#Tipos-de-dados)  
3. [Operadores aritméticos](#Operadores-aritméticos)  
4. [Variáveis](#Variáveis)  
  4.1. [Var](#Var)  
  4.2. [Let](#Let)  
  4.3 [Const](#Const)  

## Imprimir valores na consola
&nbsp;&nbsp;&nbsp;&nbsp; O JavaScript não é uma linguagem que possa ser compilada e testada no terminal como no caso do Java (apesar de terem nomes parecidos estas não podem ser mais differentes). Para podermos testar temos que correr o script no browser, para podermos ver os valores de um objecto utilizamos a keyword **console**, que tem uma coleção de acções que podemos fazer, para imprimir valores utilizamos o comando **console.log()** tudo o que é colocado nos parênteses fica visível.

```javascript
console.log("Hello World"); //This is a comment
/*

this is
a 
multi                             line
co
m
ment

*/
console.log('Welcome to NUCC Web workshop');
```

&nbsp;&nbsp;&nbsp;&nbsp; Tal como noutras linguagens para terminarmos um comando utilizamos o **;** apesar de, **não ser necessário no JavaScript** apenas é recomendado pois dependendo da versão no browser  certos scripts podem não correr. Caso estejamos a utilizar a keyword **"use strict";** o uso de ; é obrigatório.


## Tipos de dados
&nbsp;&nbsp;&nbsp;&nbsp; No JS existem **7 titpos de dados fundamentais** (primitivos:
+ **Number**: qualquer número, incluindo decimais  
+ **String**: Qualquer agrupamento de caracteres entre **'....'** ou **"...."**  
+ **Bolean**: Tipo de dados com apenas dois valores **true** e **false**  
+ **null**: representa a **falta de um valor** (vazio, deve ser atribuído)  
+ **undefined**: representa a **falta de um valor** mas é diferente do null (declarado mas não atribuído)  
+ **Object**: coleção de **dados relacionados**  


## Operadores aritméticos
&nbsp;&nbsp;&nbsp;&nbsp; No JS temos operadores ariteméticos iguais a outras LP (+,-,*,/,%)

## Variáveis
&nbsp;&nbsp;&nbsp;&nbsp; Uma variável é um container para um valor que por sua vez é armazenada em memória. Com elas podemos:
+ Criar variáveis  
+ Guardar e atualizar o seu valor  
+ Fazer referência ao valor armazenado por elas  

### Var
&nbsp;&nbsp;&nbsp;&nbsp; Uma das formas de criar variáveis é através da keyword **var**. Ao colocar **var nome_var = valor;** estamos a criar uma nova variável com nome *nome_var* e estamos a **atribuir**/guardar *valor* nela.

```javascript
var hello = 'Hello';

console.log(hello);
```

&nbsp;&nbsp;&nbsp;&nbsp; Existem algumas regras para criar variáveis:
+ Os nomes de vars n podem começar com números  
+ Nomes de vars são *case sensitive*  
+ Nomes de vars não podem ser iguais a *keywords*  

&nbsp;&nbsp;&nbsp;&nbsp; Uma variável criada com esta keyword é visível mesmo fora de certos blocos, vamos ver isso mais para a frente mas basicamente, usando o var numa função, mesmo que dentro de um if (bloco) essa variável é visível a qualquer elemento nessa mesma função. Notem que, mesmo que seja visível dentro da função não é visível fora da mesma.

### Let
&nbsp;&nbsp;&nbsp;&nbsp; Esta keyword funciona como a *var* a única diferença é o facto da **let** apenas ser visível **ao bloco onde foi criada**

### Const
&nbsp;&nbsp;&nbsp;&nbsp; Tal como *var* e *let*, **const** armazena valores sendo este valor **constante**, não pode ser alterado. Para este tipo de criação, devemos **atribuir sempre um valor à variável**.

