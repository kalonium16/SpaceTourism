import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './crew/crew.component';
import { DestinationComponent } from './destination/destination.component';
import { HomeComponent } from './home/home.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'destination', component: DestinationComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'tech', component: TechnologyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
