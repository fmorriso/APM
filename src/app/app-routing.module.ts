import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, ExtraOptions, RouterModule } from '@angular/router';
//
import { WelcomeComponent } from './home/welcome.component';

// Warning: additional routes are defined within ProductModule
const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

const routeOptions: ExtraOptions = {
  enableTracing: true,
};
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
