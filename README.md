Can a Neural Network predict your next step in a game of rock, paper, and scissors?

About
An experiment involving a rock, paper and scissors game, also known as JoKenPo. During the first three rounds, the computer chooses a move (rock, paper, or scissors) at random. After that, it assumes there is enough data about the player to predict its pattern. The dice set consists of the player's last two moves, the last being what they will do after the first. Kind of confused, right?! Simply put, the computer stores the first move as an x ​​input and the move afterwards as a y label or destination, which means that after the player chooses the rock, for example, there is a possibility to choose the role as the next move. If the computer predicts that the player will play rock, he will play paper and so on. Every time the computer loses, it trains the neural network again.

Know the problems
This is just an experiment, don't be upset if the computer (my neural network) doesn't do a good job playing against you. Also, I never delete the dataset, which means that eventually the time to train the neural network will be longer and longer.

# backend

The backend was implemented in javascript with the execution environment in NodeJS with the microservices architecture and the chosen database was MongoDB due to its easy use and integration, it is remotely connected, thus not requiring any configuration and installation on a machine local. For game logic a neural network that runs in real time and returns the answer depending on the player's actions was implemented.

## Dependencies

The requirements for running the server include installing node on the computer node is a software that allows the execution of javascript on the server side and through this link it can be downloaded: https://nodejs.org/en/. Since npm is installed together with node, npm is nothing more than a package manager which allows the installation of several other tools to aid in development.
After downloading, check if the programs were installed correctly:


In the terminal just type the command:

#### node -v

#### npm -v

If the version number appears, it means that node was installed correctly. In this case, the version that was used were:

#### node >> 12.14.0
#### npm >> 6.13.4

The next step is the execution of the backend, to do this just clone the repository and in the folder with the same name execute the command:

### npm install

The above command will install all the necessary dependencies and to run the server just type the command:

### npm start

The server will listen with the link: http://localhost:8080
And if everything goes well, when copying and pasting the link in the browser, a page will appear with the following message:
#### {"message":"Welcome to ... Example Micro Service"}

# frontend

The frontend chosen was Angular in version 8 and for the design of the page, Material Design for Angular was used, which has good documentation and is easy to install and develop. It can be accessed at this link: https://material.angular.io/.
In another terminal just access the folder with and then inside it just access the commands below to install and run the server respectively:

### npm install
### npm start

With this the application can be accessed through this link: http://localhost:4200
