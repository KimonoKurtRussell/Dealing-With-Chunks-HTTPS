var getHTML = require('./https-functions');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};
var x = function printUpperCase (html) {
  console.log(Array.from(html).reverse().join(""));
}

getHTML(requestOptions, x);

