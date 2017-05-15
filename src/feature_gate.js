import { PropTypes } from 'react'

export function FeatureGate(props, context) {
  const {children, feature} = props
  const features = context.features || {}

  return features[feature] ? children : null
}

FeatureGate.contextTypes = {
  features: PropTypes.object.isRequired
}

FeatureGate.propTypes = {
  children: PropTypes.any,
  feature: PropTypes.string.isRequired
}

export default FeatureGate
