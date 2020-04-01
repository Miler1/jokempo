import { Component, OnInit } from '@angular/core';
import { MlpService } from '../services/mlp.service';
import { faHandRock, faHandScissors, faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { EventEmitterService } from '../services/event-emitter.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  faHandRock = faHandRock;
  faHandScissors = faHandScissors;
  faHandPaper = faHandPaper;

  names: string[] = [ "Rock", "Paper", "Scissors" ];
  name: string;
  plays = { 1: 1, 2: 0, 3: 2 };
  results: any;
  current: string;
  last: string;

  score = { 'jogador': 0, 'computador': 0, 'empate': 0 };

  x: number[] = [];
  y: number[] = [];
  cont: number = 0;

  i = 0;
  tmpMove = [];
  middle: any;
  lastWinner: any;
  lastMove = [];
  scoreResults: any;
  data: any;
  continue: boolean = true;
  
  constructor(private mlpService: MlpService,
              private _router: Router) { 
    this.mlpService.loadMLP();
    EventEmitterService.get('reloadData').subscribe(data => this.data = data);
  }

  ngOnInit(){
    this.scoreResults = {};
    for(let k of Object.keys( this.score )){
      let d = document.createElement('div');      
      d.innerHTML = "<br>"+k;
      this.scoreResults[k] = d;
      console.log(this.scoreResults[k]);
    }
  }

  updateScore(p, c, w) {
    let mensagem = "";
    let placar = 0;
    let winner = "";
    let hasEmpate = false;
    document.querySelectorAll(".row")[0].innerHTML = "";
    for(let player of Object.keys(this.score) ){
      this.scoreResults[player].innerHTML = player+" "+this.score[player]+" ";
      document.querySelectorAll(".row")[0].append(player+" "+this.score[player]+" ");
      this.current = this.names[p]+" x "+this.names[c];
      let compare = "Rock x Rock";

      if (this.lastWinner == 'empate') {
        hasEmpate = true;
        // mensagem = "empatou!";
        // regra das duas pedras seguidas
        console.log(this.names[p]+ " x "+this.names[c]+w);
        if (compare == this.current && compare == this.last) {
          Swal.fire({
            title: 'Empatou!',
            text: 'Não é permitido mostrar pedra duas vezes seguidas.',
            icon: 'warning',
            allowOutsideClick: false});
          //setInterval(function(){ location.reload(); }, 3000);
          this.clearContador();
        }
      } else {
        hasEmpate = false;
      }
    }

    if (this.names[c] == "Rock") {
      document.getElementById("rock").focus();
    } else if (this.names[c] == "Paper") {
      document.getElementById("paper").focus();
    } else if (this.names[c] == "Scissors") {
      document.getElementById("scissors").focus();
    }

    this.cont++;
    // se houve empate então continua
    if (hasEmpate) {
      this.cont--;
    } else if (this.score['computador'] > this.score['jogador']) {
      mensagem = "Você Perdeu!";
      winner = "computador";
      placar = this.score['computador'];
    } else if (this.score['jogador'] > this.score['computador']) {
      mensagem = "Você Ganhou!";
      winner = this.data.name;
      placar = this.score['jogador'];
    } 
    // melhor de 3, 5 e 7
    if (this.cont == this.data.option) {
      Swal.fire({
        title: mensagem,
        text: 'Deseja continuar a jogar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
        allowOutsideClick: false
      }).then((result) => {
        if (result.value) {
          this.clearContador();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          this.continue = false;
        }
      })
      // aqui envia o resultado para o backend independente da resposta!
      // a cada vez que termina o jogo então é salvo na tabela
      this.saveResults(winner, placar, new Date, this.data.option);
    }
  }

  clearContador() {
    this.score = { 'jogador': 0, 'computador': 0, 'empate': 0 };
    this.cont = 0;
  }

  saveResults(nome, placar, date, partida) {
    this.results = { nome: nome, placar: placar, data: date, partida: partida };
  }

  async play(player) {
    let mlp = await this.mlpService.loadMLP();
    const move = Array(3).fill(0);
    move[player] = 1;
    this.tmpMove.push(move);
    if( this.tmpMove.length == 2 ){
      this.x.push(this.tmpMove.shift());
      this.y.push(this.tmpMove[0]);
    }
    let computer;
    if(this.y.length < 3){
      computer = Math.floor(Math.random() * 3);
    }else{
      let prediction = await this.mlpService.predictMLP(this.lastMove);
      computer = (prediction.data.indexOf(Math.max(...prediction.data)) + 1) % 3;
      if(this.lastWinner !== 'computador'){ 
        let r = await this.mlpService.shuffleMLP(this.x, this.y);
        let f = await this.mlpService.fitMLP(this.x, this.y);
      }
    }
    const win = this.plays[player+computer];
    this.lastWinner = player === computer || win === undefined ? 'empate' : win === player ? 'jogador' : 'computador';
    this.score[this.lastWinner]++;
    this.updateScore(player, computer, this.lastWinner);
    this.last = this.names[player]+" x "+this.names[computer];
    this.lastMove = move;
  }

}
  




