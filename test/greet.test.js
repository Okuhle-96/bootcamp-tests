describe('Greet function', function(){
    it('I should greet Okuhle', function(){
        assert.equal('Hello, Okuhle', greet('Okuhle'))
    })
    it('Should greet even when its written in CAPSLOCK', function(){
        assert.equal('Hello, JABULANI', greet('JABULANI'))
    })
})