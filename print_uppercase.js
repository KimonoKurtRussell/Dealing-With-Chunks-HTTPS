var getHTML = require('./https-functions');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};
var x = function printUpperCase (html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, x);