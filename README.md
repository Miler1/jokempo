Uma Rede Neural pode prever seu próximo passo em um jogo de pedra, papel e tesoura?

Sobre
Um experimento envolvendo um jogo de pedra, papel e tesoura, também conhecido como JoKenPo. Durante as três primeiras rodadas, o computador escolhe um movimento (pedra, papel ou tesoura) aleatoriamente. Depois disso, assume que há dados suficientes sobre o player para prever seu padrão. O conjunto de dados consiste nos dois últimos movimentos do jogador, sendo o último, o que eles farão após o primeiro. Meio confuso, certo ?! Simplificando, o computador armazena o primeiro movimento como uma entrada x e o movimento depois como um rótulo ou destino y, o que significa que, após o jogador escolher o rock, por exemplo, existe a possibilidade de escolher o papel como o próximo movimento. Se o computador predizer que o jogador tocará rock, ele tocará papel e assim por diante. Toda vez que o computador perde, ele treina a rede neural novamente.

Conheça os problemas
Este é apenas um experimento, não fique chateado se o computador (minha rede neural) não fizer um bom trabalho jogando contra você. Além disso, nunca excluo o conjunto de dados, o que significa que, eventualmente, o tempo para treinar a rede neural será cada vez maior.

# backend 

O backend foi implementado em javascript com o ambiente de execução em NodeJS com a arquitetura em microserviços e o banco de dados escolhido foi o MongoDB devido a sua fácil utilização o mesmo se encontra conectado remotamente não necessitando assim de nenhuma configuração e instalação em máquina local.

## Dependências

Os requisitos para a exeução do servidor incluem a instalação do node e do comando npm globalmente no computador o node é um software que permite a execução do javascript no lado do servidor através deste link pode ser baixado: https://nodejs.org/en/. Já o npm é instalado juntamente com node, o npm nada mais é um gerenciador de pacotes na qual permite a instalação de diversas outras ferramentas.
Após o download verificar se os mesmos foram corretamente instalados:

### comando.
node -v 

npm -v


