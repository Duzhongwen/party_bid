//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780","name":"张柯33"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
       //native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
         console.log(phone, message);
    },
    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
           this.process_received_message(json_message);
        }
    },
    process_received_message: function (json_message) {
        var messages=json_message.messages[0].message.replace(/\s/g,"");
        if (messages.search(/bm/i)==0) {
             var Status=Judge_Ongoing_action();
//            if (Status == true) {
//                 native_accessor.send_sms(json_message.messages[0].phone,'对不起，活动报名已结束');
//            }
            if (Status == null) {
                native_accessor.send_sms(json_message.messages[0].phone,'对不起，活动报名尚未开始');
            }
            if (Status== false) {
                var sms_Array=SMS.get_sms_information();
                var message = json_message.messages[0];
                var Update_message = message.message.replace(/\s/g, "");
                message.message = Update_message.substr(2, 6);
                var Message = new Sign_up(Sign_up.Judge_Ongoing_action1(),message);
                function BM_judgment() {
                    return (Update_message.search(/bm/i) == 0);
                }
                function Phone_judgment(){
                    var list = _.findWhere(sms_Array,{'activity':Sign_up.Judge_Ongoing_action1()});
                    try{
                        return(_.findWhere(list.information,{'phone':json_message.messages[0].phone}));
                    }catch(err){
                        return false;
                    }
                }
                if (Phone_judgment()) {
                    native_accessor.send_sms(json_message.messages[0].phone,'号码重复，请重新确认');
                }
                else {
                    if (!BM_judgment()) {
                        native_accessor.send_sms(json_message.messages[0].phone,'请输入正确的报名信息');
                    } else {
                        native_accessor.send_sms(json_message.messages[0].phone,'恭喜你，报名成功');
                        Message.storage_sms();
                    }
                }
                var RegistrationScope = angular.element("#Registration").scope();
                RegistrationScope.$apply(function () {
                    RegistrationScope.refresh();
                })
            }
        }
        else{
            var message=Send_bidding.send_message(json_message);
            native_accessor.send_sms(json_message.messages[0].phone,message);
        }
    }
};
    function notify_message_received(json_message) {
    native_accessor.receive_message(json_message);
    }

Judge_Ongoing_action=function(){   //判断有没有进行的活动并返回活动状态                 （6）
    var action_information =Create.get_Action_information();
    var state= _.find(action_information,function(list){
        return list.states==false;
    });
    try {
        return state.states;
    }catch(err){
        return null;
    }
}
