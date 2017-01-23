module.exports = Backbone.View.extend({
    initialize:  function(){
        this.model.on('change', this.render, this);
    },

    events:{
        'click #check': 'addGuess',
        'click #start': 'newGame',
    },

    addGuess: function(){
        let stringGuess = document.querySelector('#guess').value.toLowerCase();
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
    
     document.querySelector('#guess').value = '';
     document.querySelector('#gameRows').value = '';

    let parent = document.querySelector('#gameRows');
    let template = document.querySelector('#game-row');
    let child = document.createElement('li');
    
    child.innerHTML = Mustache.render(template.innerHTML, {
            // turnNumber: DS,
            position0: model.get('colorGuesses.guess[turnNumber[1]]'),
            position1: model.get('colorGuesses.guess[turnNumber[2]]'),
            position2: model.get('colorGuesses.guess[turnNumber[3]]'),
            position3: model.get('colorGuesses.guess[turnNumber[4]]'),
            // pegs:,

        })
    }

})