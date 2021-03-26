describe("isWeekday function", function(){
    
    it("Should return true if the DAY is a weekday", function(){
        assert.equal(isWeekday("Monday"), true)
        assert.equal(isWeekday("Tuesday"), true)

    })
    it("Should return false if the DAY is not a weekday", function(){
        assert.equal(isWeekday("Saturday"), false)
    })
})