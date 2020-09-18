# jsffmpeg

### 需先安装ffmpeg环境

### 先运行server端,cd server && npm i && npm start

### 再运行ffmpeg

<code>
  ffmpeg -rtsp_transport tcp -i "你的rtsp地址" -q 0 -f mpegts -codec:v mpeg1video -s 1366x768 http://127.0.0.1:8081/supersecret
</code>

### 然后运行前端查看效果，cd front-end && npm i && npm start，打开地址http://localhost:8000

### 前端主要就两个文件/front-end/public/static/jsmpeg.min.js、/front-end/public/static/view-stream.html

### 参考https://my.oschina.net/chengpengvb/blog/1832469