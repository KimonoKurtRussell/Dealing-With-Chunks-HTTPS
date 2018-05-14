function getAndPrintHTML (options) {
  var https = require('https');
    https.get(options, function(response) {
      var buffer = " ";
      response.setEncoding("utf8");
      response.on("data", function(data) {
        console.log("The Data is:", data)
        buffer += data;
      });
    });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);



// //In another file, create a third function, getAndPrintHTML,
// which will look very similar to your second function,
// // but accepts a paramater, options,
// which is an object that contains values for the host and path,
// exactly like requestOptions. Reuse whatever code you need from part 2
// - we're still getting and printing the HTML



