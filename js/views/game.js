module.exports = Backbone.View.extend({
    initialize:  function(){
        this.model.on('change', this.render, this);
    },

    events:{
        'click #check': 'addGuess',
        'click #start': 'newGame',
    },

    addGuess: function(){
        let stringGuess = document.querySelector('#guess').value;
        this.model.checkGuess(stringGuess);
    },

    newGame: function(){
        this.model.reset();
    },

    render: function (){
    //   Get Grace's data.  Clear the DOM.  Convert 'play' data to letters
    //     Convert indicators to 'close' and 'correct'
    // Display Turn number using her indices
    // Display all guesses and indicators in turn order
    
     document.querySelector('#guess').value = '';
     document.querySelector('#gameRows').value = '';

    let parent = document.querySelector('#gameRows');
    let template = document.querySelector('#game-row');
    let child = document.createElement('li');
    
    child.innerHTML = Mustache.render(template.innerHTML, {
            turnNumber: DS,
            position0: SD,
            position1:sd,
            position2:SD,
            position3:sd,
            pegs:A,

        })
    }

})