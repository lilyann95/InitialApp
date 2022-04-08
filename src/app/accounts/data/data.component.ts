import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../models/account.interface';
import { AccountService } from '../services/account.service';
import { ConfirmationDialogService } from '../services/confirm-dialog/confirm-dialog.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditDetailsComponent } from './editDetails/editdetails.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  providers: [AccountService]
})

export class DataComponent implements OnInit {
  @Input() id = '';
  userdetails: Account[] = [];
  user!: Account;
  userMsg: any;
  accountId: string | null = null;
  account!: Account ;

  constructor(
    private accountService: AccountService, 
    private authService: AuthService,
    private modal: NgbModal,
    private  confirmationdialogService: ConfirmationDialogService,
  ) { }

  ngOnInit() {
    // const userId = getAuth().currentUser?.uid;
    // console.log(userId);
    // if(userId){
    //   this.authService.getDataById(userId)?.subscribe({
    //     next: (response) => {
    //       console.log(response);
    //       this.user = response;
    //     },
    //     error: (error) => {
    //       console.log(error);
    //     }
    //   });
    // } 
    
    this.accountService.getData()?.subscribe((res) => {
      this.userdetails = res;
    });
  }

  editModal(account: Account){
    const modalRef = this.modal.open(EditDetailsComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = account.id;
  }
  
  confirm() {
    this.confirmationdialogService.confirm(
      'Do you really want to delete user?',
    )
  };
}
