module.exports = Backbone.Model.extend({
    defaults: {
        turn: 0,
        guesses: {
        }
    },

    // when get check  is clicked, it calls check Guess.  We push the current
    // guess (after splitting string) to the gueses as an array in the guesses 
    // object and then send Grace the current turn's guess only
    // in an array format.  

    checkGuess: function () {
        let stringGuess = document.querySelector('#guess').value;
        let guess = stringGuess.split("").toLowerCase;
        
    //   converting our color letter into a number for post to Grace

        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === 'r') {
                guess[i] = 0
            }
            if (guess[i] === 'o') {
                guess[i] = 1
            }
            if (guess[i] === 'y') {
                guess[i] = 2
            }
            if (guess[i] === 'w') {
                guess[i] = 3
            }
            if (guess[i] === 'b') {
                guess[i] = 4
            }
            if (guess[i] === 'g') {
                guess[i] = 5
            }
            if (guess[i] === 't') {
                guess[i] = 6
            }
            if (guess[i] === 'p') {
                guess[i] = 7
            }
        }
        guesses.push(guess);
        let guessNumber = this.turn;
        let request = new XMLHttpRequest();
        request.open('POST', 'needurl');
        let body = JSON.stringify()({
            data: guesses.guess[guessNumber],
        })
        // when we get the answer back, we will render the info to the DOM
        // and clear out the guess input box.  We will use her index to 
        // increase the turn default. 

        request.addEventListener('load', function () {
            this.views.showGame();
        })

        document.querySelector('#guess').value = '';
        request.send(body);
    }
})