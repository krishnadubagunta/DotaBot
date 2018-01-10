import React, { Component } from 'react';
import {
  Container,
  Grid,
  Card,
  Image,
  Button,
  Divider
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Teams from './teams';
import { recommend, addHero } from '../actions';

class Recommender extends Component {
  state = {};
  recommender = () => {
    this.props.recommend(this.state.heroes, this.state.enemies);
  };
  componentWillReceiveProps({ hero, enemy }) {
    this.setState({ heroes: hero, enemies: enemy });
  }

  handleAdd = (e, { hero }) => {
    this.props.addHero(hero);
  };

  renderRecommendation() {
    return this.props.recommendation.map(hero => {
      return (
        <Grid.Column key={hero.id}>
          <Card>
            <Image src={hero.img} size="medium" />
            <Card.Header as="h3" textAlign="center">
              {hero.localized_name}
            </Card.Header>
            <Card.Content extra>
              <Button basic color="green" onClick={this.handleAdd} hero={hero}>
                Add to my list
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    });
  }

  render() {
    return (
      <Grid centered stackable stretched>
        <Grid.Row>
          <Teams />
        </Grid.Row>
        <Grid.Row>
          {this.props.recommendation.length > 0 ? (
            <Container fluid>
              <Divider horizontal inverted className="red">
                Recommended Heroes
              </Divider>
              <Grid columns={5} centered stretched>
                {this.renderRecommendation()}
              </Grid>
            </Container>
          ) : null}
        </Grid.Row>
        <Grid.Row>
          {this.props.show ? (
            <Button basic color="blue" onClick={this.recommender}>
              Recommend
            </Button>
          ) : null}
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ enemy, hero, recommendation }) {
  let show = false;
  if (enemy.length > 0) {
    show = true;
  }
  return { show, enemy, hero, recommendation };
}

function mapStateToDispatch(dispatch) {
  return bindActionCreators({ recommend, addHero }, dispatch);
}

export default connect(mapStateToProps, mapStateToDispatch)(Recommender);
