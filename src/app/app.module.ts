import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule, // includes child routes
    AppRoutingModule, // includes top-level routes, including wildcard route
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
