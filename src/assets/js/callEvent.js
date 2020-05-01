$(document).ready(function () {
  $('#connect-btn').on('click', function () {
    if ($('#numbers').val().length == 0) {
      alert('Please enter your Numbers!');
      return;
    }

    var fromNumbers = [];

    var numbers = $('#numbers').val().split(",");
    for (var i = 0; i < numbers.length; i++) {
      var nn = {alias: numbers[i], number: numbers[i]};
      fromNumbers.push(nn);
    }

    StringeeSoftPhone.config({fromNumbers: fromNumbers});

    var access_token = $('#access_token').val();
    console.log('access_token: ' + access_token);
    StringeeSoftPhone.connect(access_token);
  });

  $('#make-call-btn').on('click', function () {
    if (!StringeeSoftPhone.connected) {
      alert('Not connected!');
      return;
    }

    StringeeSoftPhone.makeCall('1111', '2222', function (res) {
      console.log('res: ', res);
    });
  });

  $('#disconnect-btn').on('click', function () {
    StringeeSoftPhone.disconnect();
  });

  $('#hangup-call-btn').on('click', function () {
    StringeeSoftPhone.hangupCall();
  });

  $('#answer-incoming-call-btn').on('click', function () {
    var ok = StringeeSoftPhone.answerCall();
    console.log('answer call: ' + ok);
  });

});

var access_token = 'YOUR_ACCESS_TOKEN';

var config = {
  showMode: 'full', //full | min | none
  top: 45,
  left: 50,
  //right: undefined,
  //bottom: undefined,
  arrowLeft: 155,
  arrowDisplay: 'top', //top | bottom | none
  //list your Stringee Number
  fromNumbers: [{alias: 'Number-1', number: '+84899199586'}, {alias: 'Number-2', number: '+2222'}],
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