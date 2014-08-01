//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780","name":"张柯33"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
       //native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
         // console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },
    process_received_message: function (json_message) {
        var Status=localStorage.getItem("status");
        if(Status=='true'){
           // native_accessor.send_sms(json_message.messages[0].phone,'对不起，活动报名已结束');
                console.log("对不起，活动报名已结束");
        }
        if(Status=='undefined'){
            //native_accessor.send_sms(json_message.messages[0].phone,'对不起，活动报名尚未开始');
                console.log("对不起，活动报名尚未开始");
        }
        if(Status=='false'){
            Sign_up.get_activity_information();
            var message=json_message.messages[0];
            var Message=Sign_up.Conversion_registration_information();
            var Update_message=message.message.replace(/\s/g, "");
            message.message=Update_message.substr(2,6);
            Message.unshift(message);
            function BM_judgment(){
                return (Update_message.search(/bm/i) == 0);
            }
            for(var i=1;i<Message.length;i++){
                var s=Message[i].phone;
                function Phone_judgment(){
                    return  (message.phone==s);
                }
            }
            if(Phone_judgment()){
                //native_accessor.send_sms(json_message.messages[0].phone,'号码重复，请重新确认');
                console.log("号码重复，请重新确认");
            }
            else{
                if(!BM_judgment()){
                   // native_accessor.send_sms(json_message.messages[0].phone,'请输入正确的报名信息');
                  console.log("请输入正确的报名信息");
                }else {
                    //native_accessor.send_sms(json_message.messages[0].phone,'恭喜你，报名成功');
                    console.log("恭喜你，报名成功");
                    localStorage[Sign_up.get_activity_information()] = JSON.stringify(Message);
                }
            }
            var RegistrationScope = angular.element("#Registration").scope();
            RegistrationScope.$apply(function () {
            RegistrationScope.refresh();
            })
        }
    }
};
    function notify_message_received(json_message) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(json_message);
    //phone_number=message_json.messages[0].phone;
    }

