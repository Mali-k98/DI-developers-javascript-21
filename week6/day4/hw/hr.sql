--1
SELECT first_name, last_name FROM employees 
--2
SELECT department_id FROM employees
--3
SELECT * FROM employees ORDER BY first_name DESC;
--4
SELECT first_name, last_name, salaryFROM employees;
--5
SELECT first_name, last_name, salary FROM employees ORDER BY salary ASC;
--6
SELECT SUM salary FROM employees;
--7
SELECT MIN(salary), MAX(salary) FROM employees;
--8
SELECT AVG(salary) FROM employees;
--10
CREATE OR REPLACE FUNCTION fullname(fn varchar(50), ln varchar(100)) 
RETURNS VARCHAR(100) AS $fullname$
DECLARE
    new_name VARCHAR(100);
BEGIN
SELECT CONCAT(first_name, ' ', last_name) FROM employees WHERE first_name = fn AND last_name=ln INTO new_name;
RETURN new_name;
END;
$fullname$ 
LANGUAGE plpgsql;
--11
SELECT SUBSTRING(first_name, 1, 3) AS ExtractString FROM employees;