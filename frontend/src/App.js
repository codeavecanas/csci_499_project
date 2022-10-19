import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
          <Header />
            <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/" component={SearchPage}/>
              <Route path="how-it-works"/>
            </Switch>
          <Footer />
      </div>
    </Router>
    
  )
}

export default App;
