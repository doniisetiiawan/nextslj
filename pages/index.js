/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import 'es6-promise';
import fetch from 'isomorphic-fetch';

class App extends Component {
  static defaultProps = {
    gists: [],
  };

  static propTypes = {
    gists: PropTypes.array,
  };

  static async getInitialProps() {
    const url = 'https://api.github.com/users/gaearon/gists';
    const response = await fetch(url);
    const gists = await response.json();

    return {
      gists,
    };
  }

  render() {
    const { gists } = this.props;

    return (
      <ul>
        {gists.map(gist => (
          <li key={gist.id}>{gist.description}</li>
        ))}
      </ul>
    );
  }
}

export default App;
