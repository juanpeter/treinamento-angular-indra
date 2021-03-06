import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() titulo?: string;

  @Input() showFooter?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
