function solve(face, suit) {
    const cardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
    ];

    const cardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }

    const isValidFace = cardFaces.includes(face);
    const isValidSuit = Object.keys(cardSuits).includes(suit);

    
    if (isValidFace && isValidSuit) {
        return {
            face,
            suit,
            toString() {
                console.log(`${face}${cardSuits[suit]}`)
            }
        }

    } else {
        throw new Error('Error')
    }

}
let card = solve('1', 'C');
card.toString()
