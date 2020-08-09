import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'om', component: AboutComponent },
  {path: '', component: AboutComponent, pathMatch: 'full' },
  {path: ':typ', component: DestinationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
