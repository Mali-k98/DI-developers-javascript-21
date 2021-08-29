const Carousel = ()=>{
return(
    <Carousel>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp"
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>Las vegas</h3>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp"
        alt="Second slide"
        />
        
        <Carousel.Caption>
        <h3>Japan</h3>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp"
        alt="Third slide"
        />
        
        <Carousel.Caption>
        <h3>Macao</h3>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg"
        alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Hong Kong</h3>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
)
}

export default Carousel