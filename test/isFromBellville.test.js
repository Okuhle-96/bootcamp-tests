describe("isFromBellville function", function(){
    
    it("Should return true if location is from Bellvile", function(){
        assert.equal(isFromBellville("CY"), true)
    })
    it("Should return false if location is not from Bellvile", function(){
        assert.equal(isFromBellville("CJ"), false)
    })
})