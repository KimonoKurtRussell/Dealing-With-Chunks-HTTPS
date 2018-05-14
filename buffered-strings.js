function getAndPrintHTML () {
  var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  https.get(requestOptions, function(response) {
    var buffer = "";
    response.setEncoding("utf8");
    response.on("data", function(data) {
      buffer += data;
      console.log(buffer);
    });
    response.on("end", function() {
     console.log("Response stream complete.")
    });
  });
}

getAndPrintHTML();