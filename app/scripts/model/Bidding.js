/**
 * Created by duzhongwen on 14-7-31.
 */
function Bidding() {

}

Bidding.get_click_information=function(activity,bid_name) {
    var bid_information = SMS.get_bid_information();
    var list = _.findWhere(bid_information, {'activity': activity});
    var lists = _.findWhere(list.bidding, {'bid_name': bid_name});
    return lists.information;
};

