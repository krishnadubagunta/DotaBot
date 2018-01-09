import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeHero } from '../actions';

class Teams extends Component {
  state = { heroes: [], enemies: [] };

  componentWillReceiveProps(props) {}

  render() {
    return (
      <Grid stackable columns={5}>
        <Grid.Row>
          {this.state.heroes.map(hero => {
            return (
              <Card>
                <Image src={hero.img} size="small" />
                <Card.Header>{hero.localized_name}</Card.Header>
              </Card>
            );
          })}
        </Grid.Row>
        <Grid.Row>
          {this.state.enemies.map(hero => {
            return (
              <Card>
                <Image src={hero.img} size="small" />
                <Card.Header>{hero.localized_name}</Card.Header>
              </Card>
            );
          })}
        </Grid.Row>
      </Grid>
    );
  }
}
function mapStateToProps({ heros: { res } }) {
  return {
    heros: res
  };
}

function mapStateToDispatch(dispatch) {
  return bindActionCreators({ removeHero }, dispatch);
}

export default connect(mapStateToProps, mapStateToDispatch)(Teams);
