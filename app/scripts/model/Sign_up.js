/**
 * Created by duzhongwen on 14-7-30.
 */
function Sign_up(){

}

Sign_up.Judge_action=function(activity_name){
    var action=Create.get_Action_information();
    for(var i=0;i<action.length;i++){
        if(action[i].activity==activity_name){
            return action[i].states;
        }
    }
}

Sign_up.get_activity_information=function(){
    return localStorage.getItem('actions_name') + "messages";
}

Sign_up.State_switch=function(){
    var action=Create.get_Action_information();
}

Sign_up.Conversion_registration_information=function(){
    return JSON.parse(localStorage[Sign_up.get_activity_information()] || '[]');
}

Sign_up.Assignment_ongoing_activity=function(){
    localStorage.setItem('Item', Sign_up.get_click_activity());
}
