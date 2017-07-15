var React = require("react");

// components
var Nav = require("./grandchildren/Nav");
var Footer = require("./grandchildren/Footer");

//set state and pass to Nav so Nav can determine which links to render
var Rules = React.CreateClass( {

    getInitialState: function() {
        return ( 
            {currentPage: "rules"}
        )
    },

    render: function() {
	    return (
	    	<div className="container">

		    	<Nav currentPage={this.state.currentPage} />

                <div className="row">
                    <div id="rules-container" className="col-md-10 col-md-offset-1">
		    	        <h2>Planet Venn Rules</h2>
                        <ol>
                            <li>To start playing, place one of your game pieces into a section of the game board.  The game board has 4 sections: category 1, both categories, category 2 and neither category.</li>
                            <li>If your guess was correct, your piece will remain in the correct section.  If not, your piece will return to your unplayed pieces.</li>
                            <li>Use your checklist to eliminate possible categories from each circle of the game board.</li>
                            <li>Keep placing pieces until you are ready to select the category for each circle.</li>
                            <li>If your guess is correct, you win and your score is the number of turns it took for you to figure out the categories.  The lower the score the better! <em>or score can be number of pieces remaining and higher is better but then guesses don't cost a turn (or maybe more for an incorrect guess?)</em></li>
                            <li>If your guess is incorrect, keep placing pieces until you are ready to make another guess.</li>
                        </ol>
                    </div>
                </div>
                    
		    	<Footer />

            </div>
	   	);
	}
});

module.exports = Rules;

