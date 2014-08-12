/**
 * Created by duzhongwen on 14-8-1.
 */
function Bidding_list(){

}

Bidding_list.Create_bidding=function(){
     var Bidding=JSON.parse(localStorage[Sign_up.get_click_activity()+'biding_name'] || '[]');
     Sign_up.get_click_activity();
     var biding_name="竞价"+(Bidding.length+1);
     localStorage.setItem('bidding_name',biding_name);
     Bidding.unshift(biding_name);
     localStorage[Sign_up.get_click_activity()+'biding_name'] = JSON.stringify(Bidding);
     return JSON.parse(localStorage[Sign_up.get_click_activity()+'biding_name'] || '[]');
};

Bidding_list.get_bidding_information=function(){
    return localStorage.getItem('bidding_name');
}

Bidding_list.get_JJ_information=function(){
    return JSON.parse(localStorage['JJ_name'] || '[]');
}