module.exports = Backbone.View.extend({
    initialize:  function(){
        this.model.on('change', this.render, this);
    },

    events:{
        'click #check': showGame,
    },

    showGame: function(){
        console.log('peas, love em');
        this.model.showGame();
    },

    render: function(){
        // mustache stuff
    }

})