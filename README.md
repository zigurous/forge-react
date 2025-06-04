# Forge React

<a href="https://github.com/zigurous/forge-react/actions"><img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/zigurous/forge-react/publish.yml" /></a>
<a href="https://github.com/zigurous/forge-react/pkgs/npm/forge-react"><img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/zigurous/forge-react" /></a>
<a href="https://github.com/zigurous/forge-react/blob/main/LICENSE"><img alt="GitHub License" src="https://img.shields.io/github/license/zigurous/forge-react" /></a>

The official React implementation of the Forge design system created by [@zigurous](https://github.com/zigurous).

## Installation

### CDN

Available from any of the following:
- Install with CloudFront `https://cdn.zigurous.com/forge-react@1.2.0/dist/index.min.js`
- Install with jsDelivr `https://cdn.jsdelivr.net/gh/zigurous/forge-react@1.2.0/dist/index.min.js`
- Install with Statically `https://cdn.statically.io/gh/zigurous/forge-react/1.2.0/dist/index.min.js`

Add the script in your HTML file:
```html
<script src="https://cdn.zigurous.com/forge-react@1.2.0/dist/index.min.js">
```

### GitHub Packages

Generate a [personal access token](https://github.com/settings/tokens) in your GitHub account with the `read:packages` scope. GitHub requires an auth token to download packages even if they are public.

Add an `.npmrc` file in the same directory as your `package.json` with the lines below. Replace `${NPM_TOKEN}` with the token you generated in the previous step.
```
registry=https://registry.npmjs.org/
@zigurous:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

Install the package using your preferred package manager:
- Install with npm `npm install @zigurous/forge-react`
- Install with yarn `yarn add @zigurous/forge-react`
- Install with pnpm `pnpm add @zigurous/forge-react`

## Usage

```jsx
import { Button } from '@zigurous/forge-react'
import React from 'react'

export default function Component() {
  return (
    <div>
      <Button>Example</Button>
    </div>
  )
}
```
