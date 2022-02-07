import React, { useState } from "react"
import { categories, all_products, styles } from './data_page'
import { ProductsList } from './ProudoctList'
import { OptionDropDown } from './OptionDropDown'


function filter_product(list, property_name, property_value){
  let ret = []
    if(property_value === 'All'){
        ret = list
    }
    else{
      ret = list.filter(obj => {
        return obj[property_name] === property_value;
      });
  }
    ret = sort_by(ret, 'price')
    return ret
}

function sort_by(list, property, direction=1){
  if(property == 'no-sort'){
    return list
  }
  return list.sort((a, b) => (a[property] > b[property] ? 1*direction : -1*direction))
}

function Products() {
    const [current_category, set_current_category] = useState('All');
    const [current_list, set_current_list] = useState(all_products);
    const [current_style, set_current_style] = useState('All');
    const [current_sort, set_current_sort] = useState({'property-name':'no-sort', 'sort-direction':-1});

    const choose_category = (category) => {
      set_current_category(category);
      let filterd = filter_product(all_products, 'category', category)
      filterd = filter_product(filterd, 'style', current_style)
      filterd = sort_by(filterd, current_sort['property-name'], current_sort['sort-direction'])
      set_current_list(filterd)
    };
    function set_style(){
      let selected = document.getElementById('styles_drop_down')
      let style = selected.value
      set_current_style(style)
      let filterd = filter_product(all_products, 'category', current_category)
      filterd = filter_product(filterd, 'style', style)
      filterd = sort_by(filterd, current_sort['property-name'], current_sort['sort-direction'])
      set_current_list(filterd)
    }
    function set_sort_by(){
      let selected = document.getElementById('sort_drop_down')
      let sort_property_name = selected.value
      let sort_direction = 1
      if(sort_property_name != 'no-sort'){
        if(sort_property_name == 'price'){
          sort_direction = 1
        }
        else if(sort_property_name == 'stars'){
          sort_direction = -1
        }
      }
      set_current_sort({'property-name':sort_property_name, 'sort-direction': sort_direction})
      let filterd = filter_product(all_products, 'category', current_category)
      filterd = filter_product(filterd, 'style', current_style)
      filterd = sort_by(filterd, sort_property_name, sort_direction)
      set_current_list(filterd)
    }

    return (
      <>
        <div className='filters row'>
        <OptionDropDown label='filter by styles' id='styles_drop_down' onChange={set_style} options={styles}/>
        <OptionDropDown label='sort by' id='sort_drop_down' onChange={set_sort_by} options={['no-sort', 'price', 'stars']}/>
        </div>

        <ul className='prod-nav'>
              {categories.map((value, index) => {
                      return <li onClick={() => choose_category(value)} className={current_category === value ? 'focus': 'prod-nav-item'} key={index}>{value}</li>
                  })}
        </ul>
        <div className='prod-list'>
          <ProductsList className="products_list" products={current_list} />
        </div>
        </>
    )
}


export { Products }
