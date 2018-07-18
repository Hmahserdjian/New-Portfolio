import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import Form from "../../Components/Form";


class Contact extends Component {
  render() {
    return (
      <div>
        
          <Jumbotron>
            <Nav/>
            <h1>Contact Info</h1>
          </Jumbotron>
              <Form/>

  

          <Footer/>
      </div>
    );
  }
}

export default Contact;