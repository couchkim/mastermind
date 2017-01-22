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
        // mustache stuff
    }

})