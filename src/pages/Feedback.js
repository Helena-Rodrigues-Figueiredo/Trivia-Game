import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getAvatar from '../services/fetchGravatar';

class Feedback extends Component {
  render() {
    const { email, name, score } = this.props;
    const gravatarPic = getAvatar(email);
    return (
      <header>
        <img
          src={ gravatarPic }
          alt="profile"
          data-testid="header-profile-picture"
        />
        <h1 data-testid="header-player-name">{ name }</h1>
        <h2 data-testid="header-score">{ `Placar: ${score}` }</h2>
      </header>
    );
  }
}

Feedback.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.playerReducer.player.gravatarEmail,
  name: state.playerReducer.player.name,
  score: state.playerReducer.player.score,
});

export default connect(mapStateToProps)(Feedback);