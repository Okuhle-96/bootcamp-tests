describe("totalPhoneBill function", function(){
    it("Should return the total Bill of R7.45 if there are 3 smses and 2 calls made", function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), "R" + 7.45)
    })
    it("Should return the total Bill of R4.05 if there is 1 call made and 2 smses", function(){
        assert.equal(totalPhoneBill('call, sms, sms'), "R" + 4.05)
    })
    it("Should return the total Bill of R8.25 if there are 3 calls made", function(){
        assert.equal(totalPhoneBill('call, call, call'), "R" + 8.25)
    })
})