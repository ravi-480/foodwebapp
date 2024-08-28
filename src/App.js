import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home/Home";
import Recipe from "./Components/Recipes/Recipe";
import Contact from "./Components/Contact/Contact";
import Favourite from "./Components/Favourites/Favourite";
import Detail from "./Components/Detail/Detail";
import PageTransition from "./Components/PageTransition";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/recipe"
            element={
              <PageTransition>
                <Recipe />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="/favourite"
            element={
              <PageTransition>
                <Favourite />
              </PageTransition>
            }
          />
          <Route
            path="/recipe-item/:id"
            element={
              <PageTransition>
                <Detail />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
