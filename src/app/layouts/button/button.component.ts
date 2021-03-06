import { Component, EventEmitter, Input, OnInit, Output, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() buttonType?: string

  @Output() emitirDados = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // alert("Componente botão destruído")
  }

  ngAfterViewInit(): void {
    // alert("Componente botão construído")
  }

  click() {
    this.emitirDados.emit("valor emitido")
  }

  obterClasseBotao(): string {
    switch(this.buttonType) {
      case 'primary':
        return 'btn btn-primary'

      case 'secondary':
        return 'btn btn-secondary'

      default:
        return 'btn btb-primary'
    }
  }

  obterIconeBotao(): string {
    switch(this.buttonType) {
      case 'primary':
        return 'fa fa-check'

      case 'secondary':
        return 'fa fa-angle-left'

      default:
        return 'fa fa-check'
    }
  }

}
