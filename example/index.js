import React from 'react'
import ReactDOM from 'react-dom'

import {
  FeatureGate,
  FeatureProvider
} from '../src'

const styles = {
  label: {
    display: 'block',
    padding: '.5rem 0'
  },
  input: {
    marginRight: '.5rem'
  },
  listItem: {
    padding: '.5rem'
  }
}

class Example extends React.Component {
  state = {
    feature1: true,
    feature2: false
  }

  getFeature(name) {
    return this.getFeatures()[name]
  }

  getFeatures() {
    return this.state
  }

  toggleFeature(event) {
    const {checked, name} = event.target

    this.setState({
      ...this.state,
      [name]: checked
    })
  }

  render() {
    return (
      <div>
        <h1>{'Toggle features here'}</h1>
        <label htmlFor="feature1" style={styles.label}>
          <input
            type="checkbox"
            name="feature1"
            checked={this.getFeature('feature1')}
            style={styles.input}
            onChange={this.toggleFeature.bind(this)} />
            {'Feature 1'}
        </label>
        <label htmlFor="feature2" style={styles.label}>
          <input
            type="checkbox"
            name="feature2"
            checked={this.getFeature('feature2')}
            style={styles.input}
            onChange={this.toggleFeature.bind(this)} />
            {'Feature 2'}
        </label>

        <h1>{'Active features appear below'}</h1>
        <FeatureProvider features={this.getFeatures()}>
          <ul>
            <FeatureGate feature="feature1">
              <li style={styles.listItem}>{'Feature 1 active!'}</li>
            </FeatureGate>
            <FeatureGate feature="feature2">
              <li style={styles.listItem}>{'Feature 2 active!'}</li>
            </FeatureGate>
          </ul>
        </FeatureProvider>
      </div>
    )
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
)
