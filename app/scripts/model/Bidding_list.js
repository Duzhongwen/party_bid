/**
 * Created by duzhongwen on 14-8-1.
 */
function Bidding_list(){

}

Bidding_list.Create_bidding=function(){//将活动名称整合为数组
     var Bidding=JSON.parse(localStorage[Sign_up.get_click_activity()+'bidding_name'] || '[]');
     Sign_up.get_click_activity();
     var biding_name="竞价"+(Bidding.length+1);
     localStorage[Sign_up.get_click_activity()+'bidding_name'] = JSON.stringify(Bidding);
     return JSON.parse(localStorage[Sign_up.get_click_activity()+'bidding_name']);
};

Bidding_list.get_bidding_information=function(){
    return localStorage.getItem('actions_name') + "bidding";
}

