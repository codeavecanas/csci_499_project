import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      <Header />
        <HomePage />
      <Footer />
    </div>
  )
}

export default App;
