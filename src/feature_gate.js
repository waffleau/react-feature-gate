import React from 'react'

export class FeatureGate extends React.Component {
  static contextTypes = {
    features: React.PropTypes.object.isRequired
  }

  static propTypes = {
    children: React.PropTypes.any,
    feature: React.PropTypes.string.isRequired
  }

  isActive() {
    const {features} = this.context
    const {feature} = this.props

    return !!features[feature]
  }

  render() {
    const {children} = this.props
    return this.isActive() ? children : null
  }
}

export default FeatureGate
