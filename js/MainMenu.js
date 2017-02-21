var SpaceHipster = SpaceHipster || {};

//title screen
SpaceHipster.MainMenu = function(){};

SpaceHipster.MainMenu.prototype = {
  init: function(score) {

    score = isNaN(score) ? 0 : score;
    this.highestScore = Number(localStorage.getItem("score"));
    this.highestScore = isNaN(this.highestScore) ? score : Math.max(score, Number(this.highestScore));
    localStorage.setItem('score', this.highestScore);
    return this.highestScore;


   },
  create: function() {
  	//show the space tile, repeated
   this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'space');

    //give it speed in x

    this.background.autoScroll(0, 10);

    //start game text
    var text = "Tap to begin and to move player";
    var style = { font: "30px Arial", fill: "#fff", align: "center" };
    var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
    t.anchor.set(0.5);


    //highest score
    text = "Highest score: "+this.highestScore;
    style = { font: "15px Arial", fill: "#fff", align: "center" };

    var h = this.game.add.text(this.game.width/2, this.game.height/2 + 50, text, style);
    h.anchor.set(0.5);
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }
  }
};
