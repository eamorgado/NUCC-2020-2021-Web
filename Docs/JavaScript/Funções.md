# JavaScript - Funções
[Outline](https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/README.md)->[JavaScript](https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/Docs/JavaScript/JavaScript.md) -> Funções

&nbsp;&nbsp;&nbsp;&nbsp; O objetivo principal de uma função é agrupar código num bloco reutilizável para realizar uma certa tarefa.

## Conteúdo
1. [Declaração](#Declaração)  
2. [Function Call](#Function-Call)  
3. [Parâmetros e Argumentos](#Parâmetros-e-Argumentos)  
4. [Parâmetros Default](#Parâmetros-Default)  
5. [Return](#Return)  
6. [Function Expressions](#Function-Expressions)  
7. [Funções Anónimas](#Funções-Anónimas)  

## Declaração
&nbsp;&nbsp;&nbsp;&nbsp; Existem várias formas de criar uma função em JS, a mais comum é utilizando a declaração ```function```.

<img src="https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/Docs/Images/JavaScript/function_decl.jpg" alt="Descrição de estrutura de function" width="42%">

&nbsp;&nbsp;&nbsp;&nbsp; No caso do JS, este possúi uma *hoisting feature*, ou seja, permite referir funções antes de estas serem definidas. Mesmo assim, não é uma boa prática.


## Function Call
&nbsp;&nbsp;&nbsp;&nbsp; Depois de declarar uma função, para podermos executar o seu bloco de código temos que chamar a função, o código **apenas é executado se a função for chamada**.

<img src="https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/Docs/Images/JavaScript/function_call.jpg" alt="Chamar uma função" width="42%">

## Parâmetros e Argumentos
&nbsp;&nbsp;&nbsp;&nbsp; Tal como noutras linguagens, podemos fornecer parâmetros/input à função, estes server como *slots* que mais tarde vão ser populados por valores. **Não é preciso indicar o tipo de dados de cada parâmetro** uma vez que, no JS estes vão ser inferidos durante execução. 

&nbsp;&nbsp;&nbsp;&nbsp; No JS **não existe function overloading**, ou seja, não podem existir duas funções com o mesmo nome/identifier mas número de parâmetros diferentes, como no caso do Java. No entanto, as funções em JS não obrigam que uma função com n parâmetros tenha que ser fornecida n inputs/argumentos.

<img src="https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/Docs/Images/JavaScript/function_params.jpg" alt="Função com parâmetros e utilização" width="42%">

## Parêmetros Default
&nbsp;&nbsp;&nbsp;&nbsp; No JS também podemos definir parâmetros default, ou seja, parâmetros que, se não forem fornecidos quando a função é chamada, são substituídos pelo valor default

```javascript
function nameWorkshop(name = 'Web'){
  console.log('Workshop: ', ${name});
}

nameWorkshop('Web - NUCC'); //Prints:  Workshop: Web - NUCC
nameWorkShop(); //Prints:   Workshop: Web
```

## Return
&nbsp;&nbsp;&nbsp;&nbsp; Até agora as funções que vimos não retornam nenhum valor. Na maior parte dos casos, utilizamos funções para modular blocos de código que devem ser executados várias vezes, nesses blocos/operações apenas queremos saber o resultado da operação, para isso a função deve retornar um/uns valore(s). Para este objetivo existe uma keyword ```return``` que faz isso. Em qualquer função, quando o return é colocado, nenhum bloco de código que venha depois do return na função é executado.

<img src="https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/Docs/Images/JavaScript/function_return.jpg" alt="Return em função" width="42%">

&nbsp;&nbsp;&nbsp;&nbsp; Desta forma, podemos compactar uma operação complexa numa função, chamar a função e atribuir o resultado da operação a uma variável.

```javascript
function calculateArea(width,height){
  return width * height;
}

let a = calculateArea(300,300);
console.log("Pixel number: ", a);

console.log('Pixel number2: ",calculateArea(10,10));
```

**Nota**: Tal como nos condicionais, funções podem chamar outras funções (nested)

## Function Expressions
&nbsp;&nbsp;&nbsp;&nbsp; Tal como variáveis, podemos atribuir uma função a uma variável, sempre que formos utiizar a variável, estamos a utilizar a função. Por conveção, utilizamos variáveis do tipo ```const```.

<img src="https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/Docs/Images/JavaScript/function_expressions.jpg" alt="Function expression" width="42%">


## Funções Anónimas
&nbsp;&nbsp;&nbsp;&nbsp; Funções anónimas ou *arrow functions* são definidas pelo operador arrow ```()=>```. Este formato remove a utilização da keyword ```function``` e como tal, permite uma sintaxe mais compacta, podemos na mesma fornecer parâmetros ```(a,b,....)=>{...};``` e utilizar a keyword return, esta também não é necessária se estiver a ser feita apenas uma operação, como no caso dos ifs.

```javascript
//normal
function calculateArea(width,height){
  return width * height;
}

//Arrow
const calcAr = (width,length) => {
  return width*length;
};

//Arrow simplified
const calcAr1 = (width,length) => width*length;

console.log('Normal: ', calculateArea(10,10));
console.log('Arrow: ',calcAr(10,10));
console.log('Arrow simplf: ', calcAr1(10,10));
```




