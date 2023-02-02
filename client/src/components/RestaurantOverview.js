import './styles/restOverview.css';

const RestaurantOverview = () => {
    return (
        <div className='card'>
            <section className='card container'>
                <h1>Restaurant Title</h1>
                <img src="./asset/images/restaurant01.jpg"></img>
                <p>This is a description of the restaurant</p>
                <p>Address</p>
                <h2>Our Menu</h2>
                <div className='menu'> 
                    <p>BURGER - This is a well-written description of the menu item. It is very delicious and very nutritious. $15</p>
                </div>
                <h2>Hours of Operation</h2>
                <p>
                    11AM - 9PM Monday through Thursday {'\n'}
                    11AM - 12AM Friday through Saturday {'\n'}
                    CLOSED Sunday
                </p>
                <h2>Tags</h2>
                <div>
                    <span class="label other">Dog Friendly</span>
                    <span class="label other">Gluten Free</span>
                </div>
                {'\n'}
                <button className='resBtn'>Make A Reservation</button>
            </section>
        </div>
    )
}

export default RestaurantOverview;