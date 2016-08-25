(function() {
  describe('Test App', function(){
    var instance;

    describe('#bow', function(){
      describe('if Instance have id', function(){
        it('return description with id', function(){
          instance = new App(1); 
          expect(instance.bow()).toEqual('This is App1.');
        }); 
      });

      describe('if Instance do not have id', function(){
        it('return null', function(){
          instance = new App(); 
          expect(instance.bow()).toBe(null);
        }); 
      });     
    });
  });
})();
