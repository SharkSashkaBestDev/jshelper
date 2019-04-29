import { Component, OnInit } from '@angular/core';
import {Card} from '../model/card.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [
    './main.component.scss'
  ]
})
export class MainComponent implements OnInit {

  cards = [
    new Card('card1', 'description for card1', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'Photo of a Shiba Inu'),
    new Card('card2', 'description for card2', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'Photo of a Shiba Inu'),
    new Card('card3', 'description for card3', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'Photo of a Shiba Inu'),
    new Card('card4', 'description for card4', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'Photo of a Shiba Inu'),
    new Card('card5', 'description for card5', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'Photo of a Shiba Inu')
  ];

  constructor() { }

  ngOnInit() {
  }

}
