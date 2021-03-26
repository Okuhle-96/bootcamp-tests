describe("countAllFromTown function", function(){
    
        it("Should return THREE registration numbers that are from town with CL", function(){
            assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', "CL"),3)
        })
        it("Should return ONE registration NUMBER that is from a town with CJ", function(){
            assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', "CJ"),1)
        })
        it("Should return ONE registration NUMBER that is from a town with CY", function(){
            assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', "CY"),1)
        })
        it("Should return ZERO registration NUMBER that is NOT from a town and is not included in the string list (CF)", function(){
            assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', "CF"),0)
        })
    
})