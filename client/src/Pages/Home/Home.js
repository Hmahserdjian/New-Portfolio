import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";


class Home extends Component {
  render() {
    return (
      <div>
          <Jumbotron>
            <Nav/>
            <h1>About Me</h1>
            
          </Jumbotron>
              <p> My Name is Hrag Mahserdjian. </p>
          <Footer/>
      </div>
    );
  }
}

export default Home;