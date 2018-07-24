
'use strict'

const expect = require('chai').expect

describe('Fabrix App', () => {
  it('should boot', () => {
    expect(global.app.started).to.exist
    expect(global.app.started).to.be.true
    expect(global.app.stopped).to.exist
    expect(global.app.stopped).to.be.false
  })
})
