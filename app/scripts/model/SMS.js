/**
 * Created by duzhongwen on 14-8-14.
 */
function SMS(){

}

SMS.get_sms_information=function(){//将活动信息整合为数组
    return JSON.parse(localStorage['Activity_smsinformation'] || '[]');
};

SMS.get_bid_information=function(){ //将竞价信息整合为数组
    return JSON.parse(localStorage['Bid_smsinformation']||'[]');
};