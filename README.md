# Aula de HTML, CSS e JavaScript

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/Aula-HTML-brightgreen.svg" alt="HTML">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Aula-CSS-blue.svg" alt="CSS">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Aula-JavaScript-orange.svg" alt="JavaScript">
  </a>
</p>

Aula de HTML, CSS e JavaScript. Projeto usado para fazer uma introdução a camada de apresentação para ser desenvolvido na Aula da disciplina GAC116 - Programação Web da UFLA.

O objetivo desse projeto é criar um jogo da velha completo que tenha dois personagens que o jogam. Uma pequena animação deve ser feita a cada vez que um jogador fizer sua jogada. O jogo contém também um histórico dos status final dos jogos anteriores.

## Linguagens Utilizadas

* HTML - Estrutura - [link](https://www.w3schools.com/html/default.asp)
* CSS - Apresentação - [link](https://www.w3schools.com/css/default.asp)
* JavaScript - Comportamento - [link](https://www.w3schools.com/js/default.asp)

## Ferramentas Utilizadas

* Visual Studio Code - [link](https://code.visualstudio.com/)

## Arquitetura Web

Arquitetura Geral das Aplicação Web

![Arquitetura das Aplicações Web](./docs/arquitetura-web.png)

Fonte: [https://blog.grancursosonline.com.br/arquitetura-em-tres-camadas-para-aplicacoes-web/](https://blog.grancursosonline.com.br/arquitetura-em-tres-camadas-para-aplicacoes-web/)

O presente projeto foca no desenvolvimento da camada de apresentação.

![Camada de Apresentação](./docs/Camada-Apresentação.png)

Fonte: [https://twitter.com/cewebbr/status/1290302291388424193/photo/1](https://twitter.com/cewebbr/status/1290302291388424193/photo/1)

## Objetivo da Aula

A animação abaixo mostra de forma visual o resultado esperado nesta aula.

![Objetivo da Aula](./docs/objetivo_jogo.gif)

## Desenvolvimento do Projeto

### Clonando o Repositório

Inicialmente, clone o repositório da seguinte forma:

```bash
git clone https://github.com/ufla-prog-web/aula-html-css-js.git
```

### Baixando o Repositório

Caso deseje ao invês de clonar o repositório (método acima), baixe o repositório do [link](https://github.com/ufla-prog-web/aula-html-css-js) clicando em `Code` e `Download ZIP`.

### Abrindo o Visual Studio Code

Abra o IDE Visual Studio Code na pasta `aula-html-css-js`.

**Dica:** Abra o arquivo `README.md` e clique em `Open Preview to the Side` para facilitar a construção da aplicação.

### Criando a Estrutura do Jogo - HTML

O desenvolvimento de qualquer página web inicia-se com a estrutura da página em HTML.

Crie um arquivo chamado `index.html` dentro da pasta `page` e copie e cole nesse arquivo o código abaixo.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Jogo da Velha</title>
    </head>
    <body>
        <div>
            <h1>Jogo da Velha Temático</h1>        
            <img src="img_logo.png" alt="Logo Jogo da Velha" width="100" height="100">
            <p>Bem-vindo ao nosso emocionante <b>Jogo da Velha</b>!</p>
            <hr>
            <!-- Abaixo temos os campos necessários ao jogo (isso é um comentário -->
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <button>Reiniciar Jogo</button>
            <p>
                Caso queira saber mais sobre o jogo da velha visite o site
                <a href="https://pt.wikipedia.org/wiki/Jogo_da_velha" target="_blank">Wikipedia</a>
            </p>
            <p><b>Desenvolvido por:</b> Turma GAC116</p>
            <p><b>Copyright:</b> 2024</p>
        </div>
    </body>
</html>
```

Abra o arquivo `index.html` no navegador e veja o conteúdo da página. Você pode abrir o arquivo html como se fosse um arquivo ou então mandar um servidor web prover essa página (botão direito no arquivo e clicar em `Open with Live Server`). Se não tiver a extensão do Live Server instalada no seu Visual Studio Code, instale-a. Uma outra forma é iniciando um servidor web no diretório que contém o arquivo `index.html`. Execute o comando abaixo.

```bash
cd page
python3 -m http.server
```

Para trocar a porta utilizada, execute o comando abaixo:

```bash
cd page
python3 -m http.server 8123
```

A página exibida deverá ser parecer com a imagem abaixo.

![Imagem Jogo 01](./docs/img_jogo1.png)

Repare que a página web está bem simples e "feia" esteticamente, posteriormente arrumaremos isso.

A seguir temos algumas explicações sobre o código HTML:

* A declaração `<!DOCTYPE html>` define que este documento é um documento HTML5.
* O elemento `<html>` é o elemento raiz de uma página HTML.
* O elemento `<head>` contém meta informações sobre a página HTML.
* O elemento `<title>` especifica um título para a página HTML.
* O elemento `<body>` define o corpo do documento.
* O elemento `<div>` define define uma divisão lógica no layout da página.
* O elemento `<h1>` define um título grande.
* O elemento `<img>` define uma imagem a ser exibida.
* O elemento `<p>` define um parágrafo.
* O elemento `<b>` define que o texto está em negrito.
* O elemento `<hr>` define uma barra horizontal.
* O elemento `<button>` define um botão.
* O elemento `<a>` define um link para alguma página.

Repare que a maioria dos elementos HTML possuem uma tag de abertura e uma de fechamento, como `<title>` (que indica abertura) `</title>` (que indica fechamento). Mas existem excessões, como o elemento `<hr>`. Alguns elementos possuem atributos, como o elemento `<img>` que possui os atributos `src`, `alt`, `width` e `height`.

### Criando Estilos da Apresentação no Jogo - HTML + CSS

Nessa etapa, iremos melhorar o aspecto visual da nossa página web através da incorporação de um estilo CSS. Altere o arquivo chamado `index.html` dentro da pasta `page` e coloque o conteúdo do código abaixo.

```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jogo da Velha</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div class="conteiner">
            <h1>Jogo da Velha Temático</h1>        
            <img src="img_logo.png" alt="Logo Jogo da Velha" width="100" height="100">
            <p>Bem-vindo ao nosso emocionante <b>Jogo da Velha</b>!</p>
            <hr>
            <div class="tabuleiro">
                <div class="celula"></div>
                <div class="celula"></div>
                <div class="celula"></div>
                <div class="celula"></div>
                <div class="celula"></div>
                <div class="celula"></div>
                <div class="celula"></div>
                <div class="celula"></div>
                <div class="celula"></div>
            </div>
            <button>Reiniciar Jogo</button>
            <p>
                Caso queira saber mais sobre o jogo da velha visite o site
                <a href="https://pt.wikipedia.org/wiki/Jogo_da_velha" target="_blank">Wikipedia</a>
            </p>
            <p><b>Desenvolvido por:</b> Turma GAC116</p>
            <p><b>Copyright:</b> 2024</p>
        </div>
    </body>
</html>
```

A seguir temos algumas explicações sobre as atualizações do código HTML:

* O atributo `lang` dentro do elemento `<html>` é usado para definir o idioma principal do conteúdo da página, nesse caso "pt-BR" indica o Português Brasileiro. Isso é utilizado para acessibilidade, internacionalização e motores de busca.
* O elemento `<meta charset="UTF-8">` especifica o conjunto de caracteres utilizado para interpretar e exibir o conteúdo textual da página web.
* O elemento `<meta name="viewport" content="width=device-width, initial-scale=1.0">` é usado para controlar como a página é exibida em dispositivos móveis, ajustando a largura e a escala inicial da viewport (a área visível da página em um navegador).
* O elemento `<link>` é usado para vincular recursos externos, como folhas de estilo CSS, ao documento HTML. Quando você usa `<link rel="stylesheet" href="styles.css">`, está basicamente dizendo ao navegador para carregar o arquivo "styles.css" e aplicar suas regras de estilo ao documento HTML atual.
* O atributo `class` dentro do elemento `<div class="nome_da_classe">` é usado para associar um ou mais nomes de classes a um elemento HTML. As classes são usadas principalmente para associar um elemento com regras de estilo em um arquivo de folha de estilo CSS externo ou interno, ou para selecionar e manipular elementos com JavaScript.

Em seguida, crie um arquivo chamado `styles.css` dentro da pasta `page` e copie e cole nesse arquivo o código abaixo.

```css
.conteiner {
    text-align: center;
    font-size: 16px;
}

.tabuleiro {
    display: grid;
    grid-template-columns: repeat(3, 120px);
    grid-gap: 5px;
    margin: 20px auto;
    justify-content: center;
}

.celula {
    width: 120px;
    height: 120px;
    background-color: darkgray;
    cursor: pointer;
}
```

A seguir temos algumas explicações sobre o código CSS:

* `.conteiner`: Este é um seletor CSS que aplica estilos a elementos que possuem a classe "conteiner" em seu HTML.
  * `text-align: center;`: Isso centraliza o texto dentro dos elementos com a classe "conteiner".
  * `font-size: 16px;`: Define o tamanho da fonte como 16 pixels para elementos com a classe "conteiner".

* `.tabuleiro`: Este é um seletor CSS que aplica estilos a elementos que possuem a classe "tabuleiro" em seu HTML.
  * `display: grid;`: Define o layout do elemento como uma grade.
  * `grid-template-columns: repeat(3, 120px);`: Define as colunas da grade, repetindo 3 vezes uma coluna de largura 120 pixels.
  * `grid-gap: 5px;`: Define o espaçamento entre as células da grade como 5 pixels.
  * `margin: 20px auto;`: Define uma margem superior e inferior de 20 pixels e margens laterais automáticas para centralizar o elemento horizontalmente na página.
  * `justify-content: center;`: Define o alinhamento horizontal do conteúdo da grade como centralizado.

* `.celula`: Este é um seletor CSS que aplica estilos a elementos que possuem a classe "celula" em seu HTML.
  * `width: 120px;`: Define a largura das células como 120 pixels.
  * `height: 120px;`: Define a altura das células como 120 pixels.
  * `background-color: darkgray;`: Define a cor de fundo das células como cinza escuro.
  * `cursor: pointer;`: Define o cursor do mouse como um ponteiro ao passar sobre as células, indicando que elas são interativas.

Abra o arquivo `index.html` no navegador e veja o conteúdo da página. A página exibida deverá ser parecer com a imagem abaixo.

![Imagem Jogo 02](./docs/img_jogo2.png)

### Melhorando a Visualização do Jogo - HTML + CSS

Nessa etapa, iremos melhor um pouco mais a visualização da página web. Para isso iremos atualizar o HTML e o CSS da página. No HTML iremos criar uma estrutura de cabeçalho e rodapé. No CSS iremos estilizar o `body`, `header`, `footer` e `button`.

Atualize o conteúdo do arquivo `index.html` para o conteúdo exibido abaixo.

```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">    
        <title>Jogo da Velha</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div class="conteiner">
            <header>
                <h1>Jogo da Velha Temático</h1>        
                <img src="img_logo.png" alt="Logo Jogo da Velha" width="100" height="100">
            </header>
            <p>Bem-vindo ao nosso emocionante <b>Jogo da Velha</b>!</p>
            <hr>
            <div class="tabuleiro">
                <div class="celula"></div>
                <div class="celula"></div>
                <div class="celula"></div>
                <div class="celula"></div>
                <div class="celula"></div>
                <div class="celula"></div>
                <div class="celula"></div>
                <div class="celula"></div>
                <div class="celula"></div>
            </div>
            <button>Reiniciar Jogo</button>
            <p>
                Caso queira saber mais sobre o jogo da velha visite o site
                <a href="https://pt.wikipedia.org/wiki/Jogo_da_velha" target="_blank">Wikipedia</a>
            </p>
            <footer>
                <p><b>Desenvolvido por:</b> Turma GAC116</p>
                <p><b>Copyright:</b> 2024</p>
            </footer>
        </div>
    </body>
</html>
```

A seguir temos algumas explicações sobre as atualizações do código HTML:

* A tag HTML `<header>` é usada para definir um cabeçalho de uma página do documento HTML. Esse cabeçalho geralmente contém informações introdutórias ou de navegação para o conteúdo principal da página. Dentro desse cabeçalho foram colocados o título e a logo da página web.
* A tag HTML `<footer>` é usada para definir um rodapé de uma página do documento HTML. Dentro desse rodapé foram colocados dois parágrafos da página web.

Adicione ao final do arquivo `styles.css` o conteúdo CSS exibido abaixo:

```css
...

body {
    font-family: Arial, sans-serif;
}

header {
    background-color: #8AF;
    color: #FFF;
    padding: 20px;
}

footer {
    background-color: #8AF;
    color: #FFF;
    padding: 20px;
}

button {
    background-color: #39F;
    color: white;
    cursor: pointer;
    font-size: 18px;
    border: none;
    border-radius: 12px;
    padding: 10px 20px;
    margin-top: 5px;
}

button:hover {
    background-color: #17D;
}
```

A seguir temos algumas explicações sobre as atualizações do código CSS:

* O seletor `body` é usado para aplicar estilos ao elemento `<body>` do documento HTML. O elemento `<body>` é o elemento principal que contém todo o conteúdo visível de uma página da web. Quando você aplica estilos usando o seletor `body`, esses estilos afetam todo o conteúdo da página, a menos que sejam anulados por estilos aplicados a elementos filhos de forma mais específica.
    * `font-family: Arial, sans-serif;`: Esta regra define a família de fontes para o texto dentro do elemento `<body>`. A primeira escolha de fonte é "Arial", uma fonte sans-serif comum, que será usada se estiver disponível no sistema do usuário. Se "Arial" não estiver disponível, o navegador procurará por uma fonte sans-serif genérica para usar, que é especificada como "sans-serif". Isso garante que o texto dentro do elemento `<body>` seja exibido com uma fonte legível, como Arial, ou, se Arial não estiver disponível, uma fonte sans-serif genérica.
* O seletor `header` é usado para aplicar estilos ao elemento `<header>` do documento HTML.
    * `background-color: #8AF;`: Esta regra define a cor de fundo do elemento `<header>`. A cor de fundo é definida como "#8AF", que é uma cor em formato hexadecimal. Isso dará ao cabeçalho uma cor de fundo azul claro.
    * `color: #FFF;`: Esta regra define a cor do texto dentro do elemento `<header>`. A cor do texto é definida como "#FFF", que é uma cor em formato hexadecimal representando branco. Isso fará com que o texto dentro do cabeçalho seja exibido em branco.
    * `padding: 20px;`: Esta regra define o preenchimento interno do elemento `<header>`. O preenchimento interno é a distância entre o conteúdo do elemento e suas bordas. Neste caso, o preenchimento é definido como "20px", o que significa que haverá um espaço de 20 pixels entre o conteúdo dentro do cabeçalho e suas bordas. Isso proporcionará um espaço ao redor do conteúdo dentro do cabeçalho, dando uma aparência mais espaçosa e esteticamente agradável.
* O seletor `footer` é usado para aplicar estilos ao elemento `<footer>` do documento HTML.
* O seletor `button` é usado para aplicar estilos a todos os elementos `<button>` do documento HTML.
    * `background-color: #39F;`: Esta regra define a cor de fundo dos botões. A cor de fundo é definida como "#39F", que é uma cor azul em formato hexadecimal.
    * `color: white;`: Esta regra define a cor do texto dos botões como branco.
    * `cursor: pointer;`: Esta regra define o cursor do mouse ao passar sobre os botões como um ponteiro, indicando que eles são clicáveis.
    * `font-size: 18px;`: Esta regra define o tamanho da fonte dos textos nos botões como 18 pixels.
    * `border: none;`: Esta regra remove a borda dos botões, deixando-os sem bordas visíveis.
    * `border-radius: 12px;`: Esta regra define o raio do canto dos botões como 12 pixels, dando-lhes uma aparência arredondada.
    * `padding: 10px 20px;`: Esta regra define o preenchimento interno dos botões. O preenchimento é de 10 pixels na parte superior e inferior e de 20 pixels nos lados esquerdo e direito, proporcionando espaço ao redor do texto dentro dos botões.
    * `margin-top: 5px;`: Esta regra define uma margem superior de 5 pixels para os botões, dando espaço entre eles e os elementos acima deles.
* O seletor `button:hover` é usado para aplicar estilos aos elementos `<button>` quando o cursor do mouse está sobre eles (quando estão em estado de hover).
    * `background-color: #17D;`: Esta regra define a cor de fundo dos botões quando o cursor do mouse está sobre eles. A cor de fundo é definida como "#17D", que é uma cor azul mais escura em formato hexadecimal.

Abra o arquivo `index.html` no navegador e veja o conteúdo da página. A página exibida deverá ser parecer com a imagem abaixo.

![Imagem Jogo 03](./docs/img_jogo3.png)

### Incorporando Interatividade com o Jogo - HTML + CSS + JS

Nessa etapa, iremos criar interatividade com o nosso jogo através da incorporação de códigos JavaScript. Para isso iremos atualizar o HTML, o CSS da página, além de criar um código JavaScript. No HTML iremos chamar o código do JavaScript e colocar os eventos para ouvir os cliques do botão do mouse. No CSS iremos estilizar a célula um pouco mais. No JavaScript iremos permitir fazer jogadas e permitir reiniciar o jogo.

Atualize o conteúdo do arquivo `index.html` para o conteúdo exibido abaixo.

```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">    
        <title>Jogo da Velha</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div class="conteiner">
            <header>
                <h1>Jogo da Velha Temático</h1>        
                <img src="img_logo.png" alt="Logo Jogo da Velha" width="100" height="100">
            </header>
            <p>Bem-vindo ao nosso emocionante <b>Jogo da Velha</b>!</p>
            <hr>
            <div class="tabuleiro">
                <div class="celula" onclick="fazerMovimento(0)"></div>
                <div class="celula" onclick="fazerMovimento(1)"></div>
                <div class="celula" onclick="fazerMovimento(2)"></div>
                <div class="celula" onclick="fazerMovimento(3)"></div>
                <div class="celula" onclick="fazerMovimento(4)"></div>
                <div class="celula" onclick="fazerMovimento(5)"></div>
                <div class="celula" onclick="fazerMovimento(6)"></div>
                <div class="celula" onclick="fazerMovimento(7)"></div>
                <div class="celula" onclick="fazerMovimento(8)"></div>
            </div>
            <button onclick="reiniciarJogo()">Reiniciar Jogo</button>
            <p>
                Caso queira saber mais sobre o jogo da velha visite o site
                <a href="https://pt.wikipedia.org/wiki/Jogo_da_velha" target="_blank">Wikipedia</a>
            </p>
            <footer>
                <p><b>Desenvolvido por:</b> Turma GAC116</p>
                <p><b>Copyright:</b> 2024</p>
            </footer>
        </div>
        <script src="script.js"></script>
    </body>
</html>
```

A seguir temos algumas explicações sobre as atualizações do código HTML:

* O elemento `<div>` da classe "celula" agora ouve um evento de click `onclick="fazerMovimento(x)`. Ao receber um click do mouse (botão esquerdo) o método do JavaScript chamado `fazerMovimento` é chamado com o valor `x` passado como parâmetro.
* O elemento `<button>`  agora ouve um evento de click `onclick="reiniciarJogo()`. Ao receber um click do mouse (botão esquerdo) o método do JavaScript chamado `reiniciarJogo` é chamado sem nenhum parâmetro.
* O elemento `<script>`, no final do arquivo, carrega um arquivo JavaScript chamado `script.js`.

Atualize o código do arquivo `styles.css` dentro da página `page` para que a `celula` tenha mais alguns atributos. Assim esse código da célula deve se parecer com o código abaixo:

```css
...

.celula {
    width: 120px;
    height: 120px;
    background-color: darkgray;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 90px;
    font-weight: bold;
}

...
```

A seguir temos algumas explicações sobre as atualizações do código CSS:

* `.celula`: Este é um seletor CSS que aplica estilos a elementos que possuem a classe "celula" em seu HTML.
    * `display: flex;`: Esta regra define o modelo de layout flexível para os elementos com a classe "celula", permitindo um controle mais preciso sobre o posicionamento dos elementos internos.
    * `justify-content: center;` Esta regra centraliza os itens dentro dos elementos da classe "celula" horizontalmente.
    * `align-items: center;`: Esta regra centraliza os itens dentro dos elementos da classe "celula" verticalmente.
    * `font-size: 90px;`: Esta regra define o tamanho da fonte dos elementos com a classe "celula" como 90 pixels.
    * `font-weight: bold;`: Esta regra define o estilo da fonte como negrito para os elementos com a classe "celula".

Crie um arquivo chamado `script.js` dentro da pasta `page` e copie e cole nesse arquivo o código abaixo.

```javascript
let jogadorAtual = 'X';
let tabuleiro = ['', '', '', 
                '', '', '', 
                '', '', ''];

function fazerMovimento(index) {
    if (tabuleiro[index] == '') {
        tabuleiro[index] = jogadorAtual;
        document.getElementsByClassName('celula')[index].textContent = jogadorAtual;
        jogadorAtual = jogadorAtual == 'X' ? 'O' : 'X';
    }
}

function reiniciarJogo() {
    jogadorAtual = 'X';
    tabuleiro = ['', '', '', 
                '', '', '', 
                '', '', ''];
    const celulas = document.getElementsByClassName('celula');
    for (let i = 0; i < celulas.length; i++) {
        celulas[i].textContent = '';
    }
}
```

A seguir temos algumas explicações sobre o código JavaScript:

* `let jogadorAtual = 'X';`: Cria uma variável chamada jogadorAtual e a incializa com o valor 'X'.
* `let tabuleiro = ['', '', '',  '', '', '',  '', '', ''];`: Cria uma variável chamada tabuleiro e a incializa como um vetor de valores vazio `''`.
* `fazerMovimento(index)`: Esta função é chamada quando um jogador faz um movimento clicando em uma célula do tabuleiro. Ela recebe um índice como argumento, que representa a posição da célula no tabuleiro. Se a célula estiver vazia (representada por `''` no array tabuleiro), o jogador atual pode fazer o movimento. A função atualiza o estado do tabuleiro, definindo o valor da célula correspondente como o símbolo do jogador atual ('X' ou 'O'). Em seguida, atualiza o texto da célula no HTML para mostrar o símbolo do jogador atual. Por fim, alterna o jogador atual entre 'X' e 'O', para que o próximo jogador possa fazer o movimento.
* `reiniciarJogo()`: Esta função é chamada quando o jogo precisa ser reiniciado. Ela redefine o jogador atual como 'X' e limpa o tabuleiro, preenchendo-o com valores vazios ''. Em seguida, percorre todas as células do tabuleiro no HTML e remove o texto delas, deixando as células vazias novamente.

Como o JavaScript interage com sua página web? O JavaScript faz essa interação através do DOM (Document Object Model) ou Modelo de Documento do Objeto. Com o JavaScript você pode acessar e alterar elementos, além de poder adicionar novos elementos ao DOM.

O que é o DOM? O DOM trata da modelagem de todo o HTML. O DOM é como uma árvore genealógica. O elemento que antecede o document é o window, que nada mais é que a janela do navegador. Em sua estrutura, o document está no topo como objeto global e tem como elemento raiz a tag html e todas as outras descendem dela através das suas ramificações (branchs). A tag html, objeto pai, apresenta dois objetos filhos: o head e o body. A tag head é pai da tag title, e a body é pai das tags a e h1, e assim sucessivamente, de acordo com a hierarquia.

![Explicação DOM](./docs/DOM.png)

Fonte: [https://en.wikipedia.org/wiki/Document_Object_Model](https://en.wikipedia.org/wiki/Document_Object_Model)

Abra o arquivo `index.html` no navegador e veja o conteúdo da página. A página exibida deverá ser parecer com a imagem abaixo.

![Imagem Jogo 04](./docs/img_jogo4.png)

### Melhorando a Interatividade com o Jogo - HTML + CSS + JS

Agora, iremos melhor a interatividade com o jogo através de um campo de status da partida que será exibido na tela. Quando um dos jogadores ganhar uma mensagem será exibida. Além disso, uma estilização da página será feita através do JavaScript.

Atualize o conteúdo do arquivo `index.html` para o conteúdo destacado abaixo.

```html
<!DOCTYPE html>
<html lang="pt-BR">
    ...
    <body>
        <div class="conteiner">
            ...
            <p id="status"></p> <!--Acrescentar essa linha apenas antes do botão-->
            <button onclick="reiniciarJogo()">Reiniciar Jogo</button>
            ...
        </div>
    </body>
</html>
```

A seguir temos algumas explicações sobre as atualizações do código HTML:

* Um elemento `<p>` com o atributo id igual a "status" foi criado. Nesse elemento iremos escrever algumas informações do status atual do jogo. Repare que esse parágrafo inicialmente está vazio. O JavaScript é quem irá alimentar o conteúdo exibido.

OBS: O arquivo CSS não foi alterado.

Altere o conteúdo do arquivo `script.js` dentro da pasta `page` para o seguinte código.

```javascript
let jogoAtivo = true;
let jogadorAtual = 'X';
let tabuleiro = ['', '', '', 
                '', '', '', 
                '', '', ''];

const padroesVitoria = [
    [0, 1, 2], //primeira linha
    [3, 4, 5], //segunda linha
    [6, 7, 8], //terceira linha
    [0, 3, 6], //primeira coluna
    [1, 4, 7], //segunda coluna
    [2, 5, 8], //terceira coluna
    [0, 4, 8], //diagnoal principal
    [2, 4, 6]  //diagnoal secundária
];

function verificaVencedor() {
    for (let i = 0; i < padroesVitoria.length; i++) {
        const [a, b, c] = padroesVitoria[i];
        if (tabuleiro[a] && tabuleiro[a] == tabuleiro[b] && tabuleiro[a] == tabuleiro[c]) {
            jogoAtivo = false;
            return tabuleiro[a];
        }
    }
    if (!tabuleiro.includes('')) {
        jogoAtivo = false;
        return 'empate';
    }
    return null;
}

function mostrarStatus() {
    const vencedor = verificaVencedor();
    const elementoStatus = document.getElementById('status');
    if (vencedor) {
        if (vencedor == 'empate') {
            elementoStatus.textContent = "Empate!";
        } else {
            elementoStatus.textContent = `O Jogador ${vencedor} ganhou!`;
        }
    } else {
        elementoStatus.textContent = `É a vez do Jogador ${jogadorAtual}`;
    }
}

function fazerMovimento(index) {
    if (jogoAtivo && tabuleiro[index] == '') {
        tabuleiro[index] = jogadorAtual;
        document.getElementsByClassName('celula')[index].textContent = jogadorAtual;
        if (jogadorAtual == 'X'){
            document.getElementsByClassName('celula')[index].style.color = "#FD0";
        } else {
            document.getElementsByClassName('celula')[index].style.color = "#F44";
        }
        jogadorAtual = jogadorAtual == 'X' ? 'O' : 'X';
        mostrarStatus();
    }
}

function reiniciarJogo() {
    jogoAtivo = true;
    jogadorAtual = 'X';
    tabuleiro = ['', '', '', 
                '', '', '', 
                '', '', ''];
    const celulas = document.getElementsByClassName('celula');
    for (let i = 0; i < celulas.length; i++) {
        celulas[i].textContent = '';
    }
    mostrarStatus();
}

mostrarStatus();
```

A seguir temos algumas explicações sobre as atualizações do código JavaScript:

* `jogoAtivo`: Uma variável booleana que indica se o jogo está ativo ou não.
* `padroesVitoria`: Uma matriz que define os padrões de vitória no jogo da velha. Cada subarray representa uma linha, coluna ou diagonal no tabuleiro onde um jogador pode ganhar.
* `verificaVencedor()`: Uma função que verifica se um jogador ganhou o jogo ou se houve um empate.
`mostrarStatus()`: Uma função que atualiza o elemento HTML com o status atual do jogo (quem está ganhando, se houve um empate ou de quem é a vez de jogar).
* `fazerMovimento(index)`: Uma função chamada quando um jogador faz um movimento clicando em uma célula do tabuleiro. Esta função verifica se o movimento é válido, atualiza o estado do tabuleiro, muda o jogador atual e atualiza o status do jogo.
* `reiniciarJogo()`: Uma função chamada para reiniciar o jogo, redefinindo todas as variáveis para seus valores iniciais e limpando o tabuleiro.

Abra o arquivo `index.html` no navegador e veja o conteúdo da página. A página exibida deverá ser parecer com a imagem abaixo.

![Imagem Jogo 05](./docs/img_jogo5.png)

### Tornando o Jogo Temático e Dinâmico - HTML + CSS + JS

Nessa etapa, iremos tornar o nosso jogo temático e dinâmico. Por temático quermos dizer que iremos colocar dois jogadores no jogo da Velha e os mesmos são do conhecido jogo "Mario Bros" (Mario e Luigi). Para isso iremos atualizar o HTML, o CSS e JavaScript da página web.
No HTML, iremos colocar duas imagens gif dos personagens citados, além de adicionar o histórico de vitórias. No CSS, iremos colocar mais alguns elementos para estilização dos dois personagens. No JavaScript, iremos colocar animações estilizadas quando um dos jogadores ganhar, além de animações sinalizando a vez de cada jogador.

Atualize o conteúdo do arquivo `index.html` para o conteúdo exibido abaixo.

```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">    
        <title>Jogo da Velha</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div class="conteiner">
            <header>
                <h1>Jogo da Velha Temático</h1>        
                <img src="img_logo.png" alt="Logo Jogo da Velha" width="100" height="100">
            </header>
            <p>Bem-vindo ao nosso emocionante <b>Jogo da Velha</b>!</p>
            <hr>
            <div class="tabuleiro">
                <div class="celula" onclick="fazerMovimento(0)"></div>
                <div class="celula" onclick="fazerMovimento(1)"></div>
                <div class="celula" onclick="fazerMovimento(2)"></div>
                <div class="celula" onclick="fazerMovimento(3)"></div>
                <div class="celula" onclick="fazerMovimento(4)"></div>
                <div class="celula" onclick="fazerMovimento(5)"></div>
                <div class="celula" onclick="fazerMovimento(6)"></div>
                <div class="celula" onclick="fazerMovimento(7)"></div>
                <div class="celula" onclick="fazerMovimento(8)"></div>
            </div>
            <div>
                <div class="conteiner_jogo">
                    <h2 id="marcadorX">X</h2>
                    <img id="imgX" class="img_personagem" src="img_mario.gif" alt="Mario" width="150" height="200">
                </div>
                <div class="conteiner_jogo">
                    <p id="status"></p>
                    <button onclick="reiniciarJogo()">Reiniciar Jogo</button>
                    <p><b>Histórico do Jogo</b></p>
                    <p id="qtdVitoriaX">Quantidade de Vitória X: 0</p>
                    <p id="qtdVitoriaO">Quantidade de Vitória O: 0</p>
                    <p id="qtdEmpate">Quantidade de Empate: 0</p>
                </div>
                <div class="conteiner_jogo">
                    <h2 id="marcadorO">O</h2>
                    <img id="imgO" class="img_personagem" src="img_luigi.gif" alt="Mario" width="150" height="200">
                </div>
            </div>
            <p>
                Caso queira saber mais sobre o jogo da velha visite o site
                <a href="https://pt.wikipedia.org/wiki/Jogo_da_velha" target="_blank">Wikipedia</a>
            </p>
            <footer>
                <p><b>Desenvolvido por:</b> Turma GAC116</p>
                <p><b>Copyright:</b> 2024</p>
            </footer>
        </div>
        <script src="script.js"></script>
    </body>
</html>
```

A seguir temos algumas explicações sobre as atualizações do código HTML:

* `<div>`: Este é um elemento de bloco genérico usado para agrupar outros elementos. Neste caso, três divs estão sendo usadas para dividir a área do jogo em três colunas.
* `<div class="conteiner_jogo">`: Estes são contêineres de jogo que contêm elementos relacionados a cada jogador e ao status do jogo. Eles têm uma largura de 33% do contêiner pai, permitindo que ocupem uma terça parte da largura disponível.
* `<h2 id="marcadorX">X</h2>` e `<h2 id="marcadorO">O</h2>`: Estes são cabeçalhos de nível 2 que exibem o marcador de cada jogador (X e O). Eles têm um ID específico (marcadorX e marcadorO), que é usado para estilização CSS específica.
* `<img id="imgX" class="img_personagem" src="img_mario.gif" alt="Mario" width="150" height="200">` e `<img id="imgO" class="img_personagem" src="img_luigi.gif" alt="Mario" width="150" height="200">`: Estas são imagens dos personagens do jogo (Mario e Luigi). Cada imagem tem um ID específico (imgX e imgO) e uma classe (img_personagem) para estilização CSS específica.
* `<p id="qtdVitoriaX">Quantidade de Vitória X: 0</p>`, `<p id="qtdVitoriaO">Quantidade de Vitória O: 0</p>` e `<p id="qtdEmpate">Quantidade de Empate: 0</p>`: Estes são parágrafos com IDs específicos (qtdVitoriaX, qtdVitoriaO e qtdEmpate) que serão usados para exibir estatísticas do jogo, como a quantidade de vitórias para cada jogador e a quantidade de empates através da manipulação via JavaScript.

Adicione ao final do arquivo `styles.css` o conteúdo CSS exibido abaixo:

```css
...

.conteiner_jogo {
    width: 33%;
    float: left;
}

.img_personagem {
    opacity: 0.2;
}

#marcadorX {
    font-weight: bold;
    font-size: 60px;
    color: #FD0;
    margin: 20px;
}

#marcadorO {
    font-weight: bold;
    font-size: 60px;
    color: #F44;
    margin: 20px;
}
```

A seguir temos algumas explicações sobre as atualizações do código CSS:

* `.conteiner_jogo`: É um seletor de classe CSS.
    * `width: 33%;`: define a largura dos elementos da classe "conteiner_jogo" como 33% da largura do contêiner pai.
    * `float: left;`: faz com que os elementos com a classe "conteiner_jogo" flutuem para a esquerda, permitindo que vários elementos sejam colocados lado a lado.

* `.img_personagem`: é um seletor de classe CSS.
    * `opacity: 0.2;` define a opacidade das imagens com a classe "img_personagem" como 0.2, tornando-as mais transparentes.

* `#marcadorX`: é um seletor de ID CSS, aplicado a um elemento com o atributo id igual a "marcadorX".
    * `font-weight: bold;`: define a fonte como negrito para o texto dentro do elemento com o ID marcadorX.
    * `font-size: 60px;`: define o tamanho da fonte como 60 pixels para o texto dentro do elemento com o ID marcadorX.
    * `color: #FD0;`: define a cor do texto como amarelo (#FD0) para o elemento com o ID marcadorX.
    * `margin: 20px;`: define uma margem de 20 pixels ao redor do elemento com o ID marcadorX.

* `#marcadorO`: é um seletor de ID CSS, aplicado a um elemento com o atributo id igual a "marcadorO".
    * `font-weight: bold;`: define a fonte como negrito para o texto dentro do elemento com o ID marcadorO.
    * `font-size: 60px;`: define o tamanho da fonte como 60 pixels para o texto dentro do elemento com o ID marcadorO.
    * `color: #F44;`: define a cor do texto como vermelho (#F44) para o elemento com o ID marcadorO.
    * `margin: 20px;`: define uma margem de 20 pixels ao redor do elemento com o ID marcadorO.

Altere o conteúdo do arquivo `script.js` dentro da pasta `page` para o seguinte código.

```javascript
let jogoAtivo = true;
let jogadorAtual = 'X';
let tabuleiro = ['', '', '', 
                '', '', '', 
                '', '', ''];

document.getElementById('imgX').style.opacity = 1.0;
document.getElementById('imgO').style.opacity = 0.2;
document.getElementById('imgX').style.width = "150px";
document.getElementById('imgO').style.width = "150px";

qtdVitoriaX = 0
qtdVitoriaO = 0
qtdEmpate = 0

const padroesVitoria = [
    [0, 1, 2], //primeira linha
    [3, 4, 5], //segunda linha
    [6, 7, 8], //terceira linha
    [0, 3, 6], //primeira coluna
    [1, 4, 7], //segunda coluna
    [2, 5, 8], //terceira coluna
    [0, 4, 8], //diagnoal principal
    [2, 4, 6]  //diagnoal secundária
];

function verificaVencedor() {
    for (let i = 0; i < padroesVitoria.length; i++) {
        const [a, b, c] = padroesVitoria[i];
        if (tabuleiro[a] && tabuleiro[a] == tabuleiro[b] && tabuleiro[a] == tabuleiro[c]) {
            jogoAtivo = false;
            return tabuleiro[a];
        }
    }
    if (!tabuleiro.includes('')) {
        jogoAtivo = false;
        return 'empate';
    }
    return null;
}

function mostrarStatus() {
    const vencedor = verificaVencedor();
    const elementoStatus = document.getElementById('status');
    if (vencedor) {
        if (vencedor == 'empate') {
            elementoStatus.textContent = "Empate!";
            document.getElementById('imgX').style.opacity = 1.0;
            document.getElementById('imgO').style.opacity = 1.0;
            qtdEmpate += 1;
            document.getElementById('qtdEmpate').textContent = "Quantidade de Empate:     " + qtdEmpate;
        } else {
            elementoStatus.textContent = `O Jogador ${vencedor} ganhou!`;
            if (vencedor == 'X'){
                document.getElementById('imgX').style.opacity = 1.0;
                document.getElementById('imgO').style.opacity = 0.2;
                document.getElementById('imgX').style.width = "300px";
                document.getElementById('imgX').style.transition = "width 1s ease";
                qtdVitoriaX += 1;
                document.getElementById('qtdVitoriaX').textContent = "Quantidade de Vitória X: " + qtdVitoriaX;
            }else {
                document.getElementById('imgO').style.opacity = 1.0;
                document.getElementById('imgX').style.opacity = 0.2;
                document.getElementById('imgO').style.width = "300px";
                document.getElementById('imgO').style.transition = "width 1s ease";
                qtdVitoriaO += 1;
                document.getElementById('qtdVitoriaO').textContent = "Quantidade de Vitória O: " + qtdVitoriaO;
            }
        }
    } else {
        elementoStatus.textContent = `É a vez do Jogador ${jogadorAtual}`;
    }
}

function fazerMovimento(index) {
    if (jogoAtivo && tabuleiro[index] == '') {
        tabuleiro[index] = jogadorAtual;
        document.getElementsByClassName('celula')[index].textContent = jogadorAtual;        
        if (jogadorAtual == 'X'){
            document.getElementsByClassName('celula')[index].style.color = "#FD0";
            document.getElementById('imgO').style.opacity = 1.0;
            document.getElementById('imgX').style.opacity = 0.2;
            
        } else {
            document.getElementsByClassName('celula')[index].style.color = "#F44";
            document.getElementById('imgX').style.opacity = 1.0;
            document.getElementById('imgO').style.opacity = 0.2;
        }
        jogadorAtual = jogadorAtual == 'X' ? 'O' : 'X';
        mostrarStatus();
    }
}

function reiniciarJogo() {
    jogoAtivo = true;
    jogadorAtual = 'X';
    tabuleiro = ['', '', '', 
                '', '', '', 
                '', '', ''];
    document.getElementById('imgX').style.opacity = 1.0;
    document.getElementById('imgO').style.opacity = 0.2;
    document.getElementById('imgX').style.width = "150px";
    document.getElementById('imgO').style.width = "150px";
    const celulas = document.getElementsByClassName('celula');
    for (let i = 0; i < celulas.length; i++) {
        celulas[i].textContent = '';
    }
    
    mostrarStatus();
}

mostrarStatus();
```

A seguir temos algumas explicações de algumas linhas isoladas do código JavaScript:

* `document.getElementById('imgX').style.opacity = 1.0;`: Esta linha define a opacidade da imagem com o ID imgX para 1.0, ou seja, totalmente opaca. Isso torna a imagem completamente visível.
* `document.getElementById('imgO').style.opacity = 0.2;`: Esta linha define a opacidade da imagem com o ID imgO para 0.2, o que a torna parcialmente opaca. Isso torna a imagem mais transparente.
* `document.getElementById('imgX').style.width = "150px";`: Esta linha define a largura da imagem com o ID imgX como 150 pixels.
* `document.getElementById('qtdEmpate').textContent = "Quantidade de Empate: " + qtdEmpate;`: Aqui, o conteúdo do elemento com o ID qtdEmpate é definido como "Quantidade de Empate: " seguido pelo valor da variável qtdEmpate. Isso atualiza o texto mostrado na página para refletir a quantidade atual de empates.
* `document.getElementById('imgX').style.transition = "width 1s ease";`: Esta linha adiciona uma transição de animação à mudança de largura da imagem com o ID imgX. A largura mudará durante um período de 1 segundo, usando uma função de transição "ease" (suavização).
* `document.getElementsByClassName('celula')[index].style.color = "#FD0";`: Aqui, o texto da célula correspondente ao índice especificado é definido como amarelo (#FD0).

Abra o arquivo `index.html` no navegador e veja o conteúdo da página. A página exibida deverá ser parecer com a imagem abaixo.

![Imagem Jogo 06](./docs/img_jogo6.png)

## Melhorias no Projeto do Jogo

A seguir tem-se algumas sugestões de melhoria nesse projeto de jogo.

* **Modos de Jogo Alternativos:** Além do modo tradicional de 3x3, adicione modos de jogo alternativos, como tabuleiros maiores (4x4, 5x5). Isso pode adicionar variedade e desafio ao jogo.
* **Temas Visuais:** Implemente diferentes temas visuais para o tabuleiro do jogo da velha. Por exemplo, você pode ter temas como "Espaço", "Fantasia", "Subaquático", "Histórico", entre outros. Cada tema pode ter um conjunto de imagens de fundo e ícones de jogador correspondentes.
* **Modo Torneio:** Implemente uma animação final para o jogador que vencer um total de 10 partidas. Essa animação deve conter algum pódio e um botão de reiniciar o torneio.
