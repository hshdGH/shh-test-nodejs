// 引入js文件
var bar = require("./bar");
var logic = require("./logic");
require("./css/css01.css");
bar.info("100 + 200 = " + logic.add(100, 200));
