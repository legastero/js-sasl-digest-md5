(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('../main'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl-digest-md5'], factory);
  }
}(this, function(sasldigestmd5) {

  describe('sasl-digest-md5', function() {
    
    it('should export Mechanism', function() {
      expect(sasldigestmd5.Mechanism).to.be.a('function');
    });
    
    it('should export Mechanism via module', function() {
      expect(sasldigestmd5).to.equal(sasldigestmd5.Mechanism);
    });
    
  });
  
  return { name: 'test.sasl-digest-md5' };
  
}));
