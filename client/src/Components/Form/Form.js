import React from "react";
import "./Form.css";
// import { Link } from "react-router-dom";


const Form= () => (

 <form>
  <div class="form-group">
    <label for="Your Name">Name:</label>
    <div>
        <input type="text" placeholder="Your Name" required></input>
    </div>
  </div>
  <div class="form-group">
    <label for="">E-Mail:</label>
        <div>
            <input type="e-mail"  placeholder="E-Mail" required></input>
        </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

);

export default Form;
