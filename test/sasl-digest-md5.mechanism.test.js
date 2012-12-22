(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('sasl-digest-md5/lib/mechanism'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl-digest-md5/lib/mechanism'], factory);
  }
}(this, function(Mechanism) {

  describe('Mechanism', function() {
    var mech = new Mechanism();
    
    it('should be named DIGEST-MD5', function() {
      expect(mech.name).to.equal('DIGEST-MD5');
    });
    
    it.skip('should encode credentials', function() {
      expect(mech.encode({ username: 'johndoe', password: 'secret' })).to.equal('\u0000johndoe\u0000secret');
    });
    
    it.skip('should encode credentials with authzid', function() {
      expect(mech.encode({ username: 'Kurt', password: 'xipj3plmq', authzid: 'Ursel' })).to.equal('Ursel\u0000Kurt\u0000xipj3plmq');
    });
    
  });
  
  return { name: 'test.sasl-plain.mechanism' };
  
}));
