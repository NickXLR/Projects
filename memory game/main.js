var colors = ['#ff0000','#ffff00','#ff8800',
			  '#00ff00','#ff00ff','#00ffff',
			  '#0000ff','#000000','#ffffff',
			  '#ce00ff','#14930a','#0af89d'];
			  
var $ = function(s){return document.querySelector(s)};
var $$ = function(s){return document.querySelectorAll(s)};

function randomize(min,max){
	return min + Math.round(Math.random() * (max - min));
}


var interval = 2000;
var num_cards = 3;
var first_game = true;
var card_container = $(".cards-box");
var picker_container = $(".picker");


function init_game(){
	// debugger;
	if(first_game === true){
		create_cards(num_cards);
		create_color_picker(colors);

	}
	first_game = false;
	color_cards();
	// debugger;
	setTimeout(hide_cards, interval);
}

function create_cards(num){
	// debugger;
	for(var i = 0; i < num; i++){
		var card_box = document.createElement("div");
		card_box.classList.add("card", "card" + i);
		card_container.appendChild(card_box);
	}
}

function create_color_picker(color_array){
	// debugger;
	for(var color of color_array){
		var color_box = document.createElement("div");
		color_box.classList.add("picker-box");
		color_box.style.backgroundColor = color;
		picker_container.appendChild(color_box);
	}

}

function get_random_colors(num){
	var random_colors = [];
	// debugger;
	while(random_colors.length < num){
		var rand = randomize(0,colors.length - 1);
		if(random_colors.includes(colors[rand]) === false){
			random_colors.push(colors[rand]);
		}
	}
	return random_colors;
}

function color_cards(){
	// debugger;
	var random_colors = get_random_colors(num_cards);
	for(var i = 0 ; i < num_cards ; i++){
		var current_card = $(".card" + i);
		current_card.style.backgroundColor = random_colors.pop();
	}
}

function hide_cards(){
	for(var i = 0 ; i < num_cards ; i++){
		var current_card = $(".card" + i);
		current_card.style.backgroundColor = "white";
	}
}

function add_event_listener(){
	
}

function mark_card(card){
	card.classList.add("marked-card");
}

function unmark_card(card){
	card.classList.remove("marked-card");
	card.classList.add("unmarked-card");
}

// debugger;
init_game();