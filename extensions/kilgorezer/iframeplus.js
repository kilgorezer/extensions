(function (Scratch) {
  "use strict";
  Scratch.fetch(
    "https://raw.githubusercontent.com/kilgorezer/turbowarpIframeplus/main/iframeplus.js",
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      new Scratch.constructor.constructor(data)();
    });
})(Scratch);
