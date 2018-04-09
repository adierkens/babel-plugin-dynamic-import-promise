# babel-plugin-dynamic-import-promise

Babel plugin to transpile `import()` to Promises

## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-dynamic-import-promise
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["dynamic-import-promise"]
}
```

### Via CLI

```sh
$ babel --plugins dynamic-import-promise script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["dynamic-import-promise"]
});
```
