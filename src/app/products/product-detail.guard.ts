import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // look for an id as part of the url path
    const id = +next.url[1].path;
    // if the id isn't a number or is an out of bounds number, display the full list of products
    if (isNaN(id) || id < 1) {
      alert('invalid product id');
      // display the full list of products ['/products'])
      this.router.navigate([next.url[0].path]);
      return false;
    }
    return true;
  }
}
