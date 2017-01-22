module.exports = Backbone.View.extend({
    initialize:  function(){
        this.model.on('change', this.render, this);
    },

    events:{
        'click #check': checkGuess,
    },

    showGame: function(){
        this.model.();
    },

    render: function(){
        // mustache stuff
    }

})