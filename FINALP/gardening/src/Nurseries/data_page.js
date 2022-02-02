import arch from '../nurse-img/arch.jpg'
import cactus from '../nurse-img/cactus.webp'
import jungle from '../nurse-img/jungle.webp'
import pots from '../nurse-img/pots.jpg'
import seedlings from '../nurse-img/seedlings.jpg'
import suc from '../nurse-img/suc.jpg'

class product{
	constructor(category, name, link, price, img){
    	this.name=name;
      	this.category=category;
        this.link=link;
        this.price=price;
        this.img=img;
    }
}

let categories = ['All', 'Seeds', 'Plants', 'Pots', 'Tools', 'Gadgets', 'Furniture', 'Decor', 'Lights', 'Green house']



let all_products=[
    new product('Furniture', 'arch', 'http://www.google.com', 100, arch),
    new product('Pots', 'cactus', 'http://www.google.com', 52, cactus),
    new product('Pots', 'jungle', 'http://www.google.com', 1900, jungle),
    new product('Seeds', 'pots', 'http://www.google.com', 49, pots),
    new product('Seeds', 'seedlings', 'http://www.google.com', 100, seedlings),
    new product('Seeds', 'suc', 'http://www.google.com', 812, suc)
]



export { categories, all_products }