# JavaScript - Loops
[Outline](https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/README.md)->[JavaScript](https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/Docs/JavaScript/JavaScript.md) -> Loops

&nbsp;&nbsp;&nbsp;&nbsp; Os loops são utilizados para **repetir uma operação até que uma dada condição seja satisfeita**. Tal como funções, servem para compactar tarefas repetidas. Por exemplo, podemos calcular a área de um retângulo, dois, três, ...., n manualmente?

## Conteúdo
1. [For loop](#For-loop)  
2. [For of](#For-of)  
3. [While loop](#While-loop)  
4. [Do While loop](#Do-While-loop)  
5. [Break](#Break)  
6. [Continue](#Continue)  

## For loop
&nbsp;&nbsp;&nbsp;&nbsp; Este é o formato base de ciclos, precisa de uma **variável de iteração** (em maior parte dos casos serve como um contador de interações/loop counter), um teste de condição de paragem (um expressão que vai ser testada **antes de qualquer ciclo** se passar na condição entramos no ciclo, se falhar saltamos o bloco do for) e uma modificação de iteração (regra geral, será o valor com o qual vamos alterar a variável, por exemplo, incrementar, ++, decrementar, --).

```javascript
for(let count = 0; count < 3; count++){
  console.log(counter);
}

let sum = 0;
for(let i = 0; i < 10; i++) sum += i % 2 == 0 ? i : 0;
console.log(sum);
```

&nbsp;&nbsp;&nbsp;&nbsp; Com isto, podemos agora iterar arrays.

```javascript
var arr = [1,10,200,3000,40000];
let sum = (arr) => {
  let v = 0;
  for(let i = 0; i < arr.length; i++) v += arr[i];
  return v;
}
```

## For of
&nbsp;&nbsp;&nbsp;&nbsp; No JS existe um loop onde, se o nosso objecto for **iterável** podemos iterar obtendo os valores do objecto em cada iteração. Isto é muito útil em Arrays. Podem pensar nisto como um for each em Java.

```javascript
var arr = [1,10,200,3000,40000];
let sum = (arr) => {
  let v = 0;
  for(let element of arr) v += element;
  return v;
}
```

## While loop
&nbsp;&nbsp;&nbsp;&nbsp; O loop while funciona como o for, **apenas precisa do teste de iteração**. Este ciclo **não apresenta variável de iteração nem atualização da mesma**.

```javascript
let sum = 0;
for(let i = 0; i < 10; i++) sum += i % 2 == 0 ? i : 0;
console.log(sum);

sum = 0;
let i = 0;
while(i < 10){
  sum += i % 2 == 0 ? i : 0;
  i++;
}
```

## Do While loop
&nbsp;&nbsp;&nbsp;&nbsp; Este ciclo é similar ao while, a diferença principal é o facto de no do...while **o bloco do loop é sempre executado pelo menos uma vez**.

```javascript
let sum = 0;
let i = 0;
do{
  sum += i % 2 == 0 ? i : 0;
  i++;
}while(i < 10);
```

## Break
&nbsp;&nbsp;&nbsp;&nbsp; Podemos, terminar a execução do block do loop se uma dada consição se verificar, para isso utilizamos a keyword ```break```, se utilizada passamos log para a próxima instrução depois do ciclo.

```javascript
let arr = [1,2,3,4,5,-10,-12,-14,6,9];
let sum = 0;
for(let v of arr){
  if(v < 0) break;
  sum += v;
}
console.log(sum);
```

## Continue
&nbsp;&nbsp;&nbsp;&nbsp; Num ciclo também podemos avançar para a próxima iteração, ignorando todo o código que venha depois no block do loop, para isso utilizamos a key word ```continue```.

```javascript
let arr = [1,2,3,4,5,-10,-12,-14,6,9];
let sum = 0;
for(let v of arr){
  if(v < 0) continue;
  sum += v;
}
console.log(sum);
```


