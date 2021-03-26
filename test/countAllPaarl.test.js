describe('countAllPaarl function', function(){
    it("Should return 2 registration numbers from Paarl", function(){
        assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123', "CJ") , 2)
    })
    it("Should return 1 registration number from Paarl", function(){
        assert.equal(countAllPaarl('CK 345, CJ 123', "CJ") , 1)
    })
    it("Should return 0 registration numbers from Paarl", function(){
        assert.equal(countAllPaarl('CK 345', "CJ") , 0)
    })
})