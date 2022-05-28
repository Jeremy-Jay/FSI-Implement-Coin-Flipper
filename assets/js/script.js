// Track any global variables we need
let headsRolls = 0
let tailsRolls = 0

// Listen for DOMContentLoaded to ensure that all HTML and resources
//  have been loaded before attempting to run code
document.addEventListener('DOMContentLoaded', function () {
    // Add event for flip
    document.getElementById('flip').addEventListener('click', () => {
    // Math for Flipped Heads
        let flippedHeads = Math.random() < 0.5

     // Heads image and message
        if (flippedHeads) {
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'Heads'
            headsRolls += 1
        }
        else {
            // Tails message and Image
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'Tails'
            tailsRolls += 1
        }

        // Scoreboard

        // Total rolls
        let total = headsRolls + tailsRolls

        // Create variables to track percent heads and tails
        let percentHeads = 0
        let percentTails = 0

        // Before trying to divide, make sure total is not zero
        if (total > 0) {
            // Calculate percentage of heads and tails
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }

        // Update the values in the scoreboard table
        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
       // Clear Variable and addEventListner
    document.getElementById('clear').addEventListener('click', function () {
        headsRolls = 0
        tailsRolls = 0

        // Update the message to the user
        document.getElementById('message').textContent = 'Keep Flipping'
        
        // Calculate total number of rolls
        let total = headsRolls + tailsRolls

        // Create variables to track percent heads and tails
        let percentHeads = 0
        let percentTails = 0

        // Before trying to divide, make sure total is not zero
        if (total > 0) {
            // Math for calculating percent
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }

        // Update the values in the scoreboard table
        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})

