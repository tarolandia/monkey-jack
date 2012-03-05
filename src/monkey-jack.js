var Card = Backbone.Model.extend({
  isAs: false,
  initialize: function(suit.number) {
    this.suit = suit;
    this.number = number;
    if(number === 1) this.isAs = true;
  },
  getValue: function() {
    if(this.number === 1) return [1,11];
    else if(this.number <= 9) return this.number;
    else return 10;
  }
});

var Deck = Backbone.Model.extend({
  var cards = [];
  initialize: function() {
    var x,y;
    for(x = 1; x <= 4; x++) {
      for( y = 1; y <= 12 ; y++) {
        cards.push(new Card(x,y));
      }
    }
  },
  shuffle: function() {
    for(var j, x, i = cards.length; i; j = parseInt(Math.random() * i), x = cards[--i], cards[i] = cards[j], cards[j] = x);
  },
  getTop: function() {
    return cards.pop();
  }
});

var Hand = Backbone.Model.extend({
  var cards = [];
  total: 0,
  intitialize: function(card1, card2) {
    cards.push(card1);
    cards.push(card2);
    this.calcScores();
  },
  calcScore: function(){
    var scores = [0],
        i = 0,
        count = cards.length;
    for(i; i<count; i++) {
      var val = cards[i].getValue();
      var j = 0, cnt = scores.legth;
      for(j; j < cnt; j++) {
        if( typeof(val) === "Array" ) {
          scores[j] += val[0];
          scores.push(scores[j] + val[1]);
        } else {
          scores[j] += val;
        }
      }
    }
    scores.sort();
    while(scores.length > 0) {
      this.total =  parseInt(scores.pop());
      if(this.total < 22) break;
    }
  },
  getScore: function() {
    return total;
  },
  isBlackjack: function() {
    if(cards.length === 2 && total === 21) return true;
    else return false;
  }
});
