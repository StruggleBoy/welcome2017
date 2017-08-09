# 迎新网

[TOC]

## 安装

```
$git clone https://github.com/hongyan2017/welcome2017.git
$cd welcome
$npm install
$npm start
```

网站默认跑在本地的3000端口，即在浏览器通过localhost:3000访问





## 工作

前端页面在**views文件夹**下，后缀为ejs,可以看成和html差不多。

图片，css放在**public文件夹**的**images,stylesheets文件夹**下。



在layout.ejs中有一段<%- body %> 由其他的ejs文件进行填充

| layout.ejs   | 共有的那部分页面 |
| ------------ | -------- |
| index.ejs    | 首页       |
| guide.ejs    | 邮子攻略     |
| training.ejs | 军训专题     |
| activity.ejs | 迎新活动     |
| mien.ejs     | 重邮风采     |
| data.ejs     | 重邮数据     |



CSS最好都放在stylesheets文件夹下，html里外链。

JS可以先内联在HTML里



**注意:**

 **在html里引用资源**

```
<img src='./images/a.png'>
<link href='./stylesheets/a.css'>
<script src='./javascripts/a.js'>
```



**在css里引用资源**

```
<img src='../images/a.png'>
```

注意**路径问题**

## 如何提交

代码完成后

```
$git add .
$git commit
$git push
```

如果github上代码有更新记得git pull到本地



## License

  [MIT](LICENSE)




