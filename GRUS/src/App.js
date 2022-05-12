import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  function renderSelected() {
    if (currentPage == "About") {
      return <About />;
    } else if (currentPage == "Contact") {
      return <Contact />;
    }
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#"
              onClick={() => {
                setCurrentPage("About");
              }}
            >
              About Me
            </Nav.Link>

            

            
            
            <Nav.Link
              href="#"
              onClick={() => {
                setCurrentPage("Contact");
              }}
            >
              Contact
            </Nav.Link>

            <Nav.Link
              href="#"
              onClick={() => {
                setCurrentPage("Search");
              }}
            >
              Search
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Nav.Link
              href="#"
              className="CheckoutCart"
              onClick={() => {
                setCurrentPage("Cart");
              }}
            >
              Cart
              <i class="fas fa-cart-arrow-down"></i>
            </Nav.Link>

            
      <Search/>

      {renderSelected()}

      <footer class="bg-dark text-center text-white">
        <div class="container p-4">
          <section class="mb-4 d-flex justify-content-around">
            <p>Link to Github https://github.com/acid-burn117/gamesRUS</p>
            <p>Contact Number 123-456-7895</p>
            <p>Email address 123@gmail.com</p>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default App;
