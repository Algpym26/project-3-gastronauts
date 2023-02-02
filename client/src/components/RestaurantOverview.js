import './styles/restOverview.css';

const RestaurantOverview = () => {
    return (
        <div className='card'>
            <section className='card container'>
                <h1>Restaurant Title</h1>
                <img src="../../asset/restaurant01.jpg"></img>
                <p>This is a description of the restaurant</p>
                <p>Address</p>
                <h2>Our Menu</h2>
                <div className='menu'> 
                    <p>BURGER - This is a well-written description of the menu item. It is very delicious and very nutritious. $15</p>
                </div>
            </section>
        </div>
    )
}

export default RestaurantOverview;