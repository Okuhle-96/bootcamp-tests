describe("countAllFromTown function", function(){
    
        it("Should return THREE registration numbers that are from town(CL)", function(){
            assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', "CL"),3)
        })
        it("Should return ONE registration NUMBER that is from a town(CJ)", function(){
            assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', "CJ"),1)
        })
        it("Should return ONE registration NUMBER that is from a town (CY)", function(){
            assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', "CY"),1)
        })
        it("Should return ZERO registration NUMBERS if registration numbers are NOT not included in the string (CF)", function(){
            assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', "CF"),0)
        })
    
})