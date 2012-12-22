(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(exports, module);
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['exports', 'module'], factory);
  }
}(this, function(exports, module) {
  
  function Mechanism() {
  }
  
  Mechanism.prototype.name = 'DIGEST-MD5';
  
  Mechanism.prototype.encode = function(credential) {
  };

  exports = module.exports = Mechanism;
  
}));
