import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './home.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className="backgroundImage">
        <Container>
          <h1 style={{textAlign:'center'}}>vreau bmw</h1>
        </Container>
      </div>
    );
  }
}
