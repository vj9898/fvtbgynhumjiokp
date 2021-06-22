menu_list_array=["veg supreme pizza","veg extravenza pizza","chicken tandoori pizza","panner tikka pizza"];

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'li' + menu_list_array[1]+ '</li>'
    }
    htmldata=htmldata+'</ol>'
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+"<div class='cards'>"+ '<img src="cards"/>' + menu_list_array[i]
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addmenu").innerHTML = htmldata;
}