/**
 * Created by duzhongwen on 14-8-4.
 */
function Send_bidding(){

}

Send_bidding.send_message=function(json_message){
    if(Bidding_list.get_bidding_information()=='null'){//bidding_name为null
        if(List.Ongoing_activities_read()=='null') {
            return "对不起，竞价已经结束";
        }else{
            return "对不起，竞价尚未开始";
        }
    }else {
        Bidding.get_click_bidding();
        var message = json_message.messages[0];
        var Message = Bidding.Conversion_bidding_information();
        var Update_message = message.message.replace(/\s/g, "");
        message.message = Update_message.substr(2, 6);
        Message.unshift(message);
        function JJ_judgment() {
            return (Update_message.search(/JJ/i) == 0);
        }
        for (var i = 1; i < Message.length; i++) {
            var s = Message[i].phone;
            function Phone_judgment() {
                return  (message.phone == s);
            }
        }
        if (Phone_judgment()) {
            //native_accessor.send_sms(json_message.messages[0].phone,'号码重复，请重新确认');
            return "竞价号码重复，请勿重复出价";
        } else {
            if (!JJ_judgment()) {
                // native_accessor.send_sms(json_message.messages[0].phone,'请输入正确的报名信息');
                return "请输入正确的报名信息";
            }else {
                // native_accessor.send_sms(json_message.messages[0].phone,'请输入正确的报名信息');
                if(Send_bidding.Select_registration_information(json_message)) {
                    Send_bidding.set_JJ_name(json_message);
                    localStorage[Bidding.get_Ongoig_bidding()] = JSON.stringify(Message);
                    var BiddingScope = angular.element("#Bidding").scope();
                    BiddingScope.$apply(function () {
                        BiddingScope.refresh();
                    })
                    return "恭喜你，竞价成功";
                }
                else{
                    return "未报名，不能参与竞价";
                }
            }
        }

    }
}
Send_bidding.set_JJ_name=function(json_message){
    var BM_message=Sign_up.Conversion_registration_information();//获取报名信息的数组
        for (var i = 0; i < BM_message.length; i++) {
            var s = BM_message[i].phone;//报名人的电话号码
            var name = BM_message[i].message;//报名人的姓名
            if (json_message.messages[0].phone == s) {//查找到竞价者的电话是否报名
            var JJ_Array= Bidding_list.get_JJ_information();//创建数组
            JJ_Array.unshift(name);
            localStorage['JJ_name'] = JSON.stringify(JJ_Array);
          }
        }
    return localStorage['JJ_name'];
}

Send_bidding.Select_registration_information=function(json_message){
    var BM_message=Sign_up.Conversion_registration_information();
    for (var i = 0; i < BM_message.length; i++) {
        var s = BM_message[i].phone;
        if (json_message.messages[0].phone == s) {
            return true;
        }
    }
    return false;
}