(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('sasl-digest-md5'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl-digest-md5'], factory);
  }
}(this, function(sasldigestmd5) {

  describe('sasl-plain', function() {
    
    it('should export Mechanism', function() {
      expect(sasldigestmd5.Mechanism).to.be.a('function');
    });
    
    it('should export Mechanism via module', function() {
      expect(sasldigestmd5).to.equal(sasldigestmd5.Mechanism);
    });
    
  });
  
  return { name: 'test.sasl-digest-md5' };
  
}));
