describe('countRegNumber function', function(){
    it('Should count and return a total of THREE registration numbers', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519, CJ 812328'), 3)
    })
    it('Should count and return a total of ONE registration numbers', function(){
        assert.equal(countRegNumber('CA 182736'), 1)
    })
    it('Should count and return a total of return TWO registration numbers', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519'), 2)
    })
  
})