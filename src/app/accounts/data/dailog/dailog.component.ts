import { Component, Input } from "@angular/core";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountService } from '../../services/account.service';
import { Account } from "../../models/account.interface";

@Component({
    selector: 'app-dailog',
    templateUrl: 'dailog.component.html',
})

export class DailogComponent {

    @Input() title!: string;
    @Input() message!: string;
    @Input() btnOkText!: string;
    @Input() btnCancelText!: string;
    account!: Account;

    constructor(
        private activeModal: NgbActiveModal, 
        private snackBar: MatSnackBar,
        private accountService: AccountService,
    ) {}

    dismiss(){
        this.activeModal.dismiss();
    }

    accept() {
        this.accountService.delete(this.account).then(() => {
            this.activeModal.close(true);
            this.snackBar.open(
                'User deleted successfully', 
                'Dismiss',
                {
                horizontalPosition: 'right',
                verticalPosition: 'top',
                duration: 2500
                }
            )
        });
    }

    decline() {
        this.activeModal.close(false);  
    }
}