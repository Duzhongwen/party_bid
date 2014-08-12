/**
 * Created by duzhongwen on 14-7-30.
 */
function Create(activity,states,available){
    this.activity=activity;
    this.states=states;
    this.available=available;
}

Create.get_Action_information=function(){//将活动名称整合为数组
    var list_Array= JSON.parse(localStorage['Action_information'] || '[]');
    return list_Array;
};

Create.prototype.get_change_Action_name=function(){//将活动名称数组转换为字符串
    var action_Properties={
        name: this.activity,
        states: this.states,
        available:this.available
    }
    var L_Array=Create.get_Action_information();
    L_Array.unshift(this);
    localStorage['Action_information'] = JSON.stringify(L_Array);
    return localStorage['Action_information'];
};

Create.inquire_action=function (action_name) {//判断活动名称是否重复
    var L_Array=Create.get_Action_information();
    for (var i=0;i<L_Array.length;i++) {
        var s = L_Array[i].activity;
        if (action_name == s) {
            return true;
        }
    }
            return false;
};
