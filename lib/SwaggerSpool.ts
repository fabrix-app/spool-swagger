import { Spool } from '@fabrix/fabrix/dist/common'
import { Swagger } from './swagger'

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api from './api/index'

export class SwaggerSpool extends Spool {

  constructor (app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })
  }

  /**
   * Check express4/5 is used, check waterline is used and verify swagger configuration
   */
  async validate () {
    const requiredSpools = ['express']
    const spools = Object.keys(this.app.spools)

    if (!spools.some(v => requiredSpools.indexOf(v) >= 0)) {
      return Promise.reject(new Error(`spool-swagger requires spools: ${ requiredSpools.join(', ') }!`))
    }
    if (!this.app.config.get('swagger')) {
      return Promise.reject(new Error('No configuration found at config.swagger!'))
    }

    return Promise.resolve()
  }

  /**
   * Initialize Swagger
   */
  async configure () {
    Swagger.init(this.app)
    return Promise.resolve()
  }
}

