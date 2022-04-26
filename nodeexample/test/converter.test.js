var converter = require('../app/converter');
var expect = require('chai').expect;

// AAA
// test suite
describe("testing converter module", () => {
    // test case
    it("testing add", () => {
        let expected = 60;
        let res = converter.add(40,20);
        expect(res).to.be.equal(expected);
    });

    it("testing sub", () => {
        let expected = 10;
        let res = converter.sub(40,30);
        expect(res).to.be.equal(expected);
    });
});