import { Component, OnInit,Inject, ElementRef, AfterContentInit } from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CallCenterComponent } from "./dialog/call-center/call-center.component";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
declare var stringee: any;
declare var StringeeSoftPhone: any;

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit{

    constructor(
        private matDialog: MatDialog,
        private modalService: NgbModal
        ){}

    // isShow: boolean = false;

    ngOnInit(){
    }


    openCallCenterForm(){
        this.matDialog.open(CallCenterComponent).afterClosed().subscribe(() => {
            this.hiddenPhoneKeyboard();
            console.log('closed');
        });
    }

    hiddenPhoneKeyboard(){
        var config = {
            showMode: 'none', //full | min | none
          };
          StringeeSoftPhone.init(config);
    }

    // open(content) {
    //     this.modalService.open(content);
    //   }

      

}