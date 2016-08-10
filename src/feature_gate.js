import React from 'react'

export class FeatureGate extends React.Component {
  static contextTypes = {
    features: React.PropTypes.object.isRequired
  }

  static propTypes = {
    children: React.PropTypes.any,
    feature: React.PropTypes.string.isRequired
  }

  getFeatures() {
    return this.context.features || {}
  }

  isActive() {
    const {feature} = this.props

    return !!this.getFeatures()[feature]
  }

  render() {
    const {children} = this.props
    return this.isActive() ? children : null
  }
}

export default FeatureGate
