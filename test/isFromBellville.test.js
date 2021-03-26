describe("isFromBellville function", function(){
    
    it("Should return true if regNo is from Bellvile", function(){
        assert.equal(isFromBellville("CY"), true)
    })
    it("Should return false if regNo is not from Bellvile", function(){
        assert.equal(isFromBellville("CJ"), false)
    })
    it("Should return false if regNo is not from Bellvile", function(){
        assert.equal(isFromBellville("CN"), false)
    })
    it("Should return false if regNo is not from Bellvile", function(){
        assert.equal(isFromBellville("CA"), false)
    })
})