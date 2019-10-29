const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
const width = 200, heigth = 50;
ctx.width = width + "px";
ctx.heigth = heigth + "px";
canvas.addEventListener('click',function(){
  ctx.clearRect(0,0,width,heigth);
  drawLine();
  drawText();
})
drawLine();

function drawLine() {
  for (let i = 0; i < 6; i++) {
    let beginX = Math.random() * 200;
    let beginY = Math.random() * 50;
    let endX = Math.random() * 200;
    let endY = Math.random() * 50;
    ctx.beginPath();
    ctx.moveTo(beginX, beginY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    ctx.stroke();
  }
}
drawText()
function drawText() {
  var sourceText = ['a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'o', 'p',
    'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z']
    //4个随机不重复的
    let result = [];
    for (let i=0;i<4;i++) {
      const idx = Math.floor(Math.random()*sourceText.length);
      result.push(sourceText [idx]);
      //删除
      sourceText.splice(idx,1);//删除选中的
    }
    console.log('result',result);
    for(let i=0;i<result.length;i++) {
      //画上去
      ctx.font='40px Helvetica';
      ctx.fillStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
      ctx.textBaseLine = 'middle';//top bottom
      let preWidth = width / 4 - 10;
      ctx.fillText(result[i],Math.random()*preWidth + i * preWidth,heigth/2);
    }
}