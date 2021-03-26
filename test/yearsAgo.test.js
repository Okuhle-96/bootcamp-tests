describe("yearsAgo function", function(){
    it("Should return the difference of 25 years between  2021 and 1996", function(){
        assert.equal(yearsAgo(1996), 25)
    })
    it("Should return the difference of 45 years between 2021 and 1976", function(){
        assert.equal(yearsAgo(1976), 45)
    })
})