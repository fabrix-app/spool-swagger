'use strict'

const Model = require('fabrix/model')

/**
 * User
 *
 * @description A User model
 */
module.exports = class User extends Model {
  static config() {
    return {
      identity: 'user'
    }
  }

  static schema() {
    return {
      name: 'string',
      roles: {
        collection: 'Role',
        via: 'user'
      }
    }
  }
}
