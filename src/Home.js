import React, { useEffect, useState } from 'react'
import './Home.css'
import Container from 'react-bootstrap/Container';
import RestaurantCard from './RestaurantCard';






function Home() {
    const [restaurants, setRestaurant] = useState([])
    const fetchData = async () => {
        var result = await fetch('/restaurants.json')
        result.json().then(data => setRestaurant(data.restaurants))
    }
    console.log(restaurants);
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
        <RestaurantCard data={restaurants}></RestaurantCard>
        </div>
    )
}

export default Home