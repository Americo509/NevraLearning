import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styles: [
  ]
})
export class DetailComponent {
  @Input() mensagem: string=''

  @Output() botaoClick: EventEmitter<void> = new EventEmitter<void>

  clickButton(){
    this.botaoClick.emit()
  }
}
