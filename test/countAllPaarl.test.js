describe('countAllPaarl function', function(){
    it("Should return the total number of registrations that starts with CJ", function(){
        assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123', "CJ") , 2)
    })
    it("Should return the total number of registrations that starts with CJ", function(){
        assert.equal(countAllPaarl('CK 345, CJ 123', "CJ") , 1)
    })
    it("Should return the total number of registrations that include J", function(){
        assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123', "J") , 2)
    })
})