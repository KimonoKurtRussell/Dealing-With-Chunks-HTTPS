function getHTML (options, callback) {
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
function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML())



// In another file, create a fourth function, getHTML.
// This function will look and behave almost the same as your third function
// except:
// The function definition will now accept a callback as a second parameter.
// The function body will invoke (call) the callback when the data is fully received,
// in place of the original console.log.
// To simplify things for the moment, the callback function printHTML
// will be defined below. You just need to ensure it gets passed
//  as an argument when you call getHTML.