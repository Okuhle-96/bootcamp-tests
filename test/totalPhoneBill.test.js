describe("totalPhoneBill function", function(){
    it("Should return the total Bill of R7.45", function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), "R" + 7.45)
    })
    it("Should return the total Bill of R4.05", function(){
        assert.equal(totalPhoneBill('call, sms, sms'), "R" + 4.05)
    })
    it("Should return the total Bill of R8.25", function(){
        assert.equal(totalPhoneBill('call, call, call'), "R" + 8.25)
    })
})