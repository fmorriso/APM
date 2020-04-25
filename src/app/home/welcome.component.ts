import { Component, VERSION } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
  get angularVersion() {
    return VERSION.full;
  }
}
