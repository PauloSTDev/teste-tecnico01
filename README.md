# Desafio Técnico - Como rodar o code?

# Forma rápida e online:
Podemos utilizar os compiladores online, segue o Link: https://playcode.io/online-javascript-editor. Em seguida basta copiar o código do arquivo teste_tecnico.js aqui no git, voltando ao site, basta clicar em Open Editor e colar o código no arquivo script.js. O resultado vai aparecer no campo console.

# Forma local
### Instalar o NodeJs
Vamos precisar primeiramente do NodeJS instalado no seu computador, download: https://nodejs.org/en/download/, vamos executar o instalador, aceitar os termos de uso e licença, escolher onde o NodeJs será instalado geralmente deixamos o padrão, depois next, next e instalar. Para validarmos se o NodeJs está realmente instalado podemos abrir o CMD e digitar apenas node, nos dando boas vindas, ou node -v para ver a versão também.

### Instalar uma IDE
Nessa parte indico o baixar o Visual Studio Code, pode ser feito tanto pelo navegador: https://code.visualstudio.com/ quanto na Microsoft Store. Depois de baixado, basta instalar e durante a instalação é importante deixar a opção de adicionar ao PATH marcada.

### Clonando o código do Git
Vamos criar uma pasta no local que achar melhor. Agora precisamos pegar o código do git, segue duas das várias formas:
Forma 1: Vamos fazer o download Zip do repositório no botão code do git e download zip evamos descompactar o arquivo nas pasta que criamos, em seguida clicar com o botão direito no arquivo teste_tecnico.js e abrir com o VsCode.

Forma 2: Executar o comando "git clone https://github.com/SadGitHubb/teste-tecnico01.git" com o prompt na pasta escolhida, para abrir os arquivos com o VsCode podemos executar o comando "code .".

### Executando código
IDE: Executamos o código indo na aba Run e em Run Without Debugging ou Start Debugging, selecione NodeJs.
Terminal: Vamos copiar o caminho do arquivo colocando o teste_tecnico.js no final. Exemplo: C:\Users\user\Área de Trabalho\pasta\teste_tecnico.js e vamos executar o comando 'node "C:\Users\user\Área de Trabalho\pasta\teste_tecnico.js"'

# Independente da forma que escolher como posso testar?
Vamos mudar o valor da variavel "entrada", na linha 1, para qualquer outro numero inteiro, assim vamos obter o resultado final.

É possivel realizar um teste apenas da função "looping", lembrando que essa função vai trazer a soma apenas do divisor que colocar nele, por exemplo 15, que tambem é divisivel por 3, não será feito a soma com os numeros de 3, apenas dos de 5. Nessa função temos duas entradas, a primera entrada é o divisor, nesse exemplo seria 3 ou 5 e a entrada que o usuário informar. Caso for executar esse teste unitário não esqueça de descomentar o console.log() na linha 15 para mostrar o resultado.
