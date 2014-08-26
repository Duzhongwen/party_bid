/**
 * Created by duzhongwen on 14-8-4.
 */
function Send_bidding(){

}

Send_bidding.send_message=function(json_message){
    console.log(Send_bidding.jugement_status());
    if(Send_bidding.jugement_status()==null){
        return "竞价未开始，请稍后";
    }
    if(Send_bidding.jugement_status()=='end'){
        return "竞价已结束，请稍后";
    }
    if(Send_bidding.jugement_status()=='started'){
        if (Send_bidding.Phone_jugement(json_message)) {
            return "竞价号码重复，请勿重复出价";
        }
        if(!Send_bidding.Phone_jugement(json_message)){
            if(Send_bidding.JJ_jugement(json_message)){
                if(Send_bidding.Select_registration_information(json_message)) {
                    var Message=new Bidding_list(Bidding_list.get_onbid_activity(),'',json_message.messages[0]);
                    Message.storage_sms();
                    var BiddingScope = angular.element("#Bidding").scope();
                    BiddingScope.$apply(function () {
                    BiddingScope.refresh();
                    });
                    return "恭喜你，竞价成功";
                }
                else{
                    return "未报名，不能参与竞价";
                }
            }
        }
    }
};

Send_bidding.JJ_jugement=function(json_message){
    var message = json_message.messages[0];
    var Update_message = message.message.replace(/\s/g, "");
    message.message = Update_message.substr(2, 6);
    console.log(json_message.messages[0]);
    return (Update_message.search(/JJ/i) == 0);
}

Send_bidding.jugement_status=function(){
    var BM_message=Create.get_Action_information();
    var list=_.findWhere(BM_message,{'bid_status':'started'||'end'});
    try {
        return list.bid_status;
    }catch(err){
        return null;
    }
};

Send_bidding.Phone_jugement=function (json_message) {    //判断竞价号码是否重复
    var bid_Array=SMS.get_bid_information();
    var list= _.findWhere(bid_Array,{'activity':Bidding_list.get_onbid_activity()});
    try {
        return(_.findWhere(list.bidding[0].information, {'phone': json_message.messages[0].phone}));
    } catch (err) {
        return false;
    }
};

Send_bidding.Select_registration_information=function(json_message){
    var BM_message=Create.get_Action_information();
    var BM_inforamtion=SMS.get_sms_information();
    var list = _.findWhere(BM_message,{'bid_status':'started'});//在报名信息中查找进行竞价的活动的名称
    var lists=_.findWhere(BM_inforamtion,{'activity':list.activity});
    return (_.findWhere(lists.information,{'phone':json_message.messages[0].phone}));
};