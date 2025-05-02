var async = require("async");

//sources: queried chat gpt what function in the async library would 
//be useful for counting matches in an array and it suggested "each". Then I read the docs for the rest.
function count(a, k) {
  var m = 0;

  async.each(
    a,
    (v, callback) => {
      if (v == k) { m++; }
      callback();
    }
  );

  return m;
}
