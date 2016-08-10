import React from 'react'

export function FeatureGate(props, context) {
  const {children, feature} = props
  const features = context.features || {}

  return features[feature] ? children : null
}

FeatureGate.contextTypes = {
  features: React.PropTypes.object.isRequired
}

FeatureGate.propTypes = {
  children: React.PropTypes.any,
  feature: React.PropTypes.string.isRequired
}

export default FeatureGate
