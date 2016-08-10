import React from 'react'
import {mount} from 'enzyme'
import randomString from 'random-string'

import {FeatureGate} from './feature_gate'

describe('<FeatureGate />', () => {

  const cxt = {}

  function createComponent(features) {
    return mount(cxt.component, {
      context: { features }
    })
  }

  beforeEach(() => {
    cxt.featureName = randomString()

    cxt.component = (
      <FeatureGate feature={cxt.featureName}>
        <div id="child" />
      </FeatureGate>
    )
  })

  it('renders child if the feature is enabled', () => {
    cxt.subject = createComponent({ [cxt.featureName]: true })

    expect(cxt.subject.find('#child')).to.have.length(1)
  })

  it('does not render child if feature is disabled', () => {
    cxt.subject = createComponent({ [cxt.featureName]: false })

    expect(cxt.subject.find('#child')).to.have.length(0)
  })

  it('does not render child if feature not found', () => {
    cxt.subject = createComponent({})

    expect(cxt.subject.find('#child')).to.have.length(0)
  })

})
