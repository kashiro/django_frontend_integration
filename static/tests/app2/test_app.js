(function() {
  describe('Test App2', function(){
    var instance;

    describe('#bow', function(){
      it('There is a app with id 2', function(){
        expect(app2.bow()).toEqual('This is App2.');
      }); 
    });
  });
})();
