



function ProductsList(props) {

    return (
        <ul className="p-item">
              {props.products.map((product, index) => {
                      return <li className='product' key={index}>
                        <a href={product.link}>
                          <button className='product text_styles'>
                            <img
                            src={product.img}/>
                            <p>{product.name}</p>
                            <p>{product.price} $</p>
                            <p>{product.stars} ★</p>
                          </button>
                        </a>
                      </li>
                  })}
            </ul>
    )
}

export { ProductsList }