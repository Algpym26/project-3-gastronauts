import './styles/restOverview.css';
import seed from '../../../server/seeds/DDD.json';

const RestaurantOverview = () => {
    const restaurant = seed;
    return (
        <div className='card'>
            <section className='card container'>
                <h1>{restaurant.name}</h1>
                <img src="./asset/images/restaurant01.jpg"></img>
                <p>This is a description of the restaurant</p>
                <p>Address</p>
                <h2>Our Menu</h2>
                <div className='menu'> 
                    <p>BURGER - This is a well-written description of the menu item. It is very delicious and very nutritious. $15</p>
                </div>
                <h2>Hours of Operation</h2>
                <p className="hours">
                    11AM - 9PM Monday through Thursday {'\n'}
                    11AM - 12AM Friday through Saturday {'\n'}
                    CLOSED Sunday
                </p>
                <h2>Tags</h2>
                <div>
                    <span className="label other">Dog Friendly</span>
                    <span className="label other">Gluten Free</span>
                </div>
                {'\n'}
                <button className='resBtn'>Make A Reservation</button>
            </section>
        </div>
    )
}

export default RestaurantOverview;