/**
 * Created by duzhongwen on 14-7-30.
 */

function List(){

}
List.Ongoing_activities_read=function(){
    return localStorage.getItem('Item');
}

List.Storage_click_activity=function(list){
    localStorage.setItem('actions_name',list);
}

List.Storage_Ongoing_activities=function(){
    localStorage.setItem('Button_states',List.Ongoing_activities_read());
}