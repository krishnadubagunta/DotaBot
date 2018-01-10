import React, { Component } from 'react';
import { Container, Grid, Card, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Teams from './teams';
import { recommend } from '../actions';

class Recommender extends Component {
  state = {};
  recommender = () => {
    this.props.recommend(this.state.heroes, this.state.enemies);
  };
  componentWillReceiveProps({ hero, enemy }) {
    this.setState({ heroes: hero, enemies: enemy });
  }
  render() {
    return (
      <Grid centered stackable stretched>
        <Grid.Row>
          <Teams />
        </Grid.Row>
        <Grid.Row>
          <Container>
            {this.props.show ? (
              <Button basic color="blue" onClick={this.recommender}>
                Recommend
              </Button>
            ) : null}
          </Container>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ enemy, hero }) {
  let show = false;
  if (enemy.length > 0) {
    show = true;
  }
  return { show, enemy, hero };
}

function mapStateToDispatch(dispatch) {
  return bindActionCreators({ recommend }, dispatch);
}

export default connect(mapStateToProps, mapStateToDispatch)(Recommender);
