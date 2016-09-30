(function(exports) {
  'use strict';

  function App(id) {
    this.id = id;
  }
  App.prototype.bow = function() {
    if (this.id) {
      return 'This is App' + this.id + '.';
    }
    return 'This does not have id.';
  };

  exports.App = App;
})(window);
