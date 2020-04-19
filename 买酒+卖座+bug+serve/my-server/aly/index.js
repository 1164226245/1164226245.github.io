const Core = require('@alicloud/pop-core');

var client = new Core({
  accessKeyId: 'LTAI4Fr1du3dJjSYb5k731VA',   //LTAI4Fr1du3dJjSYb5k731VA
  accessKeySecret: 'ORwIcWkasZ4odXWCj3sKrvCbfueebt', //ORwIcWkasZ4odXWCj3sKrvCbfueebt
  endpoint: 'https://dysmsapi.aliyuncs.com',
  apiVersion: '2017-05-25'
});



exports.sendCode=function(mobile,code){
    var params = {
        "RegionId": "cn-hangzhou",
        "PhoneNumbers":mobile,
        "SignName":"小九之家",  //小九之家
        //SMS_181551033
        "TemplateCode":'SMS_181551033',
        "TemplateParam":'{code:'+code+'}'   // 最大bug
      }
      
      var requestOption = {
        method: 'POST'
      };

      return client.request('SendSms', params, requestOption);
}