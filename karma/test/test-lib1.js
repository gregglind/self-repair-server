var lib1 = require("../src/lib1");

var expect = require("chai").expect;

describe("A test suite", function() {
   beforeEach(function() { });
   afterEach(function() { });
   it('is good', function() { expect(lib1.a).to.be.valid; });
});
