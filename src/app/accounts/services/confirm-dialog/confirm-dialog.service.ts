import { Injectable } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DailogComponent } from '../../data/dailog/dailog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private modalService: NgbModal) { }

  confirm (
      message: string,
      btnOkText: string = 'OK',
      btnCancelText: string = 'Cancel',
      dialogSize: 'sm'|'lg' = 'sm'
    ): Promise<boolean> {
    const modalRef = this.modalService.open(
      DailogComponent, 
      { size: dialogSize }
    );
    
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  }

}