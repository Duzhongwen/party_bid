/**
 * Created by duzhongwen on 14-8-1.
 */
function Bidding_list(){

}


Bidding_list.get_bidding_name=function(){//将活动名称整合为数组
    return  JSON.parse(localStorage['bidding_name'] || '[]');
};

