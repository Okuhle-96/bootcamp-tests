describe('findItemsOver function', function(){
    it('Should find Items and return over the threshold of 20', function(){  
        assert.deepEqual(findItemsOver([
                {'name' : 'apples', 'qty' : 10},
                {'name' : 'pears', 'qty' : 37},
                {'name': 'bananas', 'qty' : 27},
                {'name': 'apples', 'qty' : 3}
            ], 20),

            [{'name': 'pears', 'qty' : 37},
            {'name' : 'bananas', 'qty' : 27}
            ])
    })
    it('Should find and return items over the threshold of 10', function(){  
        assert.deepEqual(findItemsOver([
                {'name' : 'apples', 'qty' : 10},
                {'name' : 'pears', 'qty' : 37},
                {'name': 'bananas', 'qty' : 27},
                {'name': 'apples', 'qty' : 3}
            ], 10),

            [
                {'name' : 'pears', 'qty' : 37},
            {'name' : 'bananas', 'qty' : 27}
            ])
        })
    
        it('Should return an empty array for items over the threshold of 40', function(){  
            assert.deepEqual(findItemsOver([
                    {'name' : 'apples', 'qty' : 10},
                    {'name' : 'pears', 'qty' : 37},
                    {'name': 'bananas', 'qty' : 27},
                    {'name': 'apples', 'qty' : 3}
                ], 40),
    
                [
                   
                ])
            })
})
