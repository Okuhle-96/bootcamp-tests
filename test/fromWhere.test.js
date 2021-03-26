describe("fromWhere function", function(){
    
    it("Should return Bellville IF regNo starts with CY", function(){
        assert.equal(fromWhere("CY"), "Bellville")
    })
    it("Should return Paarl IF regNo starts with CJ", function(){
        assert.equal(fromWhere("CJ"), 'Paarl')
    })
    it("Should return Cape Town IF regNo starts with CA", function(){
        assert.equal(fromWhere("CA"), 'Cape Town')
    })

})