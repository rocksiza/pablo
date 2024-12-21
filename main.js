var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["Diamond", "Heart", "Spade", "Club"];
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
 
function peekreveal(){
	var card1 = p1[($("#peek1").val())-1]
    var card1N = "#card" + $("#peek1").val()
    var card1file = card1["Value"] + "_" + card1["Suit"] + ".jpg"
    var card2 = p1[($("#peek2").val())-1]
    var card2N = "#card" + $("#peek2").val()
    var card2file = card2["Value"] + "_" + card2["Suit"] + ".jpg"
    console.log(card1file,card2file)

    var message = "Card " + $("#peek1").val() + " is " + card1["Value"] + " of " + card1["Suit"] + ". Card " + $("#peek2").val() + " is " + card2["Value"] + " of " + card2["Suit"] + "."  
    console.log(card1,card2)

    //
    $(card1N).attr("src","cards/moai/" + card1file);
    $(card2N).attr("src","cards/moai/" + card2file);
}

deck = getDeck();
deck = shuffle(deck);
console.log(deck)





