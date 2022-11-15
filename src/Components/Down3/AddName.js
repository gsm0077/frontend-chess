import React, { Component } from "react";
import "./AddName.css";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";

export class AddName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sname: "",
      sroll: "",
    };

    this.validator = new SimpleReactValidator();
  }

  handleSubmit = (event) => {
    if (this.validator.allValid()) {
      event.preventDefault();
      axios
        .post("https://back-chess.vercel.app/addname", this.state)
        .then((res) => console.log("posting data", res.data))
        .catch((err) => console.log(err.message));

      alert("You successfully submitted the name and Roll number");
    } else {
      event.preventDefault();
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  changing = (c) => {
    const value = c.target.value;
    const name = c.target.name;
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    return (
      <div className="container" id="cont" >
        <h1>Add Name</h1>
        <br />
        <form className="row g-3">
          <div className="row">
            <div className="col-md-6">
              <label>Full name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                aria-label="full name"
                value={this.state.sname}
                name="sname"
                onChange={this.changing}
              />
              {this.validator.message(
                "name",
                this.state.sname,
                "required|alpha",
                { className: "text-danger" }
              )}
            </div>
            <div className=" col-md-6">
              <label>Roll Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Roll Number"
                aria-label="roll number"
                value={this.state.sroll}
                name="sroll"
                onChange={this.changing}
              />
              {this.validator.message(
                "roll number",
                this.state.sroll,
                "required|numeric|min:1,num|max:30,num",
                { className: "text-danger" }
              )}
            </div>
          </div>

          <div className="col-12" id="but">
            <button  id="button"      
              type="submit"
              onClick={this.handleSubmit}>
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddName;
