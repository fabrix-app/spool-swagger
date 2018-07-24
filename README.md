# spool-swagger

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @fabrix-app on Twitter][twitter-image]][twitter-url]

Use Swagger UI in your Fabrix project.

## Dependencies and Compatibilities

- Fabrix
- Waterline
- Express
- Tapestries
- Passport (optional)
- Swagger UI (the `/dist` of the repository will do)
- Swagger 2.0

## Install

```sh
$ npm install --save spool-swagger
```

## Configure

### Main

```js
// config/main.ts
export const main = {
  spools: [
    // ... other spools
    require('@fabrix/spool-swagger').SwaggerSpool
  ]
}
```

### Swagger Config

All these values are explained in the [Swagger Specification](http://swagger.io/specification/).

```js
// config/swagger.js
module.exports = {

  /**
   * The title of the application.
   * @type {String}
   */
  title: 'Project API',
  /**
   * A short description of the application. GFM syntax can be used for rich text representation.
   * @type {String}
   */
  description: 'My APIs',
  /**
   * The Terms of Service for the API.
   * @type {String}
   */
  termsOfService: 'My ToS',
  /**
   * The contact information for the exposed API.
   * @type {Object}
   */
  contact: {
    /**
     * The identifying name of the contact person/organization.
     * @type {String}
     */
    name: 'Matteo Zambon',
    /**
     * The URL pointing to the contact information. MUST be in the format of a URL.
     * @type {String}
     */
    url: 'https://github.com/matteozambon89',
    /**
     * The email address of the contact person/organization. MUST be in the format of an email address.
     * @type {String}
     */
    email: 'matteo@thetophat.org'
  },
  /**
   * The license information for the exposed API.
   * @type {Object}
   */
  license: {
    /**
     * The license name used for the API.
     * @type {String}
     */
    name: 'MIT',
    /**
     * A URL to the license used for the API. MUST be in the format of a URL.
     * @type {String}
     */
    url: 'https://opensource.org/licenses/MIT'
  },
  /**
   * Provides the version of the application API (not to be confused with the specification version).
   * @type {String}
   */
  version: '1.0.0',
  /**
   * The base path on which the API is served, which is relative to the host. If it is not included, the API is served directly under the host. The value MUST start with a leading slash (/). The basePath does not support path templating.
   * @type {String}
   */
  basePath: '/api/v1',
  /**
   * The transfer protocol of the API. Values MUST be from the list: "http", "https", "ws", "wss". If the schemes is not included, the default scheme to be used is the one used to access the Swagger definition itself.
   * @type {Array}
   */
  schemes: ['http'],
  /**
   * A list of MIME types the APIs can consume. This is global to all APIs but can be overridden on specific API calls. Value MUST be as described under Mime Types.
   * @type {Array}
   */
  consumes: ['application/json'],
  /**
   * A list of MIME types the APIs can produce. This is global to all APIs but can be overridden on specific API calls. Value MUST be as described under Mime Types.
   * @type {Array}
   */
  produces: ['application/json'],
  /**
   * The host (name or ip) serving the API. This MUST be the host only and does not include the scheme nor sub-paths. It MAY include a port. If the host is not included, the host serving the documentation is to be used (including the port). The host does not support path templating.
   * @type {String}
   */
  host: '0.0.0.0',
  /**
   * The host port serving the API. This MUST be the port only.
   * @type {Number}
   */
  port: 3000,
  /**
   * Security scheme definitions that can be used across the specification.
   * @type {Object}
   */
  securityDefinitions: {
    apiKey: {
      type: 'apiKey',
      name: 'api_key',
      in: 'header'
    },
    basic: {
      type: 'basic'
    },
    oauth: {
      type: 'oauth2',
      authorizationUrl: 'http://swagger.io/api/oauth/dialog',
      flow: 'implicit',
      scopes: {
        'write:pets': 'modify pets in your account',
        'read:pets': 'read your pets'
      }
    }
  },
  /**
   * A declaration of which security schemes are applied for the API as a whole. The list of values describes alternative security schemes that can be used (that is, there is a logical OR between the security requirements). Individual operations can override this definition.
   * @type {Object}
   */
  security: {
    api_key: [],
    basic: [],
    oauth: [
      'write:pets',
      'read:pets'
    ]
  }
}
```

All the config properties are optional so if you wish let spool-swagger parse these for you simply pass an empty config:

```
// config/swagger.js
module.exports = {
};
```

### Swagger UI

- Get the latest [Swagger UI](https://github.com/swagger-api/swagger-ui)
- Copy the content of `swagger-ui/dist` into `my-project/views/docs`
- Inside `my-project/views/docs` you should see a file `index.html`
- Open `my-project/views/index.html`
- Change line `:41` from `url = "http://petstore.swagger.io/v2/swagger.json";` to `url = "/api/docs";`

## Routes

- `/doc` will return the computed Swagger object as JSON
- `/explorer` will display the Swagger UI

[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-swagger.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-swagger
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-swagger/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-swagger/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-swagger.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-swagger
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/fabrix
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/spool-swagger.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/spool-swagger/coverage


