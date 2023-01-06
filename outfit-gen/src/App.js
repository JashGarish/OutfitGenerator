import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateItem from "./components/add-item";
import Generate from "./components/generate";
function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/add-item"} className="nav-link">
                    Submit Clothing Item
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/generate"} className="nav-link">
                    Generate Outfit
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route exact path="/add-item" element={<CreateItem />} />
            <Route exact path="/generate" element={<Generate />} />
          </Routes>
        </header>
      </div>
    </div>
  );
}
export default App;
{
  /* ; */
}
