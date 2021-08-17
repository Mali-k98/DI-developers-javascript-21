const counter = 0;
import { Increment } from "./App4";

const Vote= ()=>{
    return(
        <>
        <Card className="text-center">
        <Card.Body>
            <Card.Title>manchester city</Card.Title>
            <Button variant="primary" onClick={Increment}>Vote</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{counter}</Card.Footer>
        </Card>
        <Card className="text-center">
        <Card.Body>
            <Card.Title>chealse</Card.Title>
            <Button variant="primary" onClick={Increment}>Vote</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{counter}</Card.Footer>
        </Card>
        <Card className="text-center">
        <Card.Body>
            <Card.Title>Liverpool</Card.Title>
            <Button variant="primary" onClick={Increment}>Vote</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{counter}</Card.Footer>
        </Card>
        <Card className="text-center">
        <Card.Body>
            <Card.Title>manchester united</Card.Title>
            <Button variant="primary" onClick={Increment}>Vote</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{counter}</Card.Footer>
        </Card>
        </>
    )
}

export default Vote