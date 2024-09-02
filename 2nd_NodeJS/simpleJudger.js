const http = require('http');
const port = 3000;
const fs = require('fs');
const filePath = "./output.py";
const spawn = require('child_process').spawn;

var resData = '';

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/plain");
    if(req.url === '/code' && req.method === 'POST'){
        //data 이벤트 발생할 때마다, resData 에 해당 내용 투입.
        req.on('data', (chunk) => {
            resData += chunk;
        });
        req.on('end', () => {
            fs.writeFile(filePath, resData, (err) => {
                if (err){
                    console.log("에러 발생!: ", err);
                } else {
                    console.log("파일이 성공적으로 추가되었습니다.");
                    const process = spawn('python3', ['output.py']);
                    process.stdout.on('data', (data) => {
                        console.log("파이썬 명령어 실행!");
                        res.write(data);
                        res.end();
                    })
                    process.stderr.on('err', (err) => {
                        console.log(err);
                    })
                }
            });
        });

        
    } else{
        res.write("Hello World!!");
        res.end();
    }
    
});

server.listen(port, () => {
    console.log('server open!');
})