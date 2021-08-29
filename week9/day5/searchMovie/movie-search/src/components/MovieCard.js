import React from 'react'

function MovieCard() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={MovieCard.Poster} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>
                    {movie.Plot}
                    </Card.Text>
                    <Button onClick='https://www.imdb.com/' variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
