// debugger;
var colors = ['#ff0000','#ffff00','#ff8800',
			  '#00ff00','#ff00ff','#00ffff',
			  '#0000ff','#000000','#ffffff',
			  '#ce00ff','#14930a','#0af89d'];
			  
var $ = function(s){return document.querySelector(s)};
var $$ = function(s){return document.querySelectorAll(s)};

function randomize(min,max){
	return min + Math.round(Math.random() * (max - min));
}


var interval = 5000;
var num_cards = 3;
var first_game = true;
var card_container = $(".cards-box");
var picker_container = $(".picker");
var cards;
var current_card_num = 0;
var current_card_node;
var answer_colors = [];




function init_game(){
	// debugger;
	current_card_num = 0;
	if(first_game === true){
		create_cards(num_cards);
		cards = $$(".card");
		create_color_picker(colors);

	}
	first_game = false;
	current_card_node = cards[0];
	color_cards();
	// debugger;
	setTimeout(hide_cards, interval);
	picker_container.addEventListener("click", card_clicked);
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
		color_box.hexColor = color;
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
	answer_colors = get_random_colors(num_cards);
	for(var i = 0 ; i < num_cards ; i++){
		var current_card = $(".card" + i);
		current_card.style.backgroundColor = answer_colors[i];
	}
}

function hide_cards(){
	for(var i = 0 ; i < num_cards ; i++){
		var current_card = $(".card" + i);
		current_card.style.backgroundColor = "white";
	}
	mark_card(current_card_node);
}

function card_clicked(event){
	if(answer_colors[current_card_num] === event.target.hexColor){
		if((current_card_num + 1) < num_cards){
			unmark_card(current_card_node);
			current_card_node.style.backgroundColor = answer_colors[current_card_num];
			current_card_num++;
			current_card_node = cards[current_card_num];
			mark_card(current_card_node);

		}else{
			if(confirm("YOU WIN HONCHO, PLAY AGAIN?")){
			unmark_card(current_card_node);
			init_game();
			}else{
				
				window.location.href = "https://www.newstalk.com/content/000/images/000034/36856_54_news_hub_31595_656x500.jpg";
			}

		}


	}else{
		if(confirm("WRONG MOVE BUCKAROO, WANNA TRY AGAIN?")){
			unmark_card(current_card_node);
			init_game();
		}else{
			window.location.href = "https://www.newstalk.com/content/000/images/000034/36856_54_news_hub_31595_656x500.jpg";
		}
	}
}

function mark_card(card){
	card.classList.add("marked-card");
}

function unmark_card(card){
	card.classList.remove("marked-card");
}

// debugger;
init_game();