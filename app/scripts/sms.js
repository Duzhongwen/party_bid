//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780","name":"张柯33"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
//        console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },
    process_received_message: function (json_message) {

        //var message_json=JSON.stringify(json_message);//将json_message转化为字符串
        var phone_number=json_message.messages[0].phone;
        var name=json_message.messages[0].message;
        var Message=JSON.parse(localStorage['messages'] || '[]');
        Message.unshift(name,phone_number);
        localStorage['messages'] = JSON.stringify(Message);
        //localStorage.setItem("number",phone_number);
        //localStorage.setItem("name",name);

        var RegistrationScope = angular.element("#Registration").scope();
        RegistrationScope.$apply(function () {
            RegistrationScope.refresh();
        })
    }
};
function notify_message_received(json_message) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(json_message);
    //phone_number=message_json.messages[0].phone;
}
