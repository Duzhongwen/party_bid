//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {

        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        //console.log(phone, message);
        //console.log('flag');
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },

    process_received_message: function (json_message) {

        var process_message= {
            apply_message: function () {
                if (!Message.check_apply_status() && Message.check_apply_detail_status()) {
                    native_accessor.send_sms(Message.get_phone(json_message),'活动尚未开始，请稍候。');
                    //console.log('活动尚未开始，请稍候。');
                    return;
                }
                if (!Message.check_apply_status() && !Message.check_apply_detail_status()) {
                    native_accessor.send_sms(Message.get_phone(json_message),'对不起，报名已经结束。');
                    //console.log('对不起，报名已经结束。');
                    return;
                }
                if ( Message.check_apply_repeat(json_message)) {
                    native_accessor.send_sms(Message.get_phone(json_message),'不能重复报名。');
                    //console.log('不能重复报名。');
                    return;
                }
                    Message.add_apply_message(json_message);
                    native_accessor.send_sms(Message.get_phone(json_message),'报名成功！');
                    //console.log('报名成功！');
            },
            bid_message: function () {
                if(!Message.check_bid_status()&&Message.check_bid_detail_status()){
                    native_accessor.send_sms(Message.get_phone(json_message),'竞价尚未开始，请稍候。');
                    //console.log('竞价尚未开始，请稍候。');
                    return;
            }
                if(!Message.check_bid_status()&&!Message.check_bid_detail_status()){
                    native_accessor.send_sms(Message.get_phone(json_message),'对不起，竞价已经结束。');
                    //console.log('对不起，竞价已经结束。');
                    return;
                }
                if(!Message.check_bid_is_in_apply(json_message)){
                    native_accessor.send_sms(Message.get_phone(json_message),'对不起，您没有报名此活动。');
                    //console.log('对不起，您没有报名此活动。');
                    return;
                }
                if(Message.is_repeat_bid(json_message)){
                    native_accessor.send_sms(Message.get_phone(json_message),'您已成功出价，请勿重复出价。');
                    //console.log('您已成功出价，请勿重复出价。');
                    return;
                }
                  Message.add_bid_message(json_message);
                native_accessor.send_sms(Message.get_phone(json_message),'恭喜！您已成功出价。');
                  //console.log('恭喜！您已成功出价。');
            },
            wrong_message: function () {
                native_accessor.send_sms(Message.get_phone(json_message),'短信格式不对。');
                //console.log('短信格式不对。');
            }
        }
        process_message[Message.is_bid_or_apply(json_message)]();

        //console.log('aaaaaaaaaaaaaaa');
    }
};


function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //console.log(message_json.messages[0].message);

    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}