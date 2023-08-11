import { Component } from '@angular/core';

@Component({
  selector: 'app-mestre',
  templateUrl: 'mestre.component.html',
  styleUrls: ['mestre.component.css']
})
export class MestreComponent {
  count : number = 0;


  increment(){
    this.count++
  }

  mensagemMestre:string='Ola, eu sou a mensagem'

  onButtonCLick(){
    console.log('Botao foi clicado')
  }

  userSigned:boolean = true

  pessoas : string[] = ['Gustavo', 'Erika', 'Leo', 'Luiz', 'Fabio', 'Giovana']

}
