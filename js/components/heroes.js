import React, { Component } from 'react';
import {
  Container,
  Sidebar,
  Card,
  Button,
  Image,
  Grid
} from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHeroes, addHero, addEnemy } from '../actions';

class Heroes extends Component {
  state = { heros: [], heroAvail: 5, enemyAvail: 5, availability: true };
  componentWillReceiveProps(props) {
    console.log(props.heros);
    if (props.heros.type === 'LIST') {
      this.setState({ heros: props.heros.payload });
    } else if (props.heros.type === 'ADD') {
      const { heros } = this.state;
      heros.push(props.heros.payload);
      this.setState({ heros });
    } else {
      const { heros } = this.state;
      var removeIndex = heros
        .map(function(item) {
          return item.id;
        })
        .indexOf(props.heros.payload.id);
      heros.splice(removeIndex, 1);
      this.setState({ heros });
    }
  }

  componentDidMount() {
    this.props.getHeroes();
  }

  handleHero = (event, { data }) => {
    this.props.addHero(data);
    let { heroAvail } = this.state;
    heroAvail -= 1;
    this.setState({ heroAvail });
    console.log(this.state);
    if (this.state.heros.length < 107) {
      this.setState({ availability: false });
    }
  };

  handleEnemy = (event, { data }) => {
    this.props.addEnemy(data);
    let { enemyAvail } = this.state;
    enemyAvail -= 1;
    this.setState({ enemyAvail });
    console.log(this.state);
    if (this.state.heros.length < 107) {
      this.setState({ availability: false });
    }
  };

  render() {
    return (
      <Container
        style={{
          overflowY: 'scroll',
          maxHeight: '90vh',
          padding: 10
        }}
      >
        <Grid columns={2} centered>
          {this.state.heros.map(hero => {
            return (
              <Grid.Column key={hero.id}>
                <Card>
                  {!this.state.availability ? null : (
                    <Card.Content extra>
                      {this.state.heroAvail === 0 ? null : (
                        <Button
                          basic
                          color="green"
                          onClick={this.handleHero}
                          data={hero}
                        >
                          Hero
                        </Button>
                      )}
                    </Card.Content>
                  )}
                  <Image size="medium" src={hero.img} />
                  <Card.Header as="h3" textAlign="center">
                    {hero.localized_name}
                  </Card.Header>

                  {!this.state.availability ? null : (
                    <Card.Content extra>
                      {this.state.enemyAvail === 0 ? null : (
                        <Button
                          basic
                          color="red"
                          onClick={this.handleEnemy}
                          data={hero}
                        >
                          Enemy
                        </Button>
                      )}
                    </Card.Content>
                  )}
                </Card>
              </Grid.Column>
            );
          })}
        </Grid>
      </Container>
    );
  }
}

function mapStateToProps({ heros: { res } }) {
  return {
    heros: res
  };
}

function mapStateToDispatch(dispatch) {
  return bindActionCreators({ getHeroes, addHero, addEnemy }, dispatch);
}

export default connect(mapStateToProps, mapStateToDispatch)(Heroes);