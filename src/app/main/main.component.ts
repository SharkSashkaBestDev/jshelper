import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Card} from '../model/card.model';
import {MatSnackBar} from '@angular/material';
import {RecognitionStatusComponent} from '../recognition-status/recognition-status.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [
    './main.component.scss'
  ]
})
export class MainComponent implements OnInit {

  durationInSeconds = 5;

  cards = [
    new Card('card1', 'description for card1', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'Photo of a Shiba Inu'),
    new Card('card2', 'description for card2', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'Photo of a Shiba Inu'),
    new Card('card3', 'description for card3', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'Photo of a Shiba Inu'),
    new Card('card4', 'description for card4', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'Photo of a Shiba Inu'),
    new Card('card5', 'description for card5', 'https://material.angular.io/assets/img/examples/shiba2.jpg', 'Photo of a Shiba Inu')
  ];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(words: HTMLDivElement) {
    this.snackBar.open(words.textContent, '', {duration: 1000 * this.durationInSeconds});
  }
}
