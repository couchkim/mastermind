module.exports = Backbone.Model.extend({
    defaults:{
        turn: 0,
        guesses: {
        }
    },

// when get check  is clicked, it calls check Guess.  We push the current
// guess (after splitting string) to the gueses as an array in the guesses 
// object and then send Grace the current turn's guess only
// in an array format.  

    checkGuess: function (){
        let stringGuess = document.querySelector('#guess').value;
        let guess = stringGuess.split("");
        guesses.push(guess);
        let guessNumber = this.turn;
        let request = new XMLHttpRequest();
        request.open('POST', 'needurl');
        let body = JSON.stringify()({
            guesses: guesses.guess[guessNumber],
        })
// when we get the answer back, we will render the info to the DOM
// and clear out the guess input box.  We will use her index to 
// increase the turn default. 

        request.addEventListener('load', function(){
            this.views.showGame();
        })

        document.querySelector('#guess').value = '';
        request.send(body);
    }
})