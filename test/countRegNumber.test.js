describe('countRegNumber function', function(){
    it('Should return THREE registration numbers', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519, CJ 812328'), 3)
    })
    it('Should return ONE registration numbers', function(){
        assert.equal(countRegNumber('CA 182736'), 1)
    })
    it('Should return TWO registration numbers', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519'), 2)
    })
  
})