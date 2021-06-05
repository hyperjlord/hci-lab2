# 如何运行

## 1. 远程运行

直接访问http://47.115.33.176:5000/index.html

## 2本地运行

### 启动后端

**由于后端要全部上传的话图片资源太多，canvas难以上传，所以后端我只上传了我修改过的rest_server.py.**

后端运行方式很简单，把老师在课程网站上所给的lab2-image-retrieval压缩包解压，运行一下search.py，把lab2-image-retrieval/server里的rest-server.py替换成我上传的rest-server.py,再把lab2-image-retrieval/server/database/dataset下的所有图片连同dataset目录本身移动到static目录下。其他不需要改变，启动rest-server.py即可。

### 启动前端

解压压缩包后进入lab2-frontend目录，依次执行`npm install`和`npm run serve`，然后访问`http://localhost:8080`。此时就可以正常使用项目了

