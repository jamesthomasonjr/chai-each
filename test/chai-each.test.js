const regularArray = [1,2,3,4,5];
const nestedArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

describe("chai-each", () => {
    it("should succeed correctly", () => {
        expect(regularArray).to.each.be.at.most(10);
    });

    it("should fail correctly", () => {
        const assertion = () => expect(regularArray).to.each.be.at.least(10);

        expect(assertion).to.throw("expected 1 to be at least 10");
    });

    it.skip("@TODO in v2: should succeed correctly with nested arrays", () => {
        expect(nestedArray).to.each.be.an('array').with.each.at.most(10);
    });

    it.skip("@TODO in v2: should fail correctly with nested arrays", () => {
        const assertion = () => expect(nestedArray).to.each.be.an('array').with.each.at.least(10);

        expect(assertion).to.throw("expected 1 to be at least 10");
    });
});
