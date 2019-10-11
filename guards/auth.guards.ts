import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
//import { JwtHelperService } from '@auth0/angular-jwt';

//const helper = new JwtHelperService();

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        /*
        let hasTokenExpired = helper.isTokenExpired(localStorage.getItem('auth_token'))
        console.log(hasTokenExpired);
        if(localStorage.getItem('currentUser') && !hasTokenExpired){
            return true;
        }else{
            this.router.navigate(['/login'],{queryParams:{ }})
            return false;
        }
        */
       this.router.navigate(['/InstallingStuffComponent'],{queryParams:{ }})
       return false;
    }

}