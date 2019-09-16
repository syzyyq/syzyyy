# syzyyy
# 学习总结文档
# VsCode
## VsCode 简介
VSCode是微软出的一款轻量级代码编辑器，免费而且功能强大，对JavaScript和NodeJS的支持非常好，自带很多功能，例如代码格式化，代码智能提示补全、Emmet插件等。VSCode推荐一个项目以文件夹的方式打开。
# 快捷键
### Ctrl+Shift+N	新窗口/实例
### Ctrl+Shift+W	关闭窗口/实例
### Ctrl+,	打开用户设置
### Ctrl+K+S	键盘快捷键
### Ctrl + Shift + E 资源管理器
### Ctrl + Shift + F 搜索
### Ctrl + Shift + G 源代码管理器
### Ctrl + Shift + D 调试
### Ctrl + Shift + X 插件扩展
### F1 或 Ctrl+ Shift + p 打开命令面板
### Shift + Alt + F 代码格式化
### Ctrl+ F 查找
###Ctrl+ H 查找替换
### Ctrl+ N 新建文件
### Ctrl+ S 保存
### Ctrl+P	快速打开（文件）

# MarkDown
## MarkDown简介
 Markdown具有一系列衍生版本，用于扩展Markdown的功能(如表格、脚注、内嵌HTML等等)，这些功能原初的Markdown尚不具备，它们能让Markdown转换成更多的格式，例如LaTeX，Docbook。Markdown增强版中比较有名的有Markdown Extra、MultiMarkdown、 Maruku等。这些衍生版本要么基于工具，如Pandoc;要么基于网站，如GitHub和Wikipedia，在语法上基本兼容，但在一些语法和渲染效果上有改动。
 ## MarkDown语法
 Markdown是一种纯文本格式的标记语言。通过简单的标记语法，它可以使普通文本内容具有一定的格式。
 # 标题
    # 一级标题
    ## 二级标题
    ### 三级标题
    #### 四级标题
    ##### 五级标题
    ###### 六级标题
    
 - **文本加粗**

 - *斜体*

 - <u>下划线</u>

 - ~~删除线~~

 - 下面是一条分割线
 ***

 ## 引用文本
> 这是介绍MarkDown引用文本语法的文字
>>>>这是介绍MarkDown引用文本语法的文字

## 符号列表或者数字列表

* 圆点符号列表
1. 数字序号列表
2. 数字序号列表

## 高亮
 ==文本高亮==

* ## 插入图片

 ![](http://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/f6/a3/f3/f6a3f3b8-8243-05ad-41f2-2fe69ae9d0d5/source/512x512bb.jpg)

 * ## 插入链接
 * [链接名](链接地址 "链接title")

 * ## 插入表格

  | 帐户类型 | 免费帐户 | 标准帐户 | 高级帐户 |
  | --- | --- | --- | --- |
  | 帐户流量 | 60M | 1GB | 10GB |
  | 设备数目 | 2台 | 无限制 | 无限制 |
  | 当前价格 | 免费 | ￥8.17/月 | ￥12.33/月|

  ## Git & GitHub 
  ### Git 简介
   Git是什么？
   
   Git 是 Linux 的创始人 Linus Torvalds 开源的一款分布式版本控制系统，以帮助开发者更好的对项目进行版本管理。每一个优秀的开发者在进行项目开发时都会第一时间给自己的项目加上 Git，以便能更好的追踪代码修改，进行版本回溯等操作。在多人协作的开发过程中，Git 更是必不可少的。

 * ### git基本原理
git版本管理工具，有3个工作区：

1. 工作目录 
2. 暂存区-----存放工作中更改的文件，避免项目代码丢失。 
3. 代码仓库-----当开发功能足够成为一个版本时，提交到仓库。其实就是将暂存区中代码复制一份存储到代码仓库中。

### git bash 命令行模式的基本特点
  * 简洁，迅速，高效 
  * git bash 基础命令 

# GitHub 简介
### GitHub是什么？
* Github是一个基于it的代码托管平台，Github 由Chris Wanstrath, PJ Hyett 与Tom Preston-Werner三位开发者在2008年4月创办。这个星球上最流行的开源托管服务。目前已托管上百万的git项目，很多知名开源项目迁入GitHub，比如Ruby on Rails、jQuery、Ruby、Erlang/OTP；近年流行的开源库往往在GitHub首发，例如：BootStrap、Node.js、CoffeScript等。
---
#### 注册GitHub账号步骤：
1. 首先我们登陆GitHub官网按照提示一步一步申请免费的账号，并且初始化仓库。
2. 然后打开Git Bash 在命令行模式下通过cd 命令进入对应目录，在下图我进入的桌面(Desktop)目录
3. 我们首先设置对应GitHub账号用户名和邮件
* git config --global user.name 你自己的注册名
* git config --global user.email 你自己的注册邮件
4. 从远程GitHub仓库克隆刚刚初始化的项目 
* git clone https://github.com/你自己的仓库地址
5. 进入克隆目录，然后当完成对文件的编辑保存好之后，我们先将修改后的文件添加到缓存区。
6. 将提交的结果推送代码到远程GitHub仓库(（在这个过程，系统会要求我们输入远程GitHub的账号和密码，按提示输入即可，由于还原系统的问题，我们就不使用SSH方式登录，但是在后面我们会在单独介绍SSH免密登录）。) 

