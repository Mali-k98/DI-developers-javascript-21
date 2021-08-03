CREATE TABLE animals(
	id int PRIMARY KEY,
	type varchar(20) UNIQUE,
);
INSERT INTO animals (id,type)
VALUES
(1,'cat'),
(2,'dog'),
(3,'hamster'),
(4,'mouse'),
(5,'horse'),
(6,'snake'),
(7,'spider')

CREATE TABLE breed (
    anBreed varchar(20),
    anName varchar(20) REFERENCES animals(type)
);
INSERT INTO breed(anBreed, anName)
Values 
('bengal',(SELECT type FROM animals WHERE type='cat')),
('labrador',(SELECT type FROM animals WHERE type='dog')),
('ragdoll',(SELECT type FROM animals WHERE type='cat')),
('tarantula',(SELECT type FROM animals WHERE type='spider')),
('nancy',(SELECT type FROM animals WHERE type='rabbit')),
('pitbull',(SELECT type FROM animals WHERE type='dog')),
('tabby',(SELECT type FROM animals WHERE type='cat'))

CREATE TABLE diet(
    food varchar(20) PRIMARY KEY,
    anType varchar(20) REFERENCES animals(type)
);
INSERT INTO diet (food, anType)
VALUES
('mice', (SELECT type FROM animals WHERE type='cat')),
('bones', (SELECT type FROM animals WHERE type='dog')),
('corn', (SELECT type FROM animals WHERE type='hamster')),
('jelly beans', (SELECT type FROM animals WHERE type='mouse')),
('hey' ,(SELECT type FROM animals WHERE type='horse')),
('mice', (SELECT type FROM animals WHERE type='snake')),
('fly' ,(SELECT type FROM animals WHERE type='spider'))


-- INNER JOIN

SELECT id, type , anBreed
FROM animals
INNER JOIN breed
ON type = anName
-- LEFT JOIN

SELECT type, anBreed
FROM animals
LEFT JOIN breed
ON type = anName

--RIGHT JOIN

SELECT type, anBreed
FROM animals
RIGHT JOIN breed
ON type = anName

--FULL JOIN

SELECT type ,, food ,
FROM animals 
FULL JOIN bree
FULL JOIN diet
ON type = anName = anType