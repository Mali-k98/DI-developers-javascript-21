CREATE TABLE orders(
    order_id int,
    items_in_order int,
    customer_name varchar(20),
    FOREIGN KEY items_in_order int REFERENCES items(item_id)
)
CREATE TABLE items(
    item_id int PRIMARY  KEY,
    item_name varchar(20) ,
    price interger,
)

CREATE FUNCTION total_price (itemP int, orderNo int)
RETURNS void AS $$
BEGIN
RETURN
END;
$$
LANGUAGE sql;