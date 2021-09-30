import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Row, Spinner } from 'react-bootstrap';
import Food from '../Food/Food';
import './Restuarant.css'
const Friends = () => {
    const [foods, setFoods] = useState([]);
    const [input, setInput] = useState('')
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    },[input])
    const inputField = (fatema)=>{
        const searchFood = fatema.target.value;
        setInput(searchFood)
    }
    return (
        <div>
            <InputGroup  onChange={inputField} className="mx-auto mt-3 mb-3 w-50">
                <FormControl
                placeholder="Search your favourite foods"
                aria-label="Search your favourite foods"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                Button
                </Button>
            </InputGroup>
            {
                foods.length === 0 ?
                <Spinner animation="border" variant="info" />
                :
                <Row xs={2} md={3} className="container mx-auto g-4">
                    {
                    foods.map(food => <Food food={food}></Food>)
                    }
            </Row>
            }
        </div>
    );
};

export default Friends;