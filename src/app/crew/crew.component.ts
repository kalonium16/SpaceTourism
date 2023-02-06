import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
})
export class CrewComponent implements OnInit {
  destinations = data.crew;
  currentCrewMember = 0;

  constructor() {}

  ngOnInit(): void {}

  changeCrewMemver(index: number) {
    this.currentCrewMember = index;
  }
}
