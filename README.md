# Forge React

<a href="https://github.com/zigurous/forge-react/actions"><img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/zigurous/forge-react/cdn-deploy.yml" /></a>
<a href="https://github.com/zigurous/forge-react/pkgs/npm/forge-react"><img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/zigurous/forge-react" /></a>
<a href="https://github.com/zigurous/forge-react/blob/main/LICENSE"><img alt="GitHub License" src="https://img.shields.io/github/license/zigurous/forge-react" /></a>

The official React implementation of the Forge design system created by [@zigurous](https://github.com/zigurous).

## Installation

### NPM

Set the scoped package registry in your `.npmrc` file:
```bash
registry=https://registry.npmjs.org/
@zigurous:registry=https://npm.pkg.github.com
```

Run one of the following commands in a terminal:
- Install with npm `npm install @zigurous/forge-react`
- Install with yarn `yarn add @zigurous/forge-react`
- Install with pnpm `pnpm add @zigurous/forge-react`

### CDN

Add one of the following links to your HTML:

#### CloudFront

```html
<script src="https://cdn.zigurous.com/forge-react@1.0.0/dist/index.min.js">
```

#### jsDelivr

```html
<script src="https://cdn.jsdelivr.net/gh/zigurous/forge-react@1.0.0/dist/index.min.js">
```

#### Statically

```html
<script src="https://cdn.statically.io/gh/zigurous/forge-react/1.0.0/dist/index.min.js">
```

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
