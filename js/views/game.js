module.exports = Backbone.View.extend({
    initialize:  function(){
        this.model.on('change', this.render, this);
    },

    events:{
        'click #check': addGuess,
    },

    addGuess: function(){
        this.model.checkGuess();
    },

    render: function showGame(){
    //   Get Grace's data.  Convert 'play' data to letters
    //     Convert indicators to 'close' and 'correct'
    // Display Turn number using her indices
    // Display all guesses and indicators in turn order
    
    }

})