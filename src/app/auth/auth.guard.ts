// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';

// import { AuthService } from './auth.service';
// import { take, tap, map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(
//     private _auth: AuthService,
//     private _router: Router
//   ) { }

  // Observa um dado do tipo boolean, pega user dentro do auth.service.
  // canActivate(next: any, state: any): Observable<boolean> {
  //   return this._auth.user$.pipe(
  //     take(1),
  //     map(user => !!user),
  //     tap(Loggedin => {
  //       if (!Loggedin) {
  //         this._router.navigate(['login'])
  //       }
  //     })
  //   )
  // }
