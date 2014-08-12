/**
 * Created by duzhongwen on 14-7-30.
 */

function List(){

}
List.Ongoing_activities_read=function(){
     var ongoing_activity=localStorage.getItem('Item');
    return ongoing_activity;
}

List.Storage_Ongoing_activities=function(){
    localStorage.setItem('Button_states',List.Ongoing_activities_read());
}

List.Initialization_click_action=function(){
    localStorage.setItem('actions_name',null);
}