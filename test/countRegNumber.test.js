describe('countRegNumber function', function(){
    it('Should return the number of registration numbers in a string separated by a comma', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519, CJ 812328', ',' ), 3)
    })
    it('Should return the number of registration numbers in a string that contain C', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519, CJ 812328', 'C' ), 3)
    })
    it('Should return the number of registration numbers in a string', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519', ',' ), 2)
    })
  
})