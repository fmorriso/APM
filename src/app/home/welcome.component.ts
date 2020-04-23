import { Component, VERSION } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
  angularVersion = VERSION.full;
}
