import React, { Component } from 'react';
import MainComponent from './MainComponent'
export class Home extends Component {
  displayName = Home.name

    render() {
    return (
        <div>
            <MainComponent auth={this.props.auth}/>
        </div>
    );
  }
}
