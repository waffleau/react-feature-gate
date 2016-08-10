# React Feature Gate

Simple feature gating components for React.

## Installation
Add the package to your project:

```
npm install --save react-feature-gate
```

## Usage

There are two components that form the feature gating. First, you need to set up the provider at the top level of your component hierarchy:

```
const features = {
  firstFeature: true,
  secondFeature: false
}

<RootComponent>
  <FeatureProvider features={features}>
    <!-- render children here -->
  </FeatureProvider>
</RootComponent>
```

You can then control which features are availble using the `FeatureGate` component. For example, if you set up the provider as defined above:

```
<FeatureGate feature="firstFeature">
  <h1>I will be rendered, because firstFeature is true</h1>
</FeatureGate>

<FeatureGate feature="secondFeature">
  <h1>I will not be rendered, because secondFeature is false</h1>
</FeatureGate>
```

### Example

An example webpage has been included with this project. If you clone the repo, run `npm run example` and visit `http://localhost:8080/example` to view it.
