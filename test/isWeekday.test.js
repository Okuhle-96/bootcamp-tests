describe("isWeekday function", function(){
    
    it("Should return true if the DAY is a weekday", function(){
        assert.equal(isWeekday("Mon"), true)
    })
    it("Should return false if the DAY is not a weekday", function(){
        assert.equal(isWeekday("Sat"), false)
    })
})