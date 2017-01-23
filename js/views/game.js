module.exports = Backbone.View.extend({
    initialize:  function(){
        this.model.on('change', this.render, this);
    },

    events:{
        'click #check': 'addGuess',
        'click #start': 'newGame',
    },

    addGuess: function(){
        let stringGuess = this.el.querySelector('#guess').value.toLowerCase();
        this.model.checkGuess(stringGuess);
    },

    newGame: function(){
        this.model.reset();
    },

    render: function (){
    // Get Grace's data.  Clear the DOM.  Convert 'play' data to letters
    // Need to have her structure from her response.  Don't have that yet.
    // Convert indicators to 'close' and 'correct'
    // Display Turn number using her indices
    // Display all guesses and indicators in turn order
    
     this.el.querySelector('#guess').value = '';
     this.el.querySelector('#gameRows').value = '';

    let parent = this.el.querySelector('#rowDisplay');
    let template = this.el.querySelector('#game-row');
    let child = this.el.createElement('li');
    
    for (i=0; i<response.length; i++){
    child.innerHTML = Mustache.render(template.innerHTML, {
             
            turnNumber: response.index,
            pegs: response.indicators,

            position0: this.model.get('colorGuesses.guess[0])'),
            position1: this.model.get('colorGuesses.guess[1]'),
            position2: this.model.get('colorGuesses.guess[3]'),
            position3: this.model.get('colorGuesses.guess[4]'),
            

    })
    }
    }

})