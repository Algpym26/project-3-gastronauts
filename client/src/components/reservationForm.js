import './styles/reservation.css';

const reservationForm = () => {

    const userChecker = new RegExp("[A-Z\sa-z]{3,30}");

    const phoneChecker = new RegExp("(\d{3})-?\s?(\d{3})-?\s?(\d{4})");

    return (
        <div>
            <form action = "reservation.php" method = "post">
                <div className = "elem-group">
                    <label for = "name">Your Preferred Name</label>
                    <input type="text" id="name" name="customer_name" placeholder="Mariely Brite" pattern = {userChecker} required/>
                </div>
                <div class="elem-group">
              <label for="email">Your E-mail</label>
              <input type="email" id="email" name="visitor_email" placeholder="marbrite10@email.com" required/>
              <div class="elem-group">
              <label for="phone">Your Phone Number (We text updates)</label>
              <input type = "tel" id = "phone" name = "customer_phone" placeholder = "498-348-3872" pattern= {phoneChecker} required />
            </div>
            </div>
            </form>
        </div>
    )

}

export default reservationForm;