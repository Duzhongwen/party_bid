/**
 * Created by duzhongwen on 14-7-30.
 */
function Sign_up(){

}

Sign_up.Judge_action=function(activity_name){  //获取并返回当前点击活动的states
    var action=Create.get_Action_information();
    var state= _.find(action,function(list){
        return list.activity==activity_name;
    });
    return state.states;
}

Sign_up.Judge_Ongoing_action1=function(){
    var action_information =Create.get_Action_information();
    var state= _.find(action_information,function(list){
        return list.states==false;
    });
    try{
        return state.activity;
    }catch(err){
        return null;
    }
}

Sign_up.get_activity_information=function(){
    return Sign_up.Judge_Ongoing_action1()+ "messages";
}

Sign_up.State_switch=function(activity_name,value){  //点击开始，完成states状态切换
    var action=Create.get_Action_information();
    var states= _.find(action,function(list){
        return list.activity==activity_name;
    });
    var index = _.indexOf(action, states);
    action[index].states = value;
    localStorage['Action_information'] = JSON.stringify(action);
}

Sign_up.Conversion_registration_information=function(click_activity){
    return JSON.parse(localStorage[click_activity+'messages'] || '[]');
}

Sign_up.State_switch1=function(activity_name,value){  //点击开始，完成states状态切换
    var action=Create.get_Action_information();
    var states= _.find(action,function(list){
        return list.activity==activity_name;
    });
    var index = _.indexOf(action, states);
    console.log(states.states==true ||states.states=='unstart');
    if(states.states==true ||states.states=='unstart'&&Judge_Ongoing_action()!=null) {//判断有没有活动正在进行，点击的活动是不是当前活动
        action[index].available = value;
        localStorage['Action_information'] = JSON.stringify(action);
    }
}

Sign_up.Judge_available=function(activity_name){  //获取并返回当前点击活动的states
    var action=Create.get_Action_information();
    var state= _.find(action,function(list){
        return list.activity==activity_name;
    });
    return state.available;
}
