Git 命令
#### 初始化一个文件夹为本地仓库
$ git init
#### 查看状态
$ git status
$ git status -s (简短删除)
$ git status -sb
#### 列出所有本地分支
$ git branch
#### 列出所有远程分支
$ git branch -r
#### 列出所有本地分支和远程分支
$ git branch -a
#### 本地仓库与远程仓库关联
$ git remote add origin git@github.com:xxxxx.git 
#### 将所有修改添加到暂存区
$ git add .
#### 提交修改到本地仓库(提交必须有注释)
$ git commit -m "描述信息" 
#### 推送(并合并)到远程分支
$ git push 
$ git push -u origin master
#### 拉取并合并
$ git pull
#### 克隆
$ git clone