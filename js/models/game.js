Backbone.sync = function (method, model){
    
    if (method === 'create' || method === 'update'){

        // if (model.get("turn") === 0) {
        //     const request = new XMLHttpRequest();
        //     // do new game stuff
        // } else {

        let request = new XMLHttpRequest();
        request.open('POST', 'https://limitless-earth-22097.herokuapp.com/');
        request.addEventListener('load', function(){
            let response = JSON.parse(request.responseText);
            model.set('indicators', response.indicators);
            model.trigger('change');
            let newTurn = this.get('turn') + 1;
             model.set('turn', newTurn);
        });
        let body = JSON.stringify({
            play: this.get('numberGuesses.guess[guessNumber]'),
        })
        // when we get the answer back, we will render the info to the DOM
        // and clear out the guess input box.  We will use her index to 
        // increase the turn default. 
        
        request.send(body);
        }
    }


module.exports = Backbone.Model.extend({
    defaults: {
        turn: 0,
        colorGuesses: [],
        numberGuesses:[],
        indicators: [],

    },

    reset: function() {
        this.set('turn', 0);
        this.save();
    },

    // when get check  is clicked, it calls check Guess.  We push the current
    // guess (after splitting string) to the gueses as an array in the guesses 
    // object and then send Grace the current turn's guess only
    // in an array format.  

    checkGuess: function (input) {

        let colorGuesses = this.get('colorGuesses')
        let guess = input.split("");
        colorGuesses.push(guess);
        this.set('colorGuesses', colorGuesses);
        // this.trigger('change');

    //   converting our color letter into a number for post to Grace

        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === 'r') {
                guess[i] = 1
            }
            if (guess[i] === 'o') {
                guess[i] = 2
            }
            if (guess[i] === 'y') {
                guess[i] = 3
            }
            if (guess[i] === 'w') {
                guess[i] = 4
            }
            if (guess[i] === 'b') {
                guess[i] = 5
            }
            if (guess[i] === 'g') {
                guess[i] = 6
            }
            if (guess[i] === 't') {
                guess[i] = 7
            }
            if (guess[i] === 'p') {
                guess[i] = 8
            }
        }
        let numberGuesses = this.get('numberGuesses')
        numberGuesses.push(guess);
        this.set('numberGuesses', numberGuesses);
        this.save();
    }

});