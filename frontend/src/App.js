import Footer from "./components/Footer";
import Header from "./components/Header";
import {Routes, Switch, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
        <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/search-page" element={<SearchPage />}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
