/**
 * Created by duzhongwen on 14-7-30.
 */
function Sign_up(activity,information){
    this.activity=activity;
    this.information=information;
}

Sign_up.prototype.storage_sms=function() {       //存储报名信息
    var sms_information = SMS.get_sms_information();
    var list = _.findWhere(sms_information,{'activity':this.activity});
    if(list&&list.activity==Sign_up.Judge_Ongoing_action1()){
        list.information.unshift(this.information);
    }else{
        sms_information.unshift({activity:this.activity, information:[this.information]});
    }
    localStorage['Activity_smsinformation'] = JSON.stringify(sms_information);
    return  localStorage['Activity_smsinformation'];
};

Sign_up.Judge_action=function(activity_name){  //获取并返回当前点击活动的states                 （5）
    var action=Create.get_Action_information();
    var state= _.find(action,function(list){
        return list.activity==activity_name;
    });
    return state.states;
};

Sign_up.Judge_Ongoing_action1=function(){     //判断正在进行的活动并返回活动名                   （4）
    var action_information =Create.get_Action_information();
    var state= _.find(action_information,function(list){
        return list.states==false;
    });
    try{
        return state.activity;
    }catch(err){
        return null;
    }
};

Sign_up.State_switch=function(activity_name,value){  //点击开始，完成activity开始或者结束状态切换               （3）
    var action=Create.get_Action_information();
    var states= _.find(action,function(list){
        return list.activity==activity_name;
    });
    var index = _.indexOf(action, states);
    action[index].states = value;
    localStorage['Action_information'] = JSON.stringify(action);
};

Sign_up.State_switch1=function(activity_name,value){  //点击开始，完成activity活动按钮可用状态切换               （1）
    var action=Create.get_Action_information();
    var states= _.find(action,function(list){
        return list.activity==activity_name;
    });
    var index = _.indexOf(action, states);
    if(states.states==true ||states.states=='unstart'&&Judge_Ongoing_action()!=null) { //判断有没有活动正在进行，点击的活动是不是当前活动
        action[index].available = value;
        localStorage['Action_information'] = JSON.stringify(action);
    }
};

Sign_up.Judge_available=function(activity_name){  //获取并返回当前点击活动的available                （2）
    var action=Create.get_Action_information();
    var state= _.find(action,function(list){
        return list.activity==activity_name;
    });
    return state.available;
}

Sign_up.get_click_information=function(activity){       //获取点击活动的报名信息
    var action_information=SMS.get_sms_information();
    var information_list= _.find(action_information,function(list){
        return list.activity==activity;
    });
    try{
        return information_list.information;
    }catch(err){
        return 0;
    }
};
