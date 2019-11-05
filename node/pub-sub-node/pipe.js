const fs = require('fs');
fs.readFile('./index.html',(err,data)=>{
  fs.writeFile('./index-copy.html',data,(err,res)=>{
    if(!err){
      console.log('writed!!!');
    }
  })
})
//stream
//100G 读一点 写一点
fs.createReadStream('./music.js')
.pipe(
  fs.WriteStream('./music-copy.js')
)