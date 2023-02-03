import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'SpaceTourism';
  currentRoute = 'home';
  navIsOpen = false;
  navIcon = '../assets/shared/icon-hamburger.svg';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.onRouteChange();
  }

  private onRouteChange() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        this.navIsOpen = false;
        this.navIcon = this.navIsOpen
          ? '../assets/shared/icon-close.svg'
          : '../assets/shared/icon-hamburger.svg';
      }
    });
  }

  getBackground(): string {
    switch (this.currentRoute) {
      case '/home':
        return 'home';
      case '/destination':
        return 'destination';
      case '/crew':
        return 'crew';
      case '/tech':
        return 'tech';
      default:
        return 'home';
    }
  }

  openCloseNav() {
    this.navIsOpen = !this.navIsOpen;
    this.navIcon = this.navIsOpen
      ? '../assets/shared/icon-close.svg'
      : '../assets/shared/icon-hamburger.svg';
  }
}
