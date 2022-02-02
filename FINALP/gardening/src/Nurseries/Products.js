import React, { useState } from "react"
import { categories, all_products } from './data_page'
import { ProductsList } from './ProudoctList'


function filter_product(category){
    let ret=[]
    if(category == 'All'){
        return all_products
    }
    all_products.map((product) => {
        if(product.category == category){
            ret.push(product)
        }
    })
    return ret
}


function Products() {
    const [current_catagoey, set_current_catagoey] = useState('All');
  
    const toggleClass = (index) => {
      set_current_catagoey(index);
    };

    return (
      <>
        <ul className='prod-nav'>
              {categories.map((value, index) => {
                      return <li onClick={() => toggleClass(value)} className={current_catagoey == value ? 'focus': 'prod-nav-item'} key={index}>{value}</li>
                  })}
        </ul>
        <div className='prod-list'>
          <ProductsList className="products_list" products={filter_product(current_catagoey)} />
        </div>
        </>
    )
}


export { Products }
