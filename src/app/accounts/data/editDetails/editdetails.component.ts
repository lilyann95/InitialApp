import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Account } from "../../models/account.interface";
import { AccountService } from "../../services/account.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: 'app-edit-details',
    templateUrl: 'editdetails.component.html',
})
export class EditDetailsComponent implements OnInit {
    @Input() id!: string;
    account!: Account;
   
    constructor( 
        private accountService: AccountService,
        private activeModal: NgbActiveModal,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        // if(this.id) {
        //     this.accountService.getDataById(this.id)?.subscribe((res) => {
        //         this.account = res;
        //         console.log(res);
        //     });
        // }
    }

    onUpdate() {
        this.accountService.updateRecord(this.account).then(() => {
            this.activeModal.close();
            this.snackBar.open(
                'Data updated successfully',
                'Dismiss',
                {
                    horizontalPosition: 'right',
                    verticalPosition: 'top',
                    duration: 2500
                }
            )
        })
    }
}