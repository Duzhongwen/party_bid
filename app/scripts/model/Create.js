/**
 * Created by duzhongwen on 14-7-30.
 */
function Create(){

}

Create.set_create_action=function(action_name){
    localStorage.setItem('actions_name',action_name);
    console.log(action_name);
}

Create.get_Action_name=function(){//将活动名称整合为数组
    var list_Array= JSON.parse(localStorage['Action_name'] || '[]');
    return list_Array
};

Create.get_change_Action_name=function(action_name){//将活动名称数组转换为字符串
    var L_Array=Create.get_Action_name();
    L_Array.unshift(action_name);
    localStorage['Action_name'] = JSON.stringify(L_Array);
    return localStorage['Action_name'];
};

Create.inquire_action=function (action_name) {//判断活动名称是否重复
    //localStorage.setItem('action_name', action_name);
    var L_Array=Create.get_Action_name();
    for (var i=0;i<L_Array.length;i++) {
        var s = L_Array[i];
        if (action_name == s) {
            return true;
        }
    }
            return false;
};