# JavaScript - Arrays
[Outline](https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/README.md)->[JavaScript](https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/Docs/JavaScript/JavaScript.md) -> Arrays

&nbsp;&nbsp;&nbsp;&nbsp; Um dos conceitos fundamentais em qualquer programa é como vamos armazenar/organizar os dados. Uma das formas mais comuns é através de listas, no JS, listas são **arrays**. Os Arrays podem armazenar vários tipos de dados, ao contrário de outras linguagens (C,Java,...) não é necessário definir o tipo de dados que vais ser armazenado no array. Os arrays são ordenados => existem indices pelo que, podemos iterar o array.

## Conteúdo
1. [Criar Arrays](#Criar-Arrays)  
2. [Aceder a Elementos](#Aceder-a-Elementos)  
3. [Atualizar Elementos](#Atualizar-Elementos)   
4. [Tamanho do Array](#Tamanho-do-Array)  
5. [Adicionar elementos](#Adicionar-elementos)  
6. [Remover elementos](#Remover-elementos)  

## Criar Arrays
&nbsp;&nbsp;&nbsp;&nbsp; Uma das formas mais fáceis de criar um array é a seguinte forma:
```javascript
let arr = ['A','B','C',D'];
```
&nbsp;&nbsp;&nbsp;&nbsp; Esta forma é utilizando um *array literal*, basicamente, o array é criado ao incluir elementos dentro de ```[]```. Tal como referimos, arrays podem ter vários tipos de dados/**elementos** no mesmo arrays

<img src="https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/Docs/Images/JavaScript/array_literal.jpg" alt="Array literal" width="42%">

## Aceder a Elementos
&nbsp;&nbsp;&nbsp;&nbsp; Sendo os arrays ordenados, cada elemento tem uma **posição numerada**, índice. Sendo assim, podemos aceder elementos de forma individual e **linear** O(1). Notem que, os índices **começam no 0**.

<img src="https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/Docs/Images/JavaScript/array_access.jpg" alt="Aceder a elementos em array" width="42%">

## Atualizar Elementos
&nbsp;&nbsp;&nbsp;&nbsp; Atualizar valores de forma individual é similar a aceder.

```javascript
let abc = ['A','B','C','D'];
console.log(abc);

abc[3] = 'Z';
console.log(abc);
```

**Nota**: Apesar de, nas variáveis, se estas forem criadas com o keyword ```const```, não podem ser alteradas, o mesmo não se aplica para arrays. Um Array que seja criado com ```const``` **permanece mutável**, ou seja, podemos alterar os valores dos seus elementos, mas **não podemos atribuir outro array à variável**.

## Tamanho do Array
&nbsp;&nbsp;&nbsp;&nbsp; Para sabermos o número de elementos num array podemos utilizar a propriedade ```.length``` do objecto.

```javascript
let abc = ['A','B','C','D'];
console.log('Size: ',abc.length);
```

## Adicionar elementos
&nbsp;&nbsp;&nbsp;&nbsp; Para adicionar elementos a um array (append) basta chamar o método ```.push()```. Esta função pode receber um ou vários argumentos, separados por vígulas. Estes elementos vão depois ser adicionados ao array.

```javascript
let abc = ['A','B'];
console.log(abc);

abc.push('C');
console.log(abc);

abc.push('D','E');
console.log(abc);
```

## Remover elementos
&nbsp;&nbsp;&nbsp;&nbsp; Para remover o **úlimo elemento** no array, utilizamos ```.pop()```.

```javascript
let abc = ['A','B','C'];
console.log(abc);

abc.pop();
console.log(abc);

abc.pop();
console.log(abc);
```
