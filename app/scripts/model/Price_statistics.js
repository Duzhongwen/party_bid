/**
 * Created by duzhongwen on 14-8-26.
 */
function Price_statistics(){

}

Price_statistics.count_price=function(activity,bid_name){
    var bid_information = SMS.get_bid_information();
    var list = _.findWhere(bid_information, {'activity': activity});
    var lists = _.findWhere(list.bidding, {'bid_name': bid_name});
    return (_.groupBy(lists.information,'price'));
};

Price_statistics.bid_statistics  = function(argument){
    return result = _.map(argument,function(value,key){
        return {'price':key,'count':value.length}
    });
};