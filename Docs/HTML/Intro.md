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
7. [Mostrar texto](#Mostrar-texto)  
8. [Styling](#Styling)  
9. [Line breaks](#Line-breaks) 
10. [Unordered lists](#Unordered-lists)  
11. [Images](#Images)  


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

## Attributos

## Mostrar texto

## Styling

## Line breaks

## Unordered lists

## Images




