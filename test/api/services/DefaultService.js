'use strict'
const Service = require('fabrix/service')
/**
 * @module DefaultService
 *
 * @description Default Service included with a new Fabrix app
 * @see {@link http://fabrixjs.io/doc/api/services}
 * @this FabrixApp
 */
module.exports = class DefaultService extends Service {

  /**
   * Return some info about this application
   */
  getApplicationInfo() {
    return {
      app: this.pkg.version
    }
  }
}
