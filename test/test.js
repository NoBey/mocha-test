var assert = require('assert');

  //
  // describe('#indexOf()', function() {
  //   it('should return -1 when the value is not present', function() {
  //     assert.equal(1,1);
  //   });
  // });

  // describe('a suite of tests', function() {
  //   this.timeout(500);
  //
  //   it('should take less than 500ms', function(done){
  //     setTimeout(done, 300);
  //   });
  //
  //   it('should take less than 500ms as well', function(done){
  //     setTimeout(done, 250);
  //   });
  //
  // });

  describe('a suite of tests', function(done) {
      this.timeout(3000); // A very long environment setup.
      setTimeout(done, 2500);
  });
