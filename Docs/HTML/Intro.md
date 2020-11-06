# HTML - Introdução
[Outline](https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/README.md)->[HTML](https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/Docs/HTML/HTML.md) -> Introdução

&nbsp;&nbsp;&nbsp;&nbsp;O HTML é a linguagem padrão para criar páginas Web, através de uma série de **elementos** diz ao browser como mostrar conteúdo e assim descreves a página web.

&nbsp;&nbsp;&nbsp;&nbsp;Fornece a estrutura para o conteúdo no website. Aprender HTML é um dos primeiros passos na construção do teu conhecimento frontend

Por exemplo o seguinte snipet:
```html
<!-- Isto é um comentário, pode ter várias linhas e tem que terminar assim -->
<!DOCTYPE html> <!-- Define documento como sendo HTML5 (versão 5) -->
<html> <!-- Raiz da página -->
<head> <!-- Inicia campo para definição de metadados sobre a página -->
<title>Workshop NUCC - Web - 2020/2021</title> <!-- Define o título da página nas tabs do browser -->
</head> <!-- Termina o campo dos metadados da página -->
<body>  <!-- Inicia o campo com os componentes visíveis da página -->

  <h1>Hello World</h1> <!-- tag que define um campo heading -->
  Bem vindos ao Workshop de Web 2020/2021 do NUCC :) <!-- Texto normal, sem formatação -->

</body> <!-- Termina o campo com os componentes visíveis da página -->
</html> <!-- Termina a página -->
```
Resulta nesta estrutura:  
<img src="https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/Docs/Images/HTML/heloworld.jpg" width=50%>

---
## Conteúdo:
1. [Anatomia do HTML](#Anatomia-do-HTML)  
2. [O Body](#O-Body)  
3. [Estrutura do HTML](#Estrutura-do-HTML)  
4. [Heading tags](#Heading-tags)  
5. [Div tag](#Div-tag)  
6. [Attributos](#Attributos)  
7. [Line breaks](#Line-breaks) 
8. [Listas](#Listas)  
9. [Images](#Images)  
10. [Vídeos](#Vídeos)  
11. [Links](#Links)  


## Anatomia do HTML
&nbsp;&nbsp;&nbsp;&nbsp;Tal como referimos, o HTMl é composto por elementos que vão estruturar a página web e definir o seu conteúdo, uma elemento no HTML é composto por uma **tag** e o conteúdo (que está dentro de tags).
Uma tag está sempre entre **<** e **>** em quase todos dos casos no HTML (va,os ver que existem excepções) um elemento tem uma **opening tag** (<tag_name>) e uma **closing tag** (</tag_name>)

<img alt="Esquema de um elemento HTML"  src="https://github.com/eamorgado/NUCC-2020-2021-Web/blob/main/Docs/Images/HTML/elements.jpg" width=50%>

## O Body
&nbsp;&nbsp;&nbsp;&nbsp;Um dos elementos mais importantes para gerar a web page é o elemento body. **Apenas o conteúdo dentro do body é que é visível**.

```html
<body>
  <!-- Put your content here -->
</body>
```

## Estrutura do HTML
&nbsp;&nbsp;&nbsp;&nbsp;No HTML a estrutura pode ser vista como uma coleção de árvores relacionais. Quando um elemento está dentro/contido noutro esse elemento é considerado a **child** desse elemento (parent)
```html
<body>
  <p>Este parágrafo é um child do body</p>
  <p>Este parágrafo também é um child do body</p>
</body>
```

## Heading tags
&nbsp;&nbsp;&nbsp;&nbsp;Headings/titulos no HTML são como títulos no word ou Google Docs e outros media. Um dos objetivos principais dos headings é captar a atenção dos utilizadores ou descrever conteúdo. Existem **6** tipos de headings ordenados do maior para o menor em termos de tamanho de texto:
+ \<h1\> - heading principal, titulo de página
+ \<h2\> ---- \<h6\>

```html
<body>
  <h1>Workshop de Web</h1>
  <h2>Workshop de Web</h2>
  <h3>Workshop de Web</h3>
  <h3>Workshop de Web</h3>
  <h4>Workshop de Web</h4>
  <h5>Workshop de Web</h5>
  <h6>Workshop de Web</h6>
  Texto Normal
</body>
```


## Div tag
&nbsp;&nbsp;&nbsp;&nbsp;As **\<div\>** são um dos elementos mais comuns numa página web, é um container que divide a página em secções utilizadas para agrupar elementos. Esta tag **não tem representação visual** (pode ser adicionada em CSS), uma vez que, agrupa elementos, podemos aplicar um estilo a todos os elementos nessa secção.

```html
<body>
  Fora de grupo
  <div>
    Primeiro grupo, aplicado estilos 
    <div>
      Segundo grupo, dentro do primeiro (nested), estilos de 1 aplicados aqui também,
      estilos de 2 não são aplicados em 1
    </div>
  </div>
</body>
```


## Attributos
&nbsp;&nbsp;&nbsp;&nbsp;Atributos são usados para fornecer mais dados/metadata a tags que por sua vez ajuda a configurar e identificar tags. Um atributo é sempre adicionado à parte inicial de uma tag (opening part). Qualquer atributo tem duas partes, o nome do atributo e o valor.

&nbsp;&nbsp;&nbsp;&nbsp;Existem atributos diferentes e até atributos específicos/únicos a cada tag. Um muito utilizado é o **id** que permite identificar **unicamente** uma tag, sendo muito útil quando entrarmos no JavaScript para podermos alterar elementos. 

&nbsp;&nbsp;&nbsp;&nbsp;Outro atributo é o **class** este está relacionado com o CSS, ao definirmos novos estilos/regras no CSS podemos definir esses estilos associados a classes que por sua vez são adicionadas a uma tag e vão aplicar o estilo associado a essa tag. Dentro deste atributo podemos colocar várias classes, estas vão ser aplicadas pela ordem em que foram inseridas.

```html
<body>
  <div id="root" class="root-style">
    <div class="title color-red text big> Root </div>
    <div id="child-1" class="child"><strong>C1 bold</strong>  <b>C1 also bold</b></div>
    <div id="child-2" class="child"><em>C2 italic</em></div>
  </div>
</body>
```

## Line breaks
&nbsp;&nbsp;&nbsp;&nbsp;Já repararam que ao dar enter no HTML não é criada uma nova linha na página, para isso existe uma tag específica, **\<br\>** para esse efeito. Esta tag não precisa de uma closing tag.

## Listas
&nbsp;&nbsp;&nbsp;&nbsp; Nós podemos organizar informação em parágrafos **<p>** mas também o podemos organizar em listas. Em HTML existem dois tipos de listas, ordenadas (**\<ol\>**) e não ordenadas (bullet points, **\<ul\>**). Independentemente do tipo de lista a tag para items na lista é igual, **\<li\>**, informação/content só deve ser colocado nestes items.
  
```html
<body>
  <h1>Web stack (base)</h1>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
</body>
```

&nbsp;&nbsp;&nbsp;&nbsp;Nas listas ordenadas, consideramos que a lista tem uma ordem que pode ser de números ou não. Por default é de números a começar em um. Através de atributos, podemos alterar a ordem da lista (**reversed**), definir o elemento onde começa a lista (**start**) e o tipo de elementos para a ordem (**type**)

```html
<body>
  <h1>Web stack - OL normal</h1>
  <ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ol>
  
  <h1>Web stack - OL ordem inversa</h1>
  <ol reversed>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ol>
  
  <h1>Web stack - OL ordem a começar em 10</h1>
  <ol start="10">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ol>
  
  <h1>Web stack - OL ordem em i</h1>
  <ol type="i">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ol>
</body>
```


## Images
&nbsp;&nbsp;&nbsp;&nbsp;Para adicionar imagens utilizamos a tag **\<img/\>** esta não tem closing tag. Para idicarmos ao HTML onde ir buscar a imagem temos que fornecar o atributo **src** onde, ou colocamos o path para a imagem, se esta for local ou o link para a imagem se esta for online.. Podemos também adicionar um atributo **alt**, este vai adicionar um texto que descreve a imagem caso esta não possa ser visualizada. Podemos também definir o tamanho da imagem com **width** e **height**

```html
<body>
  <h1Google</h1>
  <img src="https://www.google.pt/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" alt="Google logo" width="50%"/>
</body>
```

## Vídeos
&nbsp;&nbsp;&nbsp;&nbsp;Podemos também adicionar vídeos à nossa página com a tag **\<video\>** onde temos que colocar o path/link do vídeo no atributo src. Nesta tag existe um atributo **controls** que se for adicionado fornece ao utilizador os controlos habituais num video player. Dentro da tag podemos adicionar texto a que é apresentado caso o vídeo náo possa ser carregado.

```html
<body>
  <h1Google</h1>
  <img src="https://www.google.pt/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" alt="Google logo" width="50%"/>
  <video src="https://www.youtube.com/watch?v=ZRCdORJiUgU&ab_channel=Google" width="500" height="500" controls>
    Vídeo não suportado
  </video>
</body>
```


## Links
&nbsp;&nbsp;&nbsp;&nbsp; No HTML podemos também colocar links para outros elementos na página, para outras páginas, ou para funções. Para isso utilizamos a anchor tag **<a\>**.




