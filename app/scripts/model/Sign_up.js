/**
 * Created by duzhongwen on 14-7-30.
 */
function Sign_up(){

}

Sign_up.get_button=function(){
    var button = localStorage.getItem('button');
    return button;
}
//Sign_up.set_button=function(){
//    localStorage.setItem('button', activity);
//}

Sign_up.get_activity_information=function(){
    return localStorage.getItem('actions_name') + "messages";
}

Sign_up.get_click_activity=function(){
    return localStorage.getItem('actions_name');
}

Sign_up.Conversion_registration_information=function(){
    return JSON.parse(localStorage[Sign_up.get_activity_information()] || '[]');
}

Sign_up.Assignment_ongoing_activity=function(){
    localStorage.setItem('Item', Sign_up.get_click_activity());
}

