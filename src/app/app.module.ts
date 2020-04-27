import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
//
import { AppComponent } from './app.component';
//
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

const routeOptions: ExtraOptions = {
  enableTracing: true
};

@NgModule({
  declarations: [AppComponent, WelcomeComponent, ProductListComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, routeOptions)
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
