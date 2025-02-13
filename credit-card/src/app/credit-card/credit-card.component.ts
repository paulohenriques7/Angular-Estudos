import { Component, Input, OnInit } from '@angular/core';
import { CartaoDeCredito } from '../interfaces/CartaoDeCredito';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  /*
    O angular vai entender que a propriedade dadosCartao podera receber valores externos ao componente,
    Ou seja pode mudar o valor da propriedade dadosCartao em outros componentes
  */

  @Input()
  dadosCartao: CartaoDeCredito = {
    ano: '40',
    mes: '06',
    cvc: '678',
    nome: 'Cleber',
    numero: '2345 6789 1234 1423',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
