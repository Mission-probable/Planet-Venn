import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Game = ({ secretData }) => (
  <Card className="container">
    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
  </Card>
);

Game.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Game;
