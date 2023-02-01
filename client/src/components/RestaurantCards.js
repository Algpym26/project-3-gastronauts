import './styles/wheel.css';

import './https://fonts.googleapis.com/css?family=Open+Sans:300i,400';

const reservationCards = () =>
{

    const moonImage = "./asset/images/planet1.PNG";

    const dipperImage = "./asset/images/dipper.PNG";

    const cometImage = "./asset/images/comet.PNG";

    const novaImage = "./asset/images/nova.PNG";

    return (
        <div className = "container">
            <div class="card">
        <h3 class="title">Maggie's Moon Pies</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle id = "circleView" class="stroke" cx="60" cy="60" r="50"/>
          <image href = {moonImage} alt = "moon" />
        </svg>
        </div>
      </div>
      <div class="card">
        <h3 class="title">Far Out Bar</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle class="stroke" cx="60" cy="60" r="50"/>
          <image href = {dipperImage} />
        </svg>
        </div>
      </div>
      <div class="card">
        <h3 class="title">Estella's</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle">
          <svg version="1.1"  xmlns="http://www.w3.org/2000/svg">
          <circle class="stroke" cx="60" cy="60" r="50"/>
          <image href = {cometImage} alt = "comet" />
        </svg>
        </div>
      </div>
      <div class="card">
        <h3 class="title">At the End of the Universe</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle class="stroke" cx="60" cy="60" r="50"/>
          <image href = {novaImage} />
        </svg>
        </div>
      </div>
        </div>
    )
}

export default reservationCards;