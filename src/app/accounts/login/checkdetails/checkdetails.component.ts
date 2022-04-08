import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-checkdetails',
    templateUrl: 'checkdetails.component.html',
})
export class CheckDetailsComponent {
    
    constructor(private authService: AuthService, private router: Router) {}
    logout() {
        this.authService.logout().subscribe({
            next: () => {
                this.router.navigate(['/']);
            },
            error: (err) => {
                console.log("error occurred", err);
            }
        })
    }
}