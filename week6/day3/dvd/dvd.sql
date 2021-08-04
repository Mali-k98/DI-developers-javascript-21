--part1
--1,2(.1,.2)
-- SELECT * FROM film
-- SELECT * FROM language
CREATE TABLE new_film(
	id int,
	name varchar(20)
);
INSERT INTO new_film(id, name) VALUES (1,'luca'),(2,'raya'),(3,'onward');
--3(1,2,3,4,5,6)
CREATE TABLE customer_review(
	review_id int PRIMARY KEY NOT NULL,
	film_id int REFERENCES new_film(id),
	language_id int REFERENCES language (language_id),
	title varchar(20),
	score int,
	review_text varchar(8000),
	last_update DATE
);
--4
INSERT INTO customer_review(review_id,film_id,language_id,title,score,review_text,last_update)
VALUES 
(1, (SELECT id FROM new_film WHERE name='luca'),
(SELECT language_id FROM language WHERE language_id='1'),
'luca review',8,'such a great movie', 2021-08-12),
(2, (SELECT id FROM new_film WHERE name='raya'),
(SELECT language_id FROM language WHERE language_id='1'),
'raya review',2,'such a bad movie', 2021-07-22);

--5
ALTER TABLE new_film
DROP CONSTRAINT onward;



--part2
--1
UPDATE language
SET name ='DUTCH'
WHERE language_id=6
--3
DROP TABLE new_film 
--then
DROP TABLE customer_review
--4
SELECT * FROM rental WHERE return_date=NULL