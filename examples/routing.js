// Generated by CoffeeScript 1.9.3
(function() {
  var api, slumber;

  process.stdout.write('\u001B[2J\u001B[0;0f');

  slumber = require('..');

  api = new slumber.API('http://api.example.com/v1/', {
    auth: ['demo', 'demo']
  }, function() {
    var entry, i, len, ref, results;
    ref = ["api.base_url", "api('note').base_url", "api('note')(42).base_url", "api('note')(42)('comment').base_url", "api('note')(42)('comment')(12345).base_url", "api('note/42/comment/12345').base_url"];
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      entry = ref[i];
      results.push(console.log('-- ', entry, eval(entry)));
    }
    return results;
  });

}).call(this);
