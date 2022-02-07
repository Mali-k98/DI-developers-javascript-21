

class product{
	constructor(category, name, link, price, img, stars, style){
    	this.name=name;
      	this.category=category;
        this.link=link;
        this.price=price;
        this.img=img;
        this.stars=stars;
        this.style=style;
    }
}

let categories = ['All', 'Seeds', 'Plants', 'Pots', 'Tools', 'Gadgets', 'Furniture', 'Decor', 'Lights', 'Green house']
let styles = ['All', 'style1', 'style2', 'style3']



let all_products=[
    new product('Pots', 'plain white', 'https://amzn.to/3olpV7m', 21.99, 'https://m.media-amazon.com/images/I/81ECw6JICkL._AC_SL1500_.jpg', 5, 'style3'),
    new product('Pots', 'plain black', 'https://amzn.to/35Bdn5a', 22.99, 'https://m.media-amazon.com/images/I/61GXOG991LL._AC_SL1100_.jpg',4, 'style3'),
    new product('Seeds', 'plain 	Terra Cotta', 'https://amzn.to/3scHlEr', 22.99, 'https://m.media-amazon.com/images/I/71Ai7BpN14L._AC_SL1500_.jpg', 3.2, 'style3'),
    new product('Pots', 'cute pot', 'https://amzn.to/3gksySt', 11.49, "https://m.media-amazon.com/images/I/519zfnX9p0L._AC_.jpg", 2.1, 'style1'),
    new product('Pots', 'cute pot', 'https://amzn.to/3gixwyX', 240.99, "https://m.media-amazon.com/images/I/713DYeKpFGL._AC_SL1500_.jpg", 5, 'style3'),
    new product('Tools', 'magical pot', 'https://amzn.to/34iJSVo', 25.95, "https://m.media-amazon.com/images/I/51eV9-ZBEgL._AC_.jpg", 1, 'style3'),
    new product('Pots', 'chair pot', 'https://amzn.to/35NplJd', 69.19, "https://m.media-amazon.com/images/I/81IIhmtenJS._AC_SL1500_.jpg",4.58 ,'style3'),
]

export { categories, all_products, styles }