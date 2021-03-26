describe("isFromBellville function", function(){
    
    it("Should return true if regNo starts with CY", function(){
        assert.equal(isFromBellville("CY"), true)
    })
    it("Should return false if regNo starts with CJ", function(){
        assert.equal(isFromBellville("CJ"), false)
    })
    it("Should return false if regNo contains CN", function(){
        assert.equal(isFromBellville("CN"), false)
    })
    it("Should return false if regNo contains CA", function(){
        assert.equal(isFromBellville("CA"), false)
    })
})