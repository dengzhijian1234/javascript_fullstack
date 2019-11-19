var ApiImageClassifyClient = require('baidu-aip-sdk').imageClassify;// 图片分类
var fs = require('fs');// 文件模块
var APP_ID = '17798910';
var APP_KEY = 'GlvHZgjFk0Oxhzuqs6dqcayd';
var SECRET_KEY = 'eqxUDIhxLMleBvL2t2jDsN2oMP1gZPRD';
// 内存 -> I/O
var image = fs.readFileSync('car1.jpg').toString("base64");//同步

var client = new ApiImageClassifyClient(APP_ID, APP_KEY, SECRET_KEY);

client.carDetect(image)
.then(function(result) {
  console.log(result);
})
.catch(function(err) {
  console.log(err);
})
console.log(image);