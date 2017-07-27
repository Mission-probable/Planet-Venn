import React, {Component} from 'react';
import { Row, Col } from "react-grid-system";
import update from 'react/lib/update';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import ItemTypes from '../../utils/ItemTypes';
import PropTypes from 'prop-types';

import Pieces from './grandchildren/Pieces';
import Board from './grandchildren/Board';
import Options from './grandchildren/Options';

class GameSpace extends Component{
    constructor(props) {
    super(props);
    this.state = {
      items: {
        a: { active: 'http://gph.to/2h3R26x', still: '', id: '', className: '', left: 50, top: 180, type: [ItemTypes.PLANET] },
        b: { active: 'http://gph.to/2vJycoB', still: '', id: '', className: '', left: 100, top: 180, type: [ItemTypes.ALIEN] },
        c: { active: 'http://gph.to/2tKtSbi', still: '', id: '', className: '', left: 150, top: 180, type: [ItemTypes.SATELITE] }
      }
    };
    this.moveItem = this.moveItem.bind(this);
  }

  moveItem(id, left, top) {
    console.log(id, left, top);
    this.setState(update(this.state, {
        items: {
            [id]: {
                $merge: { left, top }
            }
        }
    }));
  }
    render() {
        const { hideSourceOnDrag } = this.props;
        const { items } = this.state;

        return (
            <div>                
                <Row>
                    <Col sm={3}>
                        {Object.keys(items).map((key) => {
          const { id, active, still, className, left, top, type, hideSourceOnDrag } = items[key];
          return (
            <Pieces
                key={key}
                id={id}
                active={active}
                still={still}
                className={className}
                left={left}
                top={top}
                type={type}
                hideSourceOnDrag={hideSourceOnDrag}
              />
          );
        })}
                    </Col>
                  
                    <Col sm={9}>
                        <Venn accepts={ItemTypes.ALIEN} id='' moveItem={this.moveItem}/>
                        <Venn accepts={ItemTypes.ALIEN} id='' moveItem={this.moveItem}/>
                        <Venn accepts={ItemTypes.ALIEN} id='' moveItem={this.moveItem}/>
                        <Venn accepts={ItemTypes.ALIEN} id='' moveItem={this.moveItem}/>
                    </Col>
                </Row>
                <Options />
            </div>
        );
    }
};

export default GameSpace;
