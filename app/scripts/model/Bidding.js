/**
 * Created by duzhongwen on 14-7-31.
 */
function Bidding() {

}

Bidding.Initialization_activity=function(){//初始化进行的活动
    localStorage.setItem('Item',null);
}

Bidding.Initialization_bidding=function(){//初始化正在进行的竞价
    localStorage.setItem('bidding_name',null);
}

Bidding.get_click_bidding=function(){//获取点击的竞价的名称
    return localStorage.getItem('click_name')+"bidding";
}

Bidding.get_Ongoig_bidding=function(){//获取正在进行的竞价
    return localStorage.getItem('bidding_name')+"bidding";
}

Bidding.Conversion_bidding_information=function(){//将点击的竞价活动转存到数组
    return JSON.parse(localStorage[Bidding.get_click_bidding()] || '[]');
}
Bidding.Conversion_bidding_information1=function(){//将点击的竞价活动转存到数组
    return JSON.parse(localStorage[Bidding.get_Ongoig_bidding()] || '[]');
}

Bidding.get_Inquiry_bidding=function(){
    localStorage.getItem('click_name');
}

Bidding.Storage_click_bidding=function(name){
    localStorage.setItem('click_name',name);
}

Bidding.set_JJ_name=function(){
   return  localStorage.getItem('JJ_Name');
}

