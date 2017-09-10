var low = require('lowlight/lib/core');
var java = require('highlight.js/lib/languages/java');
var rehype = require('rehype');

low.registerLanguage('java', java);
var ast = low.highlight('java','public static int foo(A a, int b) { return b; }').value;
var html = rehype().stringify({type:'root',children:ast}).toString();
console.log(html);
