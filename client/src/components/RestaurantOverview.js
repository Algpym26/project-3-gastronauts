import './styles/restOverview.css';
import seed from '../seeds/DDD.json';
import { useNavigate } from 'react-router-dom';
// Make sure restaurant cards link up to this component, pass value so that a restaurant is specified
const RestaurantOverview = () => {
    const restaurant = seed; // ADD SO THAT THE SEED IS PASSED A SPECIFIED RESTAURANT OBJECT IN THE SEED ARRAY
    //pass seed the array index of the restaurant for each restaurant? ex. seed[0] for Maggie's Moon Pies
    /* ex. 
    import {index (index of the restaurant array from restaurant card)} from 'RestaurantCards.js';

    (inside function)
    
    const restaurant = seed[index];
    */

    let navigate = useNavigate();
    const routeChange = () => {
    let path = `reservation`;
    navigate(path);
  }

    return (
        <div className='card'>
            <section className='card container'>
                <h1>{restaurant.name}</h1>
                <img src="./asset/images/restaurant01.jpg"></img>
                <p>{restaurant.description}</p>
                <p>{restaurant.location}</p>
                <h2>Our Menu</h2>
                <div className='menu'> 
                    <p>{restaurant.menu[0]}</p>
                    <p>{restaurant.menu[1]}</p>
                    <p>{restaurant.menu[2]}</p>
                    <p>{restaurant.menu[3]}</p>
                    <p>{restaurant.menu[4]}</p>
                    <p>{restaurant.menu[5]}</p>
                </div>
                <h2>Hours of Operation</h2>
                <p className="hours">{restaurant.hours}</p>
                <h2>Tags</h2>
                <div>
                    <span className="label other">{restaurant.tags[0]}</span>
                    <span className="label other">{restaurant.tags[1]}</span>
                    <span className="label other">{restaurant.tags[2]}</span>
                </div>
                {'\n'}
                <button className='resBtn' onClick={routeChange}>Make A Reservation</button>
            </section>
        </div>
    )
}

export default RestaurantOverview;