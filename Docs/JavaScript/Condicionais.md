# JavaScript - Condicionais
[Outline](https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/README.md)->[JavaScript](https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/Docs/JavaScript/JavaScript.md) -> Condicionais

## Conteúdo:
1. [If](#If)  
2. [Else](#Else)  
3. [Else If](#Else-If)  
4. [Operadores Relacionais](#Operadores-Relacionais)  
5. [Operadores Lógicos](#Operadores-Lógicos)  
6. [Operador Ternário](#Operador-Ternário)  
7. [Switch](#Switch)  

## If
&nbsp;&nbsp;&nbsp;&nbsp; Base dos condicionais.

```javascript
if(true){
  console.log('This is true');
}

var is_true = true;
if(is_true)
  console.log("This is also true");
```

## Else
&nbsp;&nbsp;&nbsp;&nbsp; O else vem sempre depois de um if, caso o teste ou testes anteriores falhem, o bloco else é executado.

```javascript
let is_true = false;
if(is_true) 
  console.log('This is true');
else
  console.log('This is false');
```

## Else If
&nbsp;&nbsp;&nbsp;&nbsp; O else if é um operador cadeia, ou seja, deve ser sempre colocado depois de um if e antes de um else, se a condição/teste anterior falhar é testada a condição deste else if.

```javascript
let v = 3;
if(v == 0) 
  console.log('Is 0');
else if(v == 1) 
  console.log('Is 1');
else if(v == 2)
  console.log('Is 2');
else
  console.log('It isn't 0, 1, 2');
```

## Operadores Relacionais
&nbsp;&nbsp;&nbsp;&nbsp; Existem vários operadores relacionais comuns a outras LP:
+ **\<**: menor  
+ **\>**: maior
+ **==**: igual
+ **===**: igual e do mesmo tipo de dados
+ **!=**: diferente
+ **!==**: diferente e de tipos diferentes
+ **<=**: menor ou igual 
+ **>=**: maior ou igual  
+ **<==**: menor ou igual e com o mesmo tipo de dados  
+ **>==**: maioir ou igual com o mesmo tipo de dados


## Operadores Lógicos
+ **!**: NOT
+ **&&**: AND  
+ **||**: OR  

## Operador Ternário
&nbsp;&nbsp;&nbsp;&nbsp; O operador ternário ou *one line if else* é um operador que testa uma condição e retorna valores, apenas é usado para **atribuições** quando é necessário fazer um teste de uma condição. Tal como if e else, pode ser chained/nested.

```javascript
let is_true = true;

var result = is_true ? 'Is true' : 'Is false';
console.log(result);


let v = 3;
var result = (v == 0) ? 'Is 0' :  
             (v == 1) ? 'Is 1' :
             (v == 2) ? 'Is 2' : 
             'It isn't 0,1,2';
console.log(result);

```

## Switch
&nbsp;&nbsp;&nbsp;&nbsp; O else if é utilizado se queremos fazer vários testes para variáveis diferentes, caso seja necessário fazer muitos testes paraa a mesma variável, o **switch** é uma alternativa mais legível.

```javascript
let v = 3;
let result;
switch(v){
  case 0:
    result = 'Is 0';
  break;
  case 1:
    result = 'Is 1';
  break;
  case 2:
    result = 'Is 2';
  break;
  default:
    result = 'It isn't 0,1,2';
  break;
}
console.log(result);
```

