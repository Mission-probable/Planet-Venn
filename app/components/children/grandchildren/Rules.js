import React from 'react';

//dumb component - only needs to render
const Rules = ()=> {
    return (
        <div id="rules-container" >
            <h2>How to Play</h2>
            <ol>
                <li>To start playing, place one of your game pieces into a section of the game board.  The game board has 4 sections: category 1, both categories, category 2 and neither category(black hole).</li>
                <li>If your guess was correct, your piece will remain in the correct section.  If not, your piece will return to your unplayed pieces.</li>
                <li>You can use the checklist to eliminate possible categories from each circle of the game board.</li>
                <li>Keep placing pieces until you are ready to select the category for each circle.</li>
                <li>If your guess is correct, you win and your score is the number of turns it took for you to figure out the categories.  The lower the score the better!</li>
                <li>If your guess is incorrect, keep placing pieces until you are ready to make another guess.</li>
            </ol>
        </div>
    )
};

export default Rules;



