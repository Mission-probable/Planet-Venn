import React, {Component} from 'react';

class Pieces extends Component {
    render () {
        return (
                
            <div id="pieces-container">
                <img id="satBlueBig" className="big piece 1" data-shape="sat" data-color="blue" data-size="big" data-placed="false" src="./images/sat_still.gif" />
                <img id="alienGreenSmall" className="small piece 2" data-shape="alien" data-color="green" data-size="small" data-placed="false" src="./images/alien_still.gif" />
                <img id="sunRedBig" className="big piece 3" data-shape="sun" data-color="red" data-size="big" data-placed="false" src="./images/sun_still.gif" />
                <img id="sunBlueSmall" className="small piece 4" data-shape="sun" data-color="blue" data-size="small" data-placed="false" src="./images/sun_still.gif" />

                <img id="alienGreenBig" className="big piece 5" data-shape="alien" data-color="green" data-size="big" data-placed="false" src="./images/alien_still.gif" />
                <img id="satBlueSmall" className="small piece 6" data-shape="sat" data-color="blue" data-size="small" data-placed="false" src="./images/sat_still.gif" />
                <img id="sunGreenBig" className="big piece 7" data-shape="sun" data-color="green" data-size="big" data-placed="false" src="./images/sun_still.gif" />
                <img id="alienRedSmall" className="small piece 8" data-shape="alien" data-color="red" data-size="small" data-placed="false" src="./images/alien_still.gif" />

                <img id="alienBlueBig" className="big piece 9" data-shape="alien" data-color="blue" data-size="big" data-placed="false" src="./images/alien_still.gif" />
                <img id="satGreenSmall" className="small piece 10" data-shape="sat" data-color="green" data-size="small" data-placed="false" src="./images/sat_still.gif" />
                <img id="satRedBig" className="big piece 11" data-shape="sat" data-color="red" data-size="big" data-placed="false" src="./images/sat_still.gif" />
                <img id="sunRedSmall" className="small piece 12" data-shape="sun" data-color="red" data-size="small" data-placed="false" src="./images/sun_still.gif" />
            </div>
        )
    }
};

export default Pieces;
            
    