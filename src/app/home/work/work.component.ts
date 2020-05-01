import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import "../../../assets/js/stringeeSoftPhone.js";
// import "../../../assets/js/webPhoneAllJs.min.js";

declare var stringee: any;
declare var StringeeSoftPhone: any;

declare var callCenter: any;

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  fromPhoneNumber: any;
  fromNumbers=  [{alias: 'Number-1', number: '+842873030087'}];
  access_token: string;

  ngOnInit(): void {
    // this.callConfig();
  }

  callConnect(){
    this.fromNumbers=  [{alias: 'Number-1', number: `${this.fromPhoneNumber}`}];
    setTimeout(() => {
      StringeeSoftPhone.config({fromNumbers: this.fromNumbers});
      StringeeSoftPhone.connect(this.access_token)
    }, 500);
  }

  hiddenPhone(){
    var config = {
      showMode: 'none', //full | min | none
    };
    StringeeSoftPhone.init(config);
  }

  startCall(){
    new callCenter();
  }

  callConfig(){
    new stringee();
    var access_token = 'YOUR_ACCESS_TOKEN';
​
    var config = {
      showMode: 'full', //full | min | none
      top: 45,
      left: 50,
      //right: undefined,
      //bottom: undefined,
      arrowLeft: 155,
      arrowDisplay: 'top', //top | bottom | none
      //list your Stringee Number
      fromNumbers: [{alias: 'Number-1', number: `+842873030087`}, {alias: 'Number-2', number: '+2222'}],
      askCallTypeWhenMakeCall: false,
      appendToElement: null,
      makeAndReceiveCallInNewPopupWindow: false
    };
    StringeeSoftPhone.init(config);
    
    StringeeSoftPhone.on('displayModeChange', function (event) {
      console.log('displayModeChange', event);
      if (event === 'min') {
        StringeeSoftPhone.config({arrowLeft: 75});
      } else if (event === 'full') {
        StringeeSoftPhone.config({arrowLeft: 155});
      }
    });
    
    StringeeSoftPhone.on('requestNewToken', function () {
      console.log('requestNewToken+++++++');
      StringeeSoftPhone.connect(access_token);
    });
    
    StringeeSoftPhone.on('authen', function (res) {
      console.log('authen: ', res);
    });
    
    StringeeSoftPhone.on('disconnect', function () {
      console.log('disconnected');
    });
    
    StringeeSoftPhone.on('signalingstate', function (state) {
      console.log('signalingstate', state);
    });
    
    StringeeSoftPhone.on('beforeMakeCall', function (call, callType) {
      console.log('beforeMakeCall: ' + callType);
      return true;
    });
    
    StringeeSoftPhone.on('answerIncomingCallBtnClick', function () {
      console.log('answerIncomingCallBtnClick');
    });
    
    StringeeSoftPhone.on('makeOutgoingCallBtnClick', function (fromNumber, toNumber, callType) {
      console.log('makeOutgoingCallBtnClick: fromNumber=' + fromNumber + ', toNumber=' + toNumber + ',callType=' + callType);
    });
    
    StringeeSoftPhone.on('incomingCall', function (incomingcall) {
      console.log('incomingCall: ', incomingcall);
    });
    
    StringeeSoftPhone.on('endCallBtnClick', function () {
      console.log('endCallBtnClick');
    });
    
    StringeeSoftPhone.on('callingScreenHide', function () {
      console.log('callingScreenHide');
    });
    
    StringeeSoftPhone.on('declineIncomingCallBtnClick', function () {
      console.log('declineIncomingCallBtnClick');
    });
    
    StringeeSoftPhone.on('incomingScreenHide', function () {
      console.log('incomingScreenHide');
    });
    
    StringeeSoftPhone.on('customMessage', function (data) {
      console.log('customMessage', data);
    });
  }

}
