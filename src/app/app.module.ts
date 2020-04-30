import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
//
import { AppComponent } from './app.component';
//
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

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
  declarations: [AppComponent, WelcomeComponent, ProductListComponent, ConvertToSpacesPipe],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, routeOptions)
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
