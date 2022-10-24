import img1 from './HowItWorks/1.png'
import img2 from './HowItWorks/2.png'

import './HowItWorks.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        For our Cars 4 U Website, we are using React.js incoroporated with Django and python to read and extract .csv files from car datasets. This allows us to have access to many different caars with different attributes from various datasets. We are also using .json files to fetch the .csv file and convert it so that the uer has all the data and information needed for when they search what kind of car they want. It is filtered by milage, whether the car is combustion engine or electric, make of model, and so on. We actually connect the user to the datbase itself through Django and extrct through React so it's user friendly. The front end part of the website uses React and has a navbar the allows the user to find what they need and filter anthing else out. This makes it easier when getting a car.
        </p>

      <img src={img1} width = "300px" height = "200px" />
      <img src={img2} width = "300px" height = "200px" />


      </header>
    </div>
  );
}

export default App;
