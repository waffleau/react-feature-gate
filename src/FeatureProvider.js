import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class FeatureProvider extends PureComponent {
  static childContextTypes = {
    features: PropTypes.object.isRequired,
  };

  static propTypes = {
    children: PropTypes.any,
    features: PropTypes.object.isRequired,
  };

  getChildContext() {
    const { features } = this.props;
    return { features };
  }

  render() {
    const { children } = this.props;
    return React.createElement('div', {}, children);
  }
}

export default FeatureProvider;
