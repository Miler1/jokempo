Uma Rede Neural pode prever seu próximo passo em um jogo de pedra, papel e tesoura?

Sobre
Um experimento envolvendo um jogo de pedra, papel e tesoura, também conhecido como JoKenPo. Durante as três primeiras rodadas, o computador escolhe um movimento (pedra, papel ou tesoura) aleatoriamente. Depois disso, assume que há dados suficientes sobre o player para prever seu padrão. O conjunto de dados consiste nos dois últimos movimentos do jogador, sendo o último, o que eles farão após o primeiro. Meio confuso, certo ?! Simplificando, o computador armazena o primeiro movimento como uma entrada x e o movimento depois como um rótulo ou destino y, o que significa que, após o jogador escolher o rock, por exemplo, existe a possibilidade de escolher o papel como o próximo movimento. Se o computador predizer que o jogador tocará rock, ele tocará papel e assim por diante. Toda vez que o computador perde, ele treina a rede neural novamente.

Conheça os problemas
Este é apenas um experimento, não fique chateado se o computador (minha rede neural) não fizer um bom trabalho jogando contra você. Além disso, nunca excluo o conjunto de dados, o que significa que, eventualmente, o tempo para treinar a rede neural será cada vez maior.
