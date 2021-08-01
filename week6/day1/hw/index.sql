-- first ex
CREATE DATABASE public;

CREATE TABLE items(
    product datatype,
    price datatype,
);
INSERT INTO item (product,price)
VALUE 
('desk','100'),
('lamp','80'),
('cupboard','300');

CREATE TABLE customers(
    fname datatype;
    lname
);
INSERT INTO customers (fname, lname)
VALUE 
('john','doe'),
('molly','smith'),
('ben','white'),
('jim','bean'),
('sally','smith');

SELECT * FROM items,customers;
SELECT * FROM items where price > 80;
SELECT * FROM items where price < 300;

SELECT * FROM customers where lname='jones' --nothing
SELECT * FROM customers where lname='smith'
SELECT * FROM customers where fname<>'sally'

--second exc
CREATE DATABASE bootcamp;

CREATE TABLE student (
    id INT,
    first_name CHAR,
    last_name CHAR,
    birth_date DATE;
);

INSERT INTO student (first_name,last_name,birth_date)
VALUE 
('Marc',	'Benichou',	02/11/1998),
('Yoan',	'Cohen',	03/12/2010),
('Lea',	'Benichou',	27/07/1987),
('Amelia','Dux',	07/04/1996),
('David',	'Grez',	14/06/2003),
('Omer'	'Simpson',	03/10/1980),
('amalia','kemp', 08/28/1998);

SELECT *FROM student where id=2;
SELECT * FROM student where last_name='Benichou' AND first_name='Marc';
SELECT * FROM student where first_name like '%a%';
SELECT * FROM student where first_name like 'a%';
SELECT * FROM student where first_name like '%_a';
SELECT *FROM student where id=1 AND 3;
SELECT * FROM student where birth_date >= 01/01/2000;