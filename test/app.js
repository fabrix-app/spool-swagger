'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')

const App = {
  pkg: {
    name: require('../package').name + '-test'
  },
  api: require('./api'),
  config: {
    main: {
      spools: [
        // smokesignals.Spool,
        // require('spool-core'),
        require('@fabrix/spool-router').RouterSpool,
        require('@fabrix/spool-express').ExpressSpool,
        require('@fabrix/spool-sequelize').SequelizeSpool,
        require('../dist').SwaggerSpool
      ]
    },
    stores: {
      db: {
        orm: 'sequelize',
        database: 'Sequelize',
        storage: './test/test.sqlite',
        host: '127.0.0.1',
        dialect: 'sqlite',
        migrate: 'drop'
      }
    },
    models: {
      defaultStore: 'db',
      migrate: 'alter'
    },
    web: {
      express: require('express')
    }
  }
}
_.defaultsDeep(App, smokesignals.FailsafeConfig)
module.exports = App
