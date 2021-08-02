
--.1
SELECT * FROM items ORDER BY price DESC;
SELECT * FROM (SELECT * FROM items ORDER BY price ) AS items WHERE price >=80;
SELECT FROM customers ORDER BY fname FETCH FIRST 3 ROWS ONLY;
SELECT lname FROM customers ORDER BY lname DESC;


--.2
ALTER TABLE items ADD id int;
ALTER TABLE customers ADD id int;
CREATE TABLE items (
	FOREIGN KEY (items_id) REFERENCES items (id),
	FOREIGN KEY (customers_id) REFERENCES customers(id)
);

INSERT INTO (items_id,customers_id)
VALUES(
    (SELECT id FROM items WHERE fname='john'),
)
--ERROR
INSERT INTO (items_id,customers_id)
VALUES(
    (SELECT id FROM customers WHERE fname='john'),
    (SELECT id FROM items WHERE product='lamp')
),
(
    (SELECT id FROM customers WHERE fname='molly'),
    (SELECT id FROM items WHERE product='desk')
),
(
    (SELECT id FROM customers WHERE fname='ben'),
    (SELECT id FROM items WHERE product='desk','cupboard')
),
(
    (SELECT id FROM customers WHERE fname='jim'),
    (SELECT id FROM items WHERE product='cupboard')
),
(
    (SELECT id FROM customers WHERE fname='sally'),
    (SELECT id FROM items WHERE product='lamp')
),

--.3
SELECT * FROM purchases --not useful just ids

SELECT customers.id  FROM customer INNER JOIN purchases ON id = customers_id WHERE customers_id=4;
SELECT items.id FROM items INNER JOIN purchases ON id=items_id WHERE product = 'desk', 'lamp';