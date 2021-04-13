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
   SELECT DISTINCT * FROM table_name                --返回唯一不同的值，每行唯一
   SELECT DISTINCT column_name,column_name FROM table_name; --返回唯一不同的字段

   SELECT column_name,column_name FROM table_name
   WHERE column_name operator value;                  --操作字段
   WHERE operator = > < >= ,<=, !=,<> value;          --比较运算符

   WHERE operator not、and、or value;                 --逻辑运算符
   SELECT * FROM Websites WHERE country='CN' AND alexa > 50;
   SELECT * FROM Websites WHERE country='USA' OR country='CN';

   SELECT * FROM emp WHERE comm is null;              --空值判断
   SELECT * FROM emp WHERE sal between 1500 and 3000; --between and (在 之间的值)
   。。。。                                            --in
                                                      --like模糊查询 
   SELECT column_name,column_name FROM table_name
     ORDER BY column_name,column_name ASC|DESC;       --默认升序 DESC关键字降序

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
