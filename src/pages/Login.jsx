import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  state = {
    name: '',
    email: '',
    isDisabled: true,
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.handleButton);
  };

  handleButton = () => {
    const { name, email } = this.state;
    if (name.length !== 0 && email.length !== 0) {
      return this.setState({ isDisabled: false });
    }
    return this.setState({ isDisabled: true });
  }

  render() {
    const { isDisabled } = this.state;
    const { handleChange } = this;
    const { history } = this.props;
    return (
      <LoginForm
        handleChange={ handleChange }
        isDisabled={ isDisabled }
        history={ history }
      />
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;