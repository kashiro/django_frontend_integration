(function() {
  describe('Test App1', function(){
    var instance;

    describe('#bow', function(){
      it('There is a app with id 1', function(){
        expect(app1.bow()).toEqual('This is App1.');
      }); 
    });
  });
})();
