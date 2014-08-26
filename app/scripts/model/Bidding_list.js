/**
 * Created by duzhongwen on 14-8-1.
 */
function Bidding_list(activity,bidding,information){
    this.activity=activity;
    this.information=information;
    this.bidding=bidding;
}

Bidding_list.prototype.storage_sms=function(){
    var Bidding=SMS.get_bid_information();
    var action=SMS.get_sms_information();
    var list= _.findWhere(Bidding,{'activity':this.activity});//正在进行的竞价活动对应的对象
    var actions= _.findWhere(action,{'activity':Bidding_list.get_onbid_activity()});
    var actions_informations= _.findWhere(actions.information,{'phone':this.information.phone});
    console.log(this.information);
    list.bidding[0].information.unshift({price:this.information.message,phone:this.information.phone,name:actions_informations.message});
    localStorage['Bid_smsinformation'] = JSON.stringify(Bidding);
    return JSON.parse(localStorage['Bid_smsinformation'] || '[]');
};

Bidding_list.Create_bidding=function(activity){
    var Bidding=SMS.get_bid_information(); //获取竞价数组信息
    var list = _.findWhere(Bidding,{'activity':activity});
    if(list==undefined) {
        var biding_name = "竞价" + (Bidding.length + 1);
    }else{
        var biding_name = "竞价" + (list.bidding.length + 1);
    }
    if(list) {
        list.bidding.unshift({bid_name:biding_name,information:[]});
    }else{
        Bidding.unshift({activity:activity,bidding:[{bid_name:biding_name,information:[]}]});
    }
    localStorage['Bid_smsinformation'] = JSON.stringify(Bidding);
    return JSON.parse(localStorage['Bid_smsinformation'] || '[]');
};

Bidding_list.change_bidding_states=function(activity){
    var activity_information=Create.get_Action_information();
    var ongoing_action_b= _.find(activity_information,function(list){
        return list.activity==activity;
    });
    ongoing_action_b.bid_status = 'started';
    localStorage['Action_information'] = JSON.stringify(activity_information);
};

Bidding_list.get_onbid_activity=function(){
    var action=Create.get_Action_information();
    var lists= _.find(action,function(list){
        return list.bid_status=='started';
    });
    return lists.activity;
};

Bidding_list.get_bid_name=function(activity){
    var Bidding=SMS.get_bid_information(); //获取竞价数组信息
    var list = _.findWhere(Bidding,{'activity':activity});
    try {
        return list.bidding;
    }catch(err){
        return null;
    }
};

Bidding_list.jugement_bid_status=function(activity){
    var action=Create.get_Action_information();
    var lists= _.find(action,function(list){
        return list.activity==activity;
    })
    return lists.bid_status;
};

Bidding_list.change_bidding_status=function(activity){
    var activity_information=Create.get_Action_information();
    var ongoing_action_b= _.find(activity_information,function(list){
        return list.activity==activity;
    });
    ongoing_action_b.bid_status = 'end';
    localStorage['Action_information'] = JSON.stringify(activity_information);
};

Bidding_list.jugement_ongoing_bid=function() {
    var action = Create.get_Action_information();
    var lists = _.find(action, function (list) {
        return list.bid_status == 'started';
    });
    try {
        return lists.bid_status;
    }catch(err){
        return null;
    }
};