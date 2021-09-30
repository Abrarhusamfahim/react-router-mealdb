import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Food.css'
import { Link } from 'react-router-dom';
const Food = (props) => {
    const {strMeal, strArea, strMealThumb, strInstructions, idMeal} = props.food;
    let history = useHistory()

    const detailHandler = ()=>{
        history.push(`/Food/${idMeal}`)
    }
    const url = `/Food/${idMeal}`
    return (
            <CardGroup>
               <Card className="p-4 bg-info">
                    <Card.Img variant="top img-fluid rounded" src={strMealThumb} />
                    <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Title>{strArea}</Card.Title>
                    <Card.Text>
                    {strInstructions.slice(0, 100)}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Link to={url}>Click Here</Link> 
                    <hr />
                    <small className="text-muted"><Button onClick={detailHandler}>Details</Button></small>
                    </Card.Footer>
                </Card>
            </CardGroup>
    );
};

export default Food;