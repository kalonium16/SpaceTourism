import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent implements OnInit {
  destinations = data.destinations;
  currentDestiantion = 0;
  constructor() {}

  ngOnInit(): void {}

  changeDestination(index: number) {
    this.currentDestiantion = index;
  }
}
