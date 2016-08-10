import React from 'react'
import {mount} from 'enzyme'
import randomString from 'random-string'

import {FeatureGate} from './feature_gate'
import {FeatureProvider} from './feature_provider'

// This isn't actually unit test, but it's much more useful
describe('<FeatureProvider />', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.featureOne = randomString()
    cxt.featureTwo = randomString()

    cxt.features = {
      [cxt.featureOne]: false,
      [cxt.featureTwo]: true
    }

    cxt.subject = mount(
      <FeatureProvider features={cxt.features}>
        <FeatureGate feature={cxt.featureOne}>
          <div id={cxt.featureOne} />
        </FeatureGate>
        <FeatureGate feature={cxt.featureTwo}>
          <div id={cxt.featureTwo} />
        </FeatureGate>
      </FeatureProvider>
    )
  })

  it('renders the provider', () => {
    expect(cxt.subject).to.have.length(1)
  })

  it('renders allowed feature gate', () => {
    const gateNode = cxt.subject.find(`#${cxt.featureTwo}`)

    expect(gateNode).to.have.length(1)
  })

  it('does not render disallowed feature gate', () => {
    const gateNode = cxt.subject.find(`#${cxt.featureOne}`)

    expect(gateNode).to.have.length(0)
  })

})
