import { Component, HostListener, OnInit } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  technologys = data.technology;
  currentTechnology = 0;
  technologyImage = this.technologys[0].images.portrait;
  public innerWidth: number = 0;
  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window.innerWidth;
    this.setImage(this.innerWidth);
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.setImage(this.innerWidth);
  }
  changeDestination(index: number) {
    this.currentTechnology = index;
    this.setImage(this.innerWidth);
    console.log(this.currentTechnology);
  }

  setImage(width: number) {
    if (width < 1024) {
      this.technologyImage =
        this.technologys[this.currentTechnology].images.landscape;
    } else {
      this.technologyImage =
        this.technologys[this.currentTechnology].images.portrait;
    }
  }
}
