describe("yearsAgo function", function(){
    it("Should return 25 years", function(){
        assert.equal(yearsAgo(1996), 25)
    })
    it("Should return 45 years", function(){
        assert.equal(yearsAgo(1976), 45)
    })
})