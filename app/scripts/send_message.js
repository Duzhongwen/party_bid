/**
 * Created by duzhongwen on 14-8-4.
 */
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
        Bidding.get_click_bidding();
        var message=json_message.messages[0];
        var Message=Bidding.Conversion_bidding_information();
        Message.unshift(message);
        for(var i=1;i<Message.length;i++){
            var s=Message[i].phone;
            function Phone_judgment(){
                return  (message.phone==s);
            }
        }
        if(Phone_judgment()){
            //native_accessor.send_sms(json_message.messages[0].phone,'号码重复，请重新确认');
            console.log("竞价号码重复，请重新确认");
        }else{
            // native_accessor.send_sms(json_message.messages[0].phone,'请输入正确的报名信息');
            console.log("恭喜你，竞价成功");
            localStorage[Bidding.get_click_bidding()] = JSON.stringify(Message);
        }
        var BiddingScope = angular.element("#Bidding").scope();
        BiddingScope.$apply(function () {
        BiddingScope.refresh();
        })
    }
}
function message_received(json_message) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(json_message);
    //phone_number=message_json.messages[0].phone;
}

