'use strict'

const Model = require('fabrix/model')

/**
 * Pet
 *
 * @description A Pet model
 */
module.exports = class Role extends Model {

  static config() {
    return {
      identity: 'role'
    }
  }

  static schema() {
    return {
      name: {
        type: 'string'
      },
      user: {
        model: 'User'
      }
    }
  }

}
