/**
 * Created by duzhongwen on 14-8-26.
 */
function Bid_result(){

}

Bid_result.get_bid_price=function(activity,bid_name){
    var bid_information = SMS.get_bid_information();
    var list = _.findWhere(bid_information, {'activity': activity});
    var lists = _.findWhere(list.bidding, {'bid_name': bid_name});
    return (_.sortBy(lists.information,'price'))
};