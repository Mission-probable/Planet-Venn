import React, {Component} from 'react';

import Options from './great-grandchildren/Options';
import Pieces from './great-grandchildren/Pieces';

class Play extends Component {
    render() {
        return(
            <div>
                <Pieces />
                <Options />
            </div>
        )
    }
};

export default Play;