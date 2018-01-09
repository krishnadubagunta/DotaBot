import React, { Component } from 'react';
import { Grid, Container, Segment, Rail } from 'semantic-ui-react';
import Heroes from './heroes';

export default class Main extends Component {
  render() {
    return (
      <Grid columns={2} centered>
        <Grid.Column>
          <Segment style={{ height: '90vh', width: '70vw' }}>
            <Rail attached position="left">
              <Heroes />
            </Rail>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
