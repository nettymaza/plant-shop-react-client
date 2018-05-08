# Plantitas Garden Info Client ReactJS Project

This project is intended to help familiarize your way through the ReactJs framework, component creating, rendering and importing/exporting. This app, still in progress is a simple garden almanac which contains plant descriptions, growing instructions, site and soil requirements.

## Installation

React is available as the react package on npm. It is also available on a CDN.

To install run the this from the commandline:

``npm install --save react``


## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:

```sh
npm install --save react-router
```

Alternatively you may use `yarn`:

```sh
yarn add react-router
```

This works for any library, not just `react-router`.

## Importing a Component

This project setup supports ES6 modules thanks to Babel.<br>
While you can still use `require()` and `module.exports`, we encourage you to use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html) instead.

For example:

### `Button.js`

```js
import React, { Component } from 'react';

class Button extends Component {
  render() {
    // ...
  }
}

export default Button; // Don’t forget to use export default!
```

## Running Application

To run this application run `yarn start` from the command line, browser window will automatically open or visit http://localhost:3000/.

## Contributing

The app is available as open source under the terms of the <a href="https://opensource.org/licenses/MIT">MIT License</a>

Bug reports and pull requests are welcome on GitHub at https://github.com/nettymaza/plant-shop-react-client.

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the <a href="https://www.contributor-covenant.org/">Contributor Covenant</a> code of conduct.

## License
This App is MIT licensed, it is available as open source under the terms of the <a href="https://opensource.org/licenses/MIT">MIT License</a>
