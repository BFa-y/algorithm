use DATEBASE; 选择数据库。
set names utf8; 设置字符集。
-- sql 功能
SQL 面向数据库执行查询
SQL 可从数据库取回数据
SQL 可在数据库中插入新的记录
SQL 可更新数据库中的数据
SQL 可从数据库删除记录
SQL 可创建新数据库
SQL 可在数据库中创建新表
SQL 可在数据库中创建存储过程
SQL 可在数据库中创建视图
SQL 可以设置表、存储过程和视图的权限
-- sql 命令
SELECT - 从数据库中提取数据
   SELECT column_name,column_name FROM table_name;  --根据字段查询
   SELECT * FROM table_name;                        --查全表
   SELECT DISTINCT * FROM table_name                --返回唯一不同的值

UPDATE - 更新数据库中的数据

DELETE - 从数据库中删除数据

INSERT INTO - 向数据库中插入新数据
  INSERT INTO table_name (column1,column2,column3,...)
  VALUES (value1,value2,value3,...);                --未插入字段NUll

CREATE DATABASE - 创建新数据库

ALTER DATABASE - 修改数据库
CREATE TABLE - 创建新表
ALTER TABLE - 变更（改变）数据库表
DROP TABLE - 删除表
CREATE INDEX - 创建索引（搜索键）
DROP INDEX - 删除索引
