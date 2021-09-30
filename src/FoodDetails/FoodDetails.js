import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useHistory, useParams } from 'react-router';
import './FoodDetails.css'
const FoodDetails = () => {
    let {foodId} = useParams()
    const history = useHistory();
    const [foodDetail, setFoodDetail] = useState([])
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFoodDetail(data.meals[0]))
    },[])
    const goWayHandler = ()=>{
        history.push('/resturant')
    }
    return (
        <CardGroup className="mx-auto my-4 w-25 h-25">
               <Card className="p-4 bg-info">
                    <Card.Img variant="top img-fluid rounded" src={foodDetail.strMealThumb} />
                    <Card.Body>
                    <Card.Title>{foodDetail.strMeal}</Card.Title>
                    <Card.Title>{foodDetail.strArea}</Card.Title>
                    <Card.Text>
                    {foodDetail.strInstructions}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><Button onClick={goWayHandler}>Details</Button></small>
                    </Card.Footer>
                </Card>
            </CardGroup>
    );
};

export default FoodDetails;