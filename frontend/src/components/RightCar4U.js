import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './RightCar4U.css';
import car from './RightCar4U/car.jpeg';
import luxury from './RightCar4U/luxury.jpeg';
import truck from './RightCar4U/truck.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Right Car For You</h1>
      </header>

      <main>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src={car} className="card-img-top" />
              <div class="card-body">
                <h5 class="card-title"><strong>CAR</strong></h5>
                <p class="card-text">
                Some users don’t really have a specific car in mind, but just want to buy a car because it's time. There are many great options such as Toyota, Honda, Nissan, Hyundai, and others that are affordable, last many years, don’t break down so easily, and are the perfect types of car to get started with. We can have a basic filter that gives them such options as well as basic needs such as heating, air conditioning, trunk space, number of miles per gallon, whether the car is electric or hybrid or combustion engine. Our user will be delighted to know that they won’t have to search individually anymore, but have all those options right by their fingertips. 
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={luxury}className="card-img-top" />
              <div class="card-body">
                <h5 class="card-title"><strong>LUXURY</strong></h5>
                <p class="card-text">Our project allows the user to filter out what exactly they want in their car or how it performs, which then filters through various databases from different car companies and compares the best options for them. For example, a user may own a construction company and needs a strong, sturdy truck that has great trunk space, and is capable of driving in heavy snow, rain, and even withstand hail. The user will instantly have access to many different trucks with the features and specs they need their truck to be able to have, as well as price range, mileage, capability, and horsepower. </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={truck} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title"> <strong>TRUCK</strong> </h5>
                <p class="card-text">This is a longer card with orting Some users may want a luxurious car with great horsepower as well, but more impressive for taking a lady out on a date. That car can be a Mercedes, BMW, Audi, Infiniti, or any other similar car with leather seats, V6 or V8 engine, tinted windows, and makes loud noises when it drives. By filtering out cars with tinted windows, luxury category, price, color, and horsepower which makes the car roam louder when it drives faster, our user will be happy to know they have so many varieties to choose from and can narrow it down with any more specific details that they would like.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      </div>
  );
}

export default App;
