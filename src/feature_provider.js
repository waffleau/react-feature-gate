import React from 'react'

export class FeatureProvider extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    features: React.PropTypes.object.isRequired
  }

  static childContextTypes = {
    features: React.PropTypes.object.isRequired
  }

  getChildContext() {
    const {features} = this.props
    return { features }
  }

  render() {
    const {children} = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default FeatureProvider
