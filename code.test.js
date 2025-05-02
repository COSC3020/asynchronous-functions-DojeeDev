const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSum =
    jsc.forall("array nat","nat", function(arr, key) {
        return JSON.stringify(count(arr, key)) == JSON.stringify(syncCount(arr, key));
    });

jsc.assert(testSum);

function syncCount(a, k) {
  var m = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] == k) { m++; }
  }
  return m;
}
