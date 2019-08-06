const pkg = require('../dist')
const assert = require('assert')
describe('Single Object Tests', function () {
  describe('Edge Cases', function () {
    it('should return a valid empty schema', function () {
      assert.notStrictEqual(pkg.generateSchema({}),{fields:[]})
    })
    it('should throw a type error', function () {
      assert.throws(()=>{pkg.generateSchema(5)}, 'TypeError')
    })
    it('should throw a type error', function () {
      assert.throws(()=>{pkg.generateSchema("foobar")}, 'TypeError')
    })
  })
})
