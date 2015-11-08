---
layout: post
keywords: k
description: d
title: t
categories: [note]
tags: [note]
group: archive
icon: globe
---

Quick setup — if you’ve done this kind of thing before

 Set up in Desktop  or  
 HTTPS
 SSH

https://github.com/YihuaWanglv/post.git

We recommend every repository include a README, LICENSE, and .gitignore.
…or create a new repository on the command line


echo # post >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/YihuaWanglv/post.git
git push -u origin master
…or push an existing repository from the command line


git remote add origin https://github.com/YihuaWanglv/post.git
git push -u origin master
…or import code from another repository

You can initialize this repository with code from a Subversion, Mercurial, or TFS project.


2. git如何提交修改到远程仓库？
    - $ git commit –m "desc.."  //对你更新或修改了哪些内容做一个描述
    - $ git remote add origin https://github.com/YihuaWanglv/post.git
    //如果你是第一次提交项目，这一句非常重要，这是你本地的当前的项目与远程的哪个仓库建立连接。
    - $ git push -u origin master  //将本地的项目提交到远程仓库中

3. 如果你是第一次想把github上面的项目克隆到本地或者要克隆别人的项目到地。
    - $ git clone git@github.com:defnngj/hibernate-demo.git  //在git下面切换到想存放此项目的文件目录下，运行这条命令就可以将项目克隆下来。

4. 假如本地已经存在了这个项目，而仓库中又有一新的更新，如何把更的合并到本地的项目中？
    - $ git fetch origin    //取得远程更新，这里可以看做是准备要取了
    - $ git merge origin/master  //把更新的内容合并到本地分支/master

5. 添加和提交
    - git add *
    - git commit -m "代码提交信息"
    - git push origin master
    - 输入用户名密码
    - 如果你还没有克隆现有仓库，并欲将你的仓库连接到某个远程服务器，你可以使用如下命令添加：
    - git remote add origin <server>
6. 重装系统后，git项目如何恢复？
    - 
7. gitignore
8. gitignore
9. gitignore
10. 

