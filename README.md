Uma Rede Neural pode prever seu próximo passo em um jogo de pedra, papel e tesoura?

Sobre
Um experimento envolvendo um jogo de pedra, papel e tesoura, também conhecido como JoKenPo. Durante as três primeiras rodadas, o computador escolhe um movimento (pedra, papel ou tesoura) aleatoriamente. Depois disso, assume que há dados suficientes sobre o player para prever seu padrão. O conjunto de dados consiste nos dois últimos movimentos do jogador, sendo o último, o que eles farão após o primeiro. Meio confuso, certo ?! Simplificando, o computador armazena o primeiro movimento como uma entrada x e o movimento depois como um rótulo ou destino y, o que significa que, após o jogador escolher o rock, por exemplo, existe a possibilidade de escolher o papel como o próximo movimento. Se o computador predizer que o jogador tocará rock, ele tocará papel e assim por diante. Toda vez que o computador perde, ele treina a rede neural novamente.

Conheça os problemas
Este é apenas um experimento, não fique chateado se o computador (minha rede neural) não fizer um bom trabalho jogando contra você. Além disso, nunca excluo o conjunto de dados, o que significa que, eventualmente, o tempo para treinar a rede neural será cada vez maior.

# backend 

O backend foi implementado em javascript com o ambiente de execução em NodeJS com a arquitetura em microserviços e o banco de dados escolhido foi o MongoDB devido a sua fácil utilização e integração o mesmo se encontra conectado remotamente não necessitando assim de nenhuma configuração e instalação em máquina local. Para lógica do jogo foi implementada uma rede neural que executa em tempo real e retorna a resposta dependendo das ações do jogador.

## Dependências

Os requisitos para a exeução do servidor incluem a instalação do node no computador o node é um software que permite a execução do javascript no lado do servidor e que através deste link ele pode ser baixado: https://nodejs.org/en/. Já o npm é instalado juntamente com node, o npm nada mais é um gerenciador de pacotes na qual permite a instalação de diversas outras ferramentas para auxilar no desenvolvimento.
Após o download verificar se os programas foram corretamente instalados:

No terminal basta digitar o comando:

#### node -v 

#### npm -v

Caso apareça o número da versão, significa que o node foi instalado corretamente. Neste caso a versão que foi utilizada foram:

#### node >= 12.14.0
#### npm >= 6.13.4

O proximo passo é a execução do backend para isso basta fazer o clone do repositório e na pasta com o mesmo nome executar o comando:

### npm install 

O comando acima irá instalar todas as dependências necessárias e para executar o servidor basta digitar o comando:

### npm start

O servidor escutará com o link: http://localhost:8080
E se tudo ocorrer bem ao copiar e colar o link aparecerá a seguinte mensagem no navegador: 
#### {"message":"Welcome to ... Example Micro Service"} 
