var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();
var p1 = []
var p2 = []
var p3 = []
var p4 = []
var turn = 0
const players = [p1, p2, p3, p4];


function shuffle(deck){ // old, might repurpose

	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}

	return deck
}


function getDeck(){

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < cards.length; x++)
		{
			var card = {Value: cards[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function deal(){
	for(let i = 0; i < 4; i++){
		for(let i = 0; i < 4; i++){
		players[i].push(deck[0])
		deck.shift()
		}
	}

}
 
deck = getDeck();
deck = shuffle(deck);
console.log(deck)





