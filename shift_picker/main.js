const $ = function(s){return document.querySelector(s);}
const $$ = function(s){return document.querySelectorAll(s);}

var name = "", position = "";
var submit_node = $(".submit");

submit_node.addEventListener("click",store_data);

function store_data(){
    if($(".name").value && $(".position").value){
        name = $(".name").value;
        position = $(".position").value;
    }else{
        alert("You need to enter a name and a position to continue");
    }
}