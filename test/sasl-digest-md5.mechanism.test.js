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
    
    it('should not be client first', function() {
      expect(mech.clientFirst).to.equal(false);
    });
  });
  
  describe('response to challenge', function() {
    var mech = new Mechanism({
      genNonce: function() { return 'OA6MHXh6VqTrRk'; }
    });
    mech.challenge('realm="elwood.innosoft.com",nonce="OA6MG9tEQGm2hh",qop="auth",algorithm=md5-sess,charset=utf-8');
    
    it('should encode credentials', function() {
      var enc = mech.response({ username: 'chris', password: 'secret', host: 'elwood.innosoft.com', serviceType: 'imap' });
      expect(enc).to.equal('username="chris",realm="elwood.innosoft.com",nonce="OA6MG9tEQGm2hh",cnonce="OA6MHXh6VqTrRk",nc=00000001,qop=auth,digest-uri="imap/elwood.innosoft.com",response=d388dad90d4bbd760a152321f2143af7,charset=utf-8');
    });
  });
  
  return { name: 'test.sasl-plain.mechanism' };
  
}));
